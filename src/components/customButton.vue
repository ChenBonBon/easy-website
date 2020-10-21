<template>
	<div>
		<a-button
			:disabled="disabled"
			:ghost="ghost"
			:loading="loading"
			:shape="shape"
			:size="size"
			:type="type"
			:draggable="true"
			@dragstart="dragstartHandle"
			>{{ form.title }}</a-button
		>
		<a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
			<a-form-item label="按钮文本">
				<QuestionCircleOutlined />
				<a-input class="form-input" v-model:value="form.title" />
			</a-form-item>
			<a-form-item label="disabled" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.disabled">
					<a-select-option value="true"> true </a-select-option>
					<a-select-option value="false"> false </a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="ghost" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.ghost">
					<a-select-option value="true"> true </a-select-option>
					<a-select-option value="false"> false </a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="loading" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.loading">
					<a-select-option value="true"> true </a-select-option>
					<a-select-option value="false"> false </a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="shape" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.shape">
					<a-select-option value=""> - </a-select-option>
					<a-select-option value="circle"> circle </a-select-option>
					<a-select-option value="round"> round </a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="size" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.size">
					<a-select-option value="default"> default </a-select-option>
					<a-select-option value="small"> small </a-select-option>
					<a-select-option value="large"> large </a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="type" :colon="false">
				<QuestionCircleOutlined />
				<a-select class="form-input" v-model:value="form.type">
					<a-select-option value="default"> default </a-select-option>
					<a-select-option value="primary"> primary </a-select-option>
					<a-select-option value="dashed"> dashed </a-select-option>
					<a-select-option value="danger"> danger </a-select-option>
					<a-select-option value="link"> link </a-select-option>
				</a-select>
			</a-form-item>
		</a-form>
	</div>
</template>
<script>
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { computed, reactive, toRefs } from 'vue';
export default {
	setup() {
		const state = reactive({
			labelCol: { span: 4 },
			wrapperCol: { span: 18, offset: 1 },
			type: 'button',
			form: {
				title: 'click',
				disabled: 'false',
				ghost: 'false',
				loading: 'false',
				shape: '',
				size: 'default',
				type: 'default',
			},
		});

		const disabled = computed(() => state.form.disabled === 'true');
		const ghost = computed(() => state.form.ghost === 'true');
		const loading = computed(() => state.form.loading === 'true');
		const shape = computed(() => (state.form.shape === '' ? null : state.form.shape));
		const size = computed(() => state.form.size);
		const type = computed(() => state.form.type);

		function onSubmit() {
			console.log('submit!', state.form);
		}

		function dragstartHandle(e) {
			e.dataTransfer.setData(
				'text/plain',
				JSON.stringify({
					type: state.type,
					props: state.form,
				})
			);
		}

		return {
			...toRefs(state),
			disabled,
			ghost,
			loading,
			shape,
			size,
			type,
			onSubmit,
			dragstartHandle,
		};
	},
	components: {
		QuestionCircleOutlined,
	},
};
</script>
<style lang="less" scoped>
.form-input {
	margin-left: 10px;
	width: 90%;
}
</style>
