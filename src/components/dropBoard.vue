<template>
	<div class="drop-board" @dragover="dragoverHandle" @drop="dropHandle">
		<div v-if="count === 0">{{ placeholder }}</div>
		<a-popconfirm
			v-for="(button, index) in buttonList"
			:key="index"
			title="Are you sure delete this task?"
			ok-text="Yes"
			cancel-text="No"
			@confirm="confirm('button', index)"
			@cancel="cancel"
		>
			<a-button
				:disabled="button.disabled === 'true'"
				:ghost="button.ghost === 'true'"
				:loading="button.loading === 'true'"
				:shape="button.shape === '' ? null : button.shape"
				:size="button.size"
				:type="button.type"
				:style="{ position: 'absolute', top: `${button.y}px`, left: `${button.x}px` }"
				:draggable="true"
				@dragstart="dragstartHandle($event, 'button', index)"
				>{{ button.title }}</a-button
			>
		</a-popconfirm>
		<a-popconfirm
			v-for="(icon, index) in iconList"
			:key="index"
			title="Are you sure delete this task?"
			ok-text="Yes"
			cancel-text="No"
			@confirm="confirm('icon', index)"
			@cancel="cancel"
		>
			<span
				v-html="icon.html"
				class="custom-icon-container"
				:style="{ position: 'absolute', top: `${icon.props.y}px`, left: `${icon.props.x}px` }"
				@dragstart="dragstartHandle($event, 'icon', index)"
			></span>
		</a-popconfirm>
	</div>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const state = reactive({
			placeholder: '请将组件放置在此处',
			count: 0,
			buttonList: [],
			iconList: [],
		});

		function dragoverHandle(e) {
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';
		}

		function dropHandle(e) {
			e.preventDefault();
			const data = e.dataTransfer.getData('text/plain');
			const { offsetX, offsetY } = e;
			const componentObj = JSON.parse(data);
			const { type, props, html } = componentObj;
			(props.x = offsetX), (props.y = offsetY);
			switch (type) {
				case 'button':
					if (!props.exist) {
						state.buttonList.push(props);
						state.count++;
					} else {
						state.buttonList[props.index] = props;
					}
					break;
				case 'icon':
					if (!props.exist) {
						state.iconList.push({ props, html });
						state.count++;
					} else {
						state.iconList[props.index].props = props;
					}
					break;
				default:
					break;
			}
		}

		function dragstartHandle(e, type, index) {
			let props = {};
			let html = {};
			switch (type) {
				case 'button':
					props = state.buttonList[index];
					props.exist = true;
					props.index = index;
					break;
				case 'icon':
					props = state.iconList[index].props;
					html = state.iconList[index].html;
					props.exist = true;
					props.index = index;
					break;
				default:
					break;
			}
			e.dataTransfer.setData('text/plain', JSON.stringify({ type, props, html }));
		}

		function confirm(type, index) {
			switch (type) {
				case 'button':
					state.buttonList.splice(index, 1);
					break;
				case 'icon':
					state.iconList.splice(index, 1);
					break;
				default:
					break;
			}
		}

		function cancel() {
			return false;
		}

		return {
			...toRefs(state),
			dragoverHandle,
			dropHandle,
			dragstartHandle,
			confirm,
			cancel,
		};
	},
};
</script>
<style lang="less" scoped>
.drop-board {
	position: relative;
	width: 100%;
	height: 100%;
	color: rgba(0, 0, 0, 0.65);
}
.custom-icon-container {
	cursor: pointer;
	line-height: 1;
}
</style>
