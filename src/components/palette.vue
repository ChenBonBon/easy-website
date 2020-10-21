<template>
	<section>
		<div class="palette"></div>
		red: <input type="range" min="0" max="255" v-model="red" /> green:
		<input type="range" min="0" max="255" v-model="green" /> blue:
		<input type="range" min="0" max="255" v-model="blue" /> alpha:
		<input type="range" min="0" max="1" v-model="alpha" step="0.1" />
	</section>
</template>
<script>
import { computed, reactive, toRefs, watch } from 'vue';
export default {
	setup(props, context) {
		const state = reactive({
			red: 0,
			green: 0,
			blue: 0,
			alpha: 1,
		});

		watch(
			[() => state.red, () => state.green, () => state.blue, () => state.alpha],
			([red, green, blue, alpha]) => {
				context.emit('colorChange', { red, green, blue, alpha });
			}
		);

		return {
			...toRefs(state),
		};
	},
};
</script>
<style lang="less" scoped vars="{red, green, blue, alpha}">
.palette {
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: rgba(var(--red), var(--green), var(--blue), var(--alpha));
	border: 1px solid #000;
}
</style>
