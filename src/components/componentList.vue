<template>
	<div class="menu-list">
		<a-list item-layout="horizontal" :data-source="list">
			<template v-slot:renderItem="{ item }">
				<a-list-item>
					<a-list-item-meta>
						<template v-slot:title>
							<p @click="openDrawer(item.type, item.title)">{{ item.title }}</p>
						</template>
					</a-list-item-meta>
				</a-list-item>
			</template>
		</a-list>
		<a-drawer
			:title="title"
			placement="left"
			:closable="true"
			:width="400"
			v-model:visible="visible"
			:mask="false"
			:destroyOnClose="true"
		>
			<custom-button v-if="current === 'button'" />
			<custom-icon v-if="current === 'icon'" />
		</a-drawer>
	</div>
</template>
<script>
import CustomButton from './customButton.vue';
import CustomIcon from './customIcon.vue';
import { reactive, ref, toRefs } from 'vue';
export default {
	setup() {
		const state = reactive({
			list: [
				{ type: 'button', title: 'Button 按钮' },
				{ type: 'icon', title: 'Icon 图标' },
				{ type: '', title: 'Grid 栅格' },
				{ type: '', title: 'Layout 布局' },
				{ type: '', title: 'Space 间距' },
				{ type: '', title: 'Affix 固钉' },
				{ type: '', title: 'Breadcrumb 面包屑' },
				{ type: '', title: 'Dropdown 下拉菜单' },
				{ type: '', title: 'Menu 导航菜单' },
				{ type: '', title: 'PageHeader 页头' },
				{ type: '', title: 'Pagination 分页' },
				{ type: '', title: 'Steps 步骤条' },
				{ type: '', title: 'AutoComplete 自动完成' },
				{ type: '', title: 'Cascader 级联选择' },
				{ type: '', title: 'Checkbox 多选框' },
				{ type: '', title: 'DatePicker 日期选择框' },
				{ type: '', title: 'Form 表单' },
				{ type: '', title: 'Input 输入框' },
				{ type: '', title: 'InputNumber 数字输入框' },
				{ type: '', title: 'Mentions 提及' },
				{ type: '', title: 'Radio 单选框' },
				{ type: '', title: 'Rate 评分' },
				{ type: '', title: 'Select 选择器' },
				{ type: '', title: 'Slider 滑动输入条' },
				{ type: '', title: 'Switch 开关' },
				{ type: '', title: 'TimePicker 时间选择框' },
				{ type: '', title: 'Transfer 穿梭框' },
				{ type: '', title: 'TreeSelect 树选择' },
				{ type: '', title: 'Upload 上传' },
				{ type: '', title: 'Avatar 头像' },
				{ type: '', title: 'Badge 徽标数' },
				{ type: '', title: 'Calendar 日历' },
				{ type: '', title: 'Card 卡片' },
				{ type: '', title: 'Carousel 走马灯' },
				{ type: '', title: 'Collapse 折叠面板' },
				{ type: '', title: 'Comment 评论' },
				{ type: '', title: 'Descriptions 描述列表' },
				{ type: '', title: 'Empty 空状态' },
				{ type: '', title: 'List 列表' },
				{ type: '', title: 'Popover 气泡卡片' },
				{ type: '', title: 'Statistic 统计数值' },
				{ type: '', title: 'Table 表格' },
				{ type: '', title: 'Tabs 标签页' },
				{ type: '', title: 'Tag 标签' },
				{ type: '', title: 'Timeline 时间轴' },
				{ type: '', title: 'Tooltip 文字提示' },
				{ type: '', title: 'Tree 树形控件' },
				{ type: '', title: 'Alert 警告提示' },
				{ type: '', title: 'Drawer 抽屉' },
				{ type: '', title: 'Message 全局提示' },
				{ type: '', title: 'Modal 对话框' },
				{ type: '', title: 'Notification 通知提醒框' },
				{ type: '', title: 'Popconfirm 气泡确认框' },
				{ type: '', title: 'Progress 进度条' },
				{ type: '', title: 'Result 结果' },
				{ type: '', title: 'Skeleton 骨架屏' },
				{ type: '', title: 'Spin 加载中' },
				{ type: '', title: 'Anchor 锚点' },
				{ type: '', title: 'BackTop 回到顶部' },
				{ type: '', title: 'ConfigProvider 全局化配置' },
				{ type: '', title: 'Divider 分割线' },
				{ type: '', title: 'LocaleProvider 国际化' },
			],
			visible: false,
			title: '',
			current: '',
		});

		function openDrawer(type, title) {
			state.visible = true;
			state.title = title;
			state.current = type;
		}

		return {
			...toRefs(state),
			openDrawer,
		};
	},
	components: {
		CustomButton,
		CustomIcon,
	},
};
</script>
<style lang="less">
.menu-list {
	.ant-list-item-meta-title {
		cursor: pointer;
	}
}
</style>
<style lang="less" scoped>
.menu-list {
	height: calc(~'100vh - 64px');
	overflow: auto;
}
</style>
