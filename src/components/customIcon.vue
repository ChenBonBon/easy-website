<template>
	<a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
		<a-form-item label="字号">
			<QuestionCircleOutlined />
			<a-input-number
				class="form-input"
				v-model:value="form.fontSize"
				:formatter="(value) => `${value}px`"
				:parser="(value) => value.replace('px', '')"
			/>
		</a-form-item>
		<a-form-item label="颜色">
			<QuestionCircleOutlined />
			<palette
				:red="form.red"
				:green="form.green"
				:blue="form.blue"
				:alpha="form.alpha"
				@colorChange="colorChange"
			/>
		</a-form-item>
	</a-form>
	<div class="custom-icon-list">
		<StepBackwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<StepForwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FastBackwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FastForwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ShrinkOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ArrowsAltOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DownOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<UpOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<LeftOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<RightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CaretUpOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CaretDownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CaretLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CaretRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UpCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DownCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LeftCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RightCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DoubleRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DoubleLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerticalLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerticalRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerticalAlignTopOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerticalAlignMiddleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerticalAlignBottomOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ForwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BackwardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RollbackOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EnterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RetweetOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SwapOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SwapLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SwapRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ArrowUpOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ArrowDownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ArrowLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ArrowRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PlayCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UpSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DownSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LeftSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RightSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LoginOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LogoutOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MenuFoldOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MenuUnfoldOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderBottomOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderHorizontalOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderInnerOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderOuterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderTopOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderVerticleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PicCenterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PicLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PicRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadiusBottomleftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadiusBottomrightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadiusUpleftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadiusUprightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FullscreenOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FullscreenExitOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<QuestionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<QuestionCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PlusOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<PlusCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PauseOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PauseCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MinusOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MinusCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PlusSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MinusSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InfoOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<InfoCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExclamationOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExclamationCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloseOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloseCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloseSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CheckOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CheckCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CheckSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ClockCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WarningOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<IssuesCloseOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<StopOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<EditOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<FormOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<CopyOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ScissorOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DeleteOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SnippetsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DiffOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<HighlightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlignCenterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlignLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlignRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BgColorsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BoldOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ItalicOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UnderlineOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<StrikethroughOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RedoOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<UndoOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ZoomInOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ZoomOutOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FontColorsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FontSizeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LineHeightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DashOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SmallDashOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SortAscendingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SortDescendingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DragOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<OrderedListOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UnorderedListOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadiusSettingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ColumnWidthOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ColumnHeightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AreaChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PieChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BarChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DotChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LineChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RadarChartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<HeatMapOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FallOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<RiseOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<StockOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BoxPlotOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FundOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SlidersOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AndroidOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AppleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WindowsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<IeOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ChromeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GithubOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AliwangwangOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DingdingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WeiboSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WeiboCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TaobaoCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<Html5Outlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WeiboOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TwitterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WechatOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<YoutubeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlipayCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TaobaoOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SkypeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<QqOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<MediumWorkmarkOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GitlabOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MediumOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LinkedinOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GooglePlusOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DropboxOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FacebookOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CodepenOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CodeSandboxOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AmazonOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GoogleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CodepenCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlipayOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AntDesignOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AntCloudOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AliyunOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ZhihuOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SlackOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SlackSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BehanceOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BehanceSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DribbbleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DribbbleSquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InstagramOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<YuqueOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AlibabaOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<YahooOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RedditOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SketchOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AccountBookOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AimOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<AlertOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ApartmentOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ApiOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<AppstoreAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AppstoreOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AudioOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AudioMutedOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<AuditOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BankOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<BarcodeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BarsOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<BellOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<BlockOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BookOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<BorderOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BorderlessTableOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BranchesOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BugOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<BuildOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<BulbOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<CalculatorOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CalendarOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CameraOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CarOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<CarryOutOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CiCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CiOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ClearOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloudDownloadOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloudOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloudServerOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloudSyncOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CloudUploadOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ClusterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CodeOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<CoffeeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CommentOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CompassOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CompressOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ConsoleSqlOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ContactsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ContainerOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ControlOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CopyrightCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CopyrightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CreditCardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CrownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<CustomerServiceOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DashboardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DatabaseOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DeleteColumnOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DeleteRowOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DeliveredProcedureOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DeploymentUnitOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DesktopOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DingtalkOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DisconnectOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DislikeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DollarCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DollarOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<DownloadOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EllipsisOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EnvironmentOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EuroCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EuroOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ExceptionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExpandAltOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExpandOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExperimentOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ExportOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<EyeOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<EyeInvisibleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FieldBinaryOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FieldNumberOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FieldStringOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FieldTimeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileDoneOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileExcelOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileExclamationOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<FileGifOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileImageOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileJpgOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileMarkdownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FilePdfOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FilePptOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileProtectOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileSearchOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileSyncOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileTextOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileUnknownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileWordOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FileZipOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FilterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FireOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<FlagOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<FolderAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FolderOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FolderOpenOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FolderViewOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ForkOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<FormatPainterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FrownOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FunctionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FundProjectionScreenOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FundViewOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<FunnelPlotOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GatewayOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GifOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<GiftOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<GlobalOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<GoldOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<GroupOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<HddOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<HeartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<HistoryOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<HomeOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<HourglassOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<IdcardOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ImportOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InboxOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InsertRowAboveOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InsertRowBelowOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InsertRowLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InsertRowRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InsuranceOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<InteractionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<KeyOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<LaptopOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LayoutOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LikeOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<LineOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<LinkOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<Loading3QuartersOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LoadingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<LockOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<MacCommandOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MailOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ManOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<MedicineBoxOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MehOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<MenuOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<MergeCellsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MessageOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MobileOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MoneyCollectOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MonitorOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<MoreOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<NodeCollapseOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<NodeExpandOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<NodeIndexOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<NotificationOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<NumberOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<OneToOneOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PaperClipOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PartitionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PayCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PercentageOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PhoneOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PictureOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PlaySquareOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PoundCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PoundOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PoweroffOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PrinterOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ProfileOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ProjectOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PropertySafetyOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PullRequestOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<PushpinOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<QrcodeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ReadOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ReconciliationOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RedEnvelopeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ReloadOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RestOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<RobotOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RocketOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RotateLeftOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<RotateRightOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SafetyCertificateOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SafetyOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SaveOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ScanOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ScheduleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SearchOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SecurityScanOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SelectOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SendOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SettingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ShakeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ShareAltOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ShopOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ShoppingCartOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ShoppingOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SisternodeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SkinOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SmileOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SolutionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SoundOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SplitCellsOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<StarOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<SubnodeOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SwitcherOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<SyncOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<TableOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TabletOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TagOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<TagsOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<TeamOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<ThunderboltOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ToTopOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<ToolOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<TrademarkCircleOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TrademarkOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TransactionOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TranslationOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<TrophyOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UngroupOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UnlockOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UploadOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UsbOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<UserAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UserDeleteOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UserOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<UserSwitchOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UsergroupAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<UsergroupDeleteOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VerifiedOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VideoCameraAddOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<VideoCameraOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WalletOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WhatsAppOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
		<WifiOutlined class="custom-icon" :draggable="true" @dragstart="dragstartHandle" :style="{ fontSize, color }" />
		<WomanOutlined
			class="custom-icon"
			:draggable="true"
			@dragstart="dragstartHandle"
			:style="{ fontSize, color }"
		/>
	</div>
