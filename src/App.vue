<template>
	<div class="container">
		<a-layout>
			<a-layout-header>{{ title }}</a-layout-header>
			<a-layout>
				<a-layout-sider :width="400"><component-list /></a-layout-sider>
				<a-layout-content><drop-board /></a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import ComponentList from './components/componentList.vue';
import DropBoard from './components/dropBoard.vue';
export default {
	setup() {
		const state = reactive({
			title: 'Easy Website',
		});

		return {
			...toRefs(state),
		};
	},
	components: {
		ComponentList,
		DropBoard,
	},
};
</script>
<style lang="less">
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0 !important;
}
button {
	pointer-events: all !important;
}
</style>
<style lang="less" scoped>
.container {
	text-align: center;
	.ant-layout-header {
		background: #fff;
	}
	.ant-layout-sider {
		background: #fff;
		line-height: 120px;
	}
	.ant-layout-content {
		color: #fff;
		min-height: 120px;
		line-height: 120px;
	}
	> .ant-layout {
		margin-bottom: 48px;
	}
	> .ant-layout:last-child {
		margin: 0;
	}
}
</style>