</template>
<script>
import {
	StepBackwardOutlined,
	StepForwardOutlined,
	FastBackwardOutlined,
	FastForwardOutlined,
	ShrinkOutlined,
	ArrowsAltOutlined,
	DownOutlined,
	UpOutlined,
	LeftOutlined,
	RightOutlined,
	CaretUpOutlined,
	CaretDownOutlined,
	CaretLeftOutlined,
	CaretRightOutlined,
	UpCircleOutlined,
	DownCircleOutlined,
	LeftCircleOutlined,
	RightCircleOutlined,
	DoubleRightOutlined,
	DoubleLeftOutlined,
	VerticalLeftOutlined,
	VerticalRightOutlined,
	VerticalAlignTopOutlined,
	VerticalAlignMiddleOutlined,
	VerticalAlignBottomOutlined,
	ForwardOutlined,
	BackwardOutlined,
	RollbackOutlined,
	EnterOutlined,
	RetweetOutlined,
	SwapOutlined,
	SwapLeftOutlined,
	SwapRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	ArrowLeftOutlined,
	ArrowRightOutlined,
	PlayCircleOutlined,
	UpSquareOutlined,
	DownSquareOutlined,
	LeftSquareOutlined,
	RightSquareOutlined,
	LoginOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	BorderBottomOutlined,
	BorderHorizontalOutlined,
	BorderInnerOutlined,
	BorderOuterOutlined,
	BorderLeftOutlined,
	BorderRightOutlined,
	BorderTopOutlined,
	BorderVerticleOutlined,
	PicCenterOutlined,
	PicLeftOutlined,
	PicRightOutlined,
	RadiusBottomleftOutlined,
	RadiusBottomrightOutlined,
	RadiusUpleftOutlined,
	RadiusUprightOutlined,
	FullscreenOutlined,
	FullscreenExitOutlined,
	QuestionOutlined,
	QuestionCircleOutlined,
	PlusOutlined,
	PlusCircleOutlined,
	PauseOutlined,
	PauseCircleOutlined,
	MinusOutlined,
	MinusCircleOutlined,
	PlusSquareOutlined,
	MinusSquareOutlined,
	InfoOutlined,
	InfoCircleOutlined,
	ExclamationOutlined,
	ExclamationCircleOutlined,
	CloseOutlined,
	CloseCircleOutlined,
	CloseSquareOutlined,
	CheckOutlined,
	CheckCircleOutlined,
	CheckSquareOutlined,
	ClockCircleOutlined,
	WarningOutlined,
	IssuesCloseOutlined,
	StopOutlined,
	EditOutlined,
	FormOutlined,
	CopyOutlined,
	ScissorOutlined,
	DeleteOutlined,
	SnippetsOutlined,
	DiffOutlined,
	HighlightOutlined,
	AlignCenterOutlined,
	AlignLeftOutlined,
	AlignRightOutlined,
	BgColorsOutlined,
	BoldOutlined,
	ItalicOutlined,
	UnderlineOutlined,
	StrikethroughOutlined,
	RedoOutlined,
	UndoOutlined,
	ZoomInOutlined,
	ZoomOutOutlined,
	FontColorsOutlined,
	FontSizeOutlined,
	LineHeightOutlined,
	DashOutlined,
	SmallDashOutlined,
	SortAscendingOutlined,
	SortDescendingOutlined,
	DragOutlined,
	OrderedListOutlined,
	UnorderedListOutlined,
	RadiusSettingOutlined,
	ColumnWidthOutlined,
	ColumnHeightOutlined,
	AreaChartOutlined,
	PieChartOutlined,
	BarChartOutlined,
	DotChartOutlined,
	LineChartOutlined,
	RadarChartOutlined,
	HeatMapOutlined,
	FallOutlined,
	RiseOutlined,
	StockOutlined,
	BoxPlotOutlined,
	FundOutlined,
	SlidersOutlined,
	AndroidOutlined,
	AppleOutlined,
	WindowsOutlined,
	IeOutlined,
	ChromeOutlined,
	GithubOutlined,
	AliwangwangOutlined,
	DingdingOutlined,
	WeiboSquareOutlined,
	WeiboCircleOutlined,
	TaobaoCircleOutlined,
	Html5Outlined,
	WeiboOutlined,
	TwitterOutlined,
	WechatOutlined,
	YoutubeOutlined,
	AlipayCircleOutlined,
	TaobaoOutlined,
	SkypeOutlined,
	QqOutlined,
	MediumWorkmarkOutlined,
	GitlabOutlined,
	MediumOutlined,
	LinkedinOutlined,
	GooglePlusOutlined,
	DropboxOutlined,
	FacebookOutlined,
	CodepenOutlined,
	CodeSandboxOutlined,
	AmazonOutlined,
	GoogleOutlined,
	CodepenCircleOutlined,
	AlipayOutlined,
	AntDesignOutlined,
	AntCloudOutlined,
	AliyunOutlined,
	ZhihuOutlined,
	SlackOutlined,
	SlackSquareOutlined,
	BehanceOutlined,
	BehanceSquareOutlined,
	DribbbleOutlined,
	DribbbleSquareOutlined,
	InstagramOutlined,
	YuqueOutlined,
	AlibabaOutlined,
	YahooOutlined,
	RedditOutlined,
	SketchOutlined,
	AccountBookOutlined,
	AimOutlined,
	AlertOutlined,
	ApartmentOutlined,
	ApiOutlined,
	AppstoreAddOutlined,
	AppstoreOutlined,
	AudioOutlined,
	AudioMutedOutlined,
	AuditOutlined,
	BankOutlined,
	BarcodeOutlined,
	BarsOutlined,
	BellOutlined,
	BlockOutlined,
	BookOutlined,
	BorderOutlined,
	BorderlessTableOutlined,
	BranchesOutlined,
	BugOutlined,
	BuildOutlined,
	BulbOutlined,
	CalculatorOutlined,
	CalendarOutlined,
	CameraOutlined,
	CarOutlined,
	CarryOutOutlined,
	CiCircleOutlined,
	CiOutlined,
	ClearOutlined,
	CloudDownloadOutlined,
	CloudOutlined,
	CloudServerOutlined,
	CloudSyncOutlined,
	CloudUploadOutlined,
	ClusterOutlined,
	CodeOutlined,
	CoffeeOutlined,
	CommentOutlined,
	CompassOutlined,
	CompressOutlined,
	ConsoleSqlOutlined,
	ContactsOutlined,
	ContainerOutlined,
	ControlOutlined,
	CopyrightCircleOutlined,
	CopyrightOutlined,
	CreditCardOutlined,
	CrownOutlined,
	CustomerServiceOutlined,
	DashboardOutlined,
	DatabaseOutlined,
	DeleteColumnOutlined,
	DeleteRowOutlined,
	DeliveredProcedureOutlined,
	DeploymentUnitOutlined,
	DesktopOutlined,
	DingtalkOutlined,
	DisconnectOutlined,
	DislikeOutlined,
	DollarCircleOutlined,
	DollarOutlined,
	DownloadOutlined,
	EllipsisOutlined,
	EnvironmentOutlined,
	EuroCircleOutlined,
	EuroOutlined,
	ExceptionOutlined,
	ExpandAltOutlined,
	ExpandOutlined,
	ExperimentOutlined,
	ExportOutlined,
	EyeOutlined,
	EyeInvisibleOutlined,
	FieldBinaryOutlined,
	FieldNumberOutlined,
	FieldStringOutlined,
	FieldTimeOutlined,
	FileAddOutlined,
	FileDoneOutlined,
	FileExcelOutlined,
	FileExclamationOutlined,
	FileOutlined,
	FileGifOutlined,
	FileImageOutlined,
	FileJpgOutlined,
	FileMarkdownOutlined,
	FilePdfOutlined,
	FilePptOutlined,
	FileProtectOutlined,
	FileSearchOutlined,
	FileSyncOutlined,
	FileTextOutlined,
	FileUnknownOutlined,
	FileWordOutlined,
	FileZipOutlined,
	FilterOutlined,
	FireOutlined,
	FlagOutlined,
	FolderAddOutlined,
	FolderOutlined,
	FolderOpenOutlined,
	FolderViewOutlined,
	ForkOutlined,
	FormatPainterOutlined,
	FrownOutlined,
	FunctionOutlined,
	FundProjectionScreenOutlined,
	FundViewOutlined,
	FunnelPlotOutlined,
	GatewayOutlined,
	GifOutlined,
	GiftOutlined,
	GlobalOutlined,
	GoldOutlined,
	GroupOutlined,
	HddOutlined,
	HeartOutlined,
	HistoryOutlined,
	HomeOutlined,
	HourglassOutlined,
	IdcardOutlined,
	ImportOutlined,
	InboxOutlined,
	InsertRowAboveOutlined,
	InsertRowBelowOutlined,
	InsertRowLeftOutlined,
	InsertRowRightOutlined,
	InsuranceOutlined,
	InteractionOutlined,
	KeyOutlined,
	LaptopOutlined,
	LayoutOutlined,
	LikeOutlined,
	LineOutlined,
	LinkOutlined,
	Loading3QuartersOutlined,
	LoadingOutlined,
	LockOutlined,
	MacCommandOutlined,
	MailOutlined,
	ManOutlined,
	MedicineBoxOutlined,
	MehOutlined,
	MenuOutlined,
	MergeCellsOutlined,
	MessageOutlined,
	MobileOutlined,
	MoneyCollectOutlined,
	MonitorOutlined,
	MoreOutlined,
	NodeCollapseOutlined,
	NodeExpandOutlined,
	NodeIndexOutlined,
	NotificationOutlined,
	NumberOutlined,
	OneToOneOutlined,
	PaperClipOutlined,
	PartitionOutlined,
	PayCircleOutlined,
	PercentageOutlined,
	PhoneOutlined,
	PictureOutlined,
	PlaySquareOutlined,
	PoundCircleOutlined,
	PoundOutlined,
	PoweroffOutlined,
	PrinterOutlined,
	ProfileOutlined,
	ProjectOutlined,
	PropertySafetyOutlined,
	PullRequestOutlined,
	PushpinOutlined,
	QrcodeOutlined,
	ReadOutlined,
	ReconciliationOutlined,
	RedEnvelopeOutlined,
	ReloadOutlined,
	RestOutlined,
	RobotOutlined,
	RocketOutlined,
	RotateLeftOutlined,
	RotateRightOutlined,
	SafetyCertificateOutlined,
	SafetyOutlined,
	SaveOutlined,
	ScanOutlined,
	ScheduleOutlined,
	SearchOutlined,
	SecurityScanOutlined,
	SelectOutlined,
	SendOutlined,
	SettingOutlined,
	ShakeOutlined,
	ShareAltOutlined,
	ShopOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	SisternodeOutlined,
	SkinOutlined,
	SmileOutlined,
	SolutionOutlined,
	SoundOutlined,
	SplitCellsOutlined,
	StarOutlined,
	SubnodeOutlined,
	SwitcherOutlined,
	SyncOutlined,
	TableOutlined,
	TabletOutlined,
	TagOutlined,
	TagsOutlined,
	TeamOutlined,
	ThunderboltOutlined,
	ToTopOutlined,
	ToolOutlined,
	TrademarkCircleOutlined,
	TrademarkOutlined,
	TransactionOutlined,
	TranslationOutlined,
	TrophyOutlined,
	UngroupOutlined,
	UnlockOutlined,
	UploadOutlined,
	UsbOutlined,
	UserAddOutlined,
	UserDeleteOutlined,
	UserOutlined,
	UserSwitchOutlined,
	UsergroupAddOutlined,
	UsergroupDeleteOutlined,
	VerifiedOutlined,
	VideoCameraAddOutlined,
	VideoCameraOutlined,
	WalletOutlined,
	WhatsAppOutlined,
	WifiOutlined,
	WomanOutlined,
} from '@ant-design/icons-vue';
import palette from './palette.vue';
import { computed, reactive, toRefs } from 'vue';
export default {
	setup() {
		const state = reactive({
			labelCol: { span: 4 },
			wrapperCol: { span: 18, offset: 1 },
			type: 'icon',
			form: {
				fontSize: '20',
				red: 0,
				green: 0,
				blue: 0,
				alpha: 1,
			},
		});

		const fontSize = computed(() => state.form.fontSize + 'px');
		const color = computed(
			() => `rgba(${state.form.red}, ${state.form.green}, ${state.form.blue}, ${state.form.alpha})`
		);

		function dragstartHandle(e) {
			e.dataTransfer.setData(
				'text/plain',
				JSON.stringify({ type: state.type, props: state.form, html: e.target.outerHTML })
			);
		}

		function colorChange(color) {
			const { red, green, blue, alpha } = color;
			state.form.red = parseInt(red, 10);
			state.form.green = parseInt(green, 10);
			state.form.blue = parseInt(blue, 10);
			state.form.alpha = parseInt(alpha, 10);
		}

		return {
			...toRefs(state),
			fontSize,
			color,
			dragstartHandle,
			colorChange,
		};
	},
	components: {
		StepBackwardOutlined,
		StepForwardOutlined,
		FastBackwardOutlined,
		FastForwardOutlined,
		ShrinkOutlined,
		ArrowsAltOutlined,
		DownOutlined,
		UpOutlined,
		LeftOutlined,
		RightOutlined,
		CaretUpOutlined,
		CaretDownOutlined,
		CaretLeftOutlined,
		CaretRightOutlined,
		UpCircleOutlined,
		DownCircleOutlined,
		LeftCircleOutlined,
		RightCircleOutlined,
		DoubleRightOutlined,
		DoubleLeftOutlined,
		VerticalLeftOutlined,
		VerticalRightOutlined,
		VerticalAlignTopOutlined,
		VerticalAlignMiddleOutlined,
		VerticalAlignBottomOutlined,
		ForwardOutlined,
		BackwardOutlined,
		RollbackOutlined,
		EnterOutlined,
		RetweetOutlined,
		SwapOutlined,
		SwapLeftOutlined,
		SwapRightOutlined,
		ArrowUpOutlined,
		ArrowDownOutlined,
		ArrowLeftOutlined,
		ArrowRightOutlined,
		PlayCircleOutlined,
		UpSquareOutlined,
		DownSquareOutlined,
		LeftSquareOutlined,
		RightSquareOutlined,
		LoginOutlined,
		LogoutOutlined,
		MenuFoldOutlined,
		MenuUnfoldOutlined,
		BorderBottomOutlined,
		BorderHorizontalOutlined,
		BorderInnerOutlined,
		BorderOuterOutlined,
		BorderLeftOutlined,
		BorderRightOutlined,
		BorderTopOutlined,
		BorderVerticleOutlined,
		PicCenterOutlined,
		PicLeftOutlined,
		PicRightOutlined,
		RadiusBottomleftOutlined,
		RadiusBottomrightOutlined,
		RadiusUpleftOutlined,
		RadiusUprightOutlined,
		FullscreenOutlined,
		FullscreenExitOutlined,
		QuestionOutlined,
		QuestionCircleOutlined,
		PlusOutlined,
		PlusCircleOutlined,
		PauseOutlined,
		PauseCircleOutlined,
		MinusOutlined,
		MinusCircleOutlined,
		PlusSquareOutlined,
		MinusSquareOutlined,
		InfoOutlined,
		InfoCircleOutlined,
		ExclamationOutlined,
		ExclamationCircleOutlined,
		CloseOutlined,
		CloseCircleOutlined,
		CloseSquareOutlined,
		CheckOutlined,
		CheckCircleOutlined,
		CheckSquareOutlined,
		ClockCircleOutlined,
		WarningOutlined,
		IssuesCloseOutlined,
		StopOutlined,
		EditOutlined,
		FormOutlined,
		CopyOutlined,
		ScissorOutlined,
		DeleteOutlined,
		SnippetsOutlined,
		DiffOutlined,
		HighlightOutlined,
		AlignCenterOutlined,
		AlignLeftOutlined,
		AlignRightOutlined,
		BgColorsOutlined,
		BoldOutlined,
		ItalicOutlined,
		UnderlineOutlined,
		StrikethroughOutlined,
		RedoOutlined,
		UndoOutlined,
		ZoomInOutlined,
		ZoomOutOutlined,
		FontColorsOutlined,
		FontSizeOutlined,
		LineHeightOutlined,
		DashOutlined,
		SmallDashOutlined,
		SortAscendingOutlined,
		SortDescendingOutlined,
		DragOutlined,
		OrderedListOutlined,
		UnorderedListOutlined,
		RadiusSettingOutlined,
		ColumnWidthOutlined,
		ColumnHeightOutlined,
		AreaChartOutlined,
		PieChartOutlined,
		BarChartOutlined,
		DotChartOutlined,
		LineChartOutlined,
		RadarChartOutlined,
		HeatMapOutlined,
		FallOutlined,
		RiseOutlined,
		StockOutlined,
		BoxPlotOutlined,
		FundOutlined,
		SlidersOutlined,
		AndroidOutlined,
		AppleOutlined,
		WindowsOutlined,
		IeOutlined,
		ChromeOutlined,
		GithubOutlined,
		AliwangwangOutlined,
		DingdingOutlined,
		WeiboSquareOutlined,
		WeiboCircleOutlined,
		TaobaoCircleOutlined,
		Html5Outlined,
		WeiboOutlined,
		TwitterOutlined,
		WechatOutlined,
		YoutubeOutlined,
		AlipayCircleOutlined,
		TaobaoOutlined,
		SkypeOutlined,
		QqOutlined,
		MediumWorkmarkOutlined,
		GitlabOutlined,
		MediumOutlined,
		LinkedinOutlined,
		GooglePlusOutlined,
		DropboxOutlined,
		FacebookOutlined,
		CodepenOutlined,
		CodeSandboxOutlined,
		AmazonOutlined,
		GoogleOutlined,
		CodepenCircleOutlined,
		AlipayOutlined,
		AntDesignOutlined,
		AntCloudOutlined,
		AliyunOutlined,
		ZhihuOutlined,
		SlackOutlined,
		SlackSquareOutlined,
		BehanceOutlined,
		BehanceSquareOutlined,
		DribbbleOutlined,
		DribbbleSquareOutlined,
		InstagramOutlined,
		YuqueOutlined,
		AlibabaOutlined,
		YahooOutlined,
		RedditOutlined,
		SketchOutlined,
		AccountBookOutlined,
		AimOutlined,
		AlertOutlined,
		ApartmentOutlined,
		ApiOutlined,
		AppstoreAddOutlined,
		AppstoreOutlined,
		AudioOutlined,
		AudioMutedOutlined,
		AuditOutlined,
		BankOutlined,
		BarcodeOutlined,
		BarsOutlined,
		BellOutlined,
		BlockOutlined,
		BookOutlined,
		BorderOutlined,
		BorderlessTableOutlined,
		BranchesOutlined,
		BugOutlined,
		BuildOutlined,
		BulbOutlined,
		CalculatorOutlined,
		CalendarOutlined,
		CameraOutlined,
		CarOutlined,
		CarryOutOutlined,
		CiCircleOutlined,
		CiOutlined,
		ClearOutlined,
		CloudDownloadOutlined,
		CloudOutlined,
		CloudServerOutlined,
		CloudSyncOutlined,
		CloudUploadOutlined,
		ClusterOutlined,
		CodeOutlined,
		CoffeeOutlined,
		CommentOutlined,
		CompassOutlined,
		CompressOutlined,
		ConsoleSqlOutlined,
		ContactsOutlined,
		ContainerOutlined,
		ControlOutlined,
		CopyrightCircleOutlined,
		CopyrightOutlined,
		CreditCardOutlined,
		CrownOutlined,
		CustomerServiceOutlined,
		DashboardOutlined,
		DatabaseOutlined,
		DeleteColumnOutlined,
		DeleteRowOutlined,
		DeliveredProcedureOutlined,
		DeploymentUnitOutlined,
		DesktopOutlined,
		DingtalkOutlined,
		DisconnectOutlined,
		DislikeOutlined,
		DollarCircleOutlined,
		DollarOutlined,
		DownloadOutlined,
		EllipsisOutlined,
		EnvironmentOutlined,
		EuroCircleOutlined,
		EuroOutlined,
		ExceptionOutlined,
		ExpandAltOutlined,
		ExpandOutlined,
		ExperimentOutlined,
		ExportOutlined,
		EyeOutlined,
		EyeInvisibleOutlined,
		FieldBinaryOutlined,
		FieldNumberOutlined,
		FieldStringOutlined,
		FieldTimeOutlined,
		FileAddOutlined,
		FileDoneOutlined,
		FileExcelOutlined,
		FileExclamationOutlined,
		FileOutlined,
		FileGifOutlined,
		FileImageOutlined,
		FileJpgOutlined,
		FileMarkdownOutlined,
		FilePdfOutlined,
		FilePptOutlined,
		FileProtectOutlined,
		FileSearchOutlined,
		FileSyncOutlined,
		FileTextOutlined,
		FileUnknownOutlined,
		FileWordOutlined,
		FileZipOutlined,
		FilterOutlined,
		FireOutlined,
		FlagOutlined,
		FolderAddOutlined,
		FolderOutlined,
		FolderOpenOutlined,
		FolderViewOutlined,
		ForkOutlined,
		FormatPainterOutlined,
		FrownOutlined,
		FunctionOutlined,
		FundProjectionScreenOutlined,
		FundViewOutlined,
		FunnelPlotOutlined,
		GatewayOutlined,
		GifOutlined,
		GiftOutlined,
		GlobalOutlined,
		GoldOutlined,
		GroupOutlined,
		HddOutlined,
		HeartOutlined,
		HistoryOutlined,
		HomeOutlined,
		HourglassOutlined,
		IdcardOutlined,
		ImportOutlined,
		InboxOutlined,
		InsertRowAboveOutlined,
		InsertRowBelowOutlined,
		InsertRowLeftOutlined,
		InsertRowRightOutlined,
		InsuranceOutlined,
		InteractionOutlined,
		KeyOutlined,
		LaptopOutlined,
		LayoutOutlined,
		LikeOutlined,
		LineOutlined,
		LinkOutlined,
		Loading3QuartersOutlined,
		LoadingOutlined,
		LockOutlined,
		MacCommandOutlined,
		MailOutlined,
		ManOutlined,
		MedicineBoxOutlined,
		MehOutlined,
		MenuOutlined,
		MergeCellsOutlined,
		MessageOutlined,
		MobileOutlined,
		MoneyCollectOutlined,
		MonitorOutlined,
		MoreOutlined,
		NodeCollapseOutlined,
		NodeExpandOutlined,
		NodeIndexOutlined,
		NotificationOutlined,
		NumberOutlined,
		OneToOneOutlined,
		PaperClipOutlined,
		PartitionOutlined,
		PayCircleOutlined,
		PercentageOutlined,
		PhoneOutlined,
		PictureOutlined,
		PlaySquareOutlined,
		PoundCircleOutlined,
		PoundOutlined,
		PoweroffOutlined,
		PrinterOutlined,
		ProfileOutlined,
		ProjectOutlined,
		PropertySafetyOutlined,
		PullRequestOutlined,
		PushpinOutlined,
		QrcodeOutlined,
		ReadOutlined,
		ReconciliationOutlined,
		RedEnvelopeOutlined,
		ReloadOutlined,
		RestOutlined,
		RobotOutlined,
		RocketOutlined,
		RotateLeftOutlined,
		RotateRightOutlined,
		SafetyCertificateOutlined,
		SafetyOutlined,
		SaveOutlined,
		ScanOutlined,
		ScheduleOutlined,
		SearchOutlined,
		SecurityScanOutlined,
		SelectOutlined,
		SendOutlined,
		SettingOutlined,
		ShakeOutlined,
		ShareAltOutlined,
		ShopOutlined,
		ShoppingCartOutlined,
		ShoppingOutlined,
		SisternodeOutlined,
		SkinOutlined,
		SmileOutlined,
		SolutionOutlined,
		SoundOutlined,
		SplitCellsOutlined,
		StarOutlined,
		SubnodeOutlined,
		SwitcherOutlined,
		SyncOutlined,
		TableOutlined,
		TabletOutlined,
		TagOutlined,
		TagsOutlined,
		TeamOutlined,
		ThunderboltOutlined,
		ToTopOutlined,
		ToolOutlined,
		TrademarkCircleOutlined,
		TrademarkOutlined,
		TransactionOutlined,
		TranslationOutlined,
		TrophyOutlined,
		UngroupOutlined,
		UnlockOutlined,
		UploadOutlined,
		UsbOutlined,
		UserAddOutlined,
		UserDeleteOutlined,
		UserOutlined,
		UserSwitchOutlined,
		UsergroupAddOutlined,
		UsergroupDeleteOutlined,
		VerifiedOutlined,
		VideoCameraAddOutlined,
		VideoCameraOutlined,
		WalletOutlined,
		WhatsAppOutlined,
		WifiOutlined,
		WomanOutlined,
		palette,
	},
};
</script>
<style lang="less" scoped>
.form-input {
	margin-left: 10px;
	width: 90%;
}
.custom-icon-list {
	display: grid;
	grid-template-columns: repeat(10, 9%);
	grid-column-gap: 3px;
	grid-row-gap: 6px;
	.custom-icon {
		cursor: pointer;
	}
}
</style>
