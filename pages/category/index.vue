<template>
	<view class="category">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in firstCategoryList" :key="item.id" class="left-item" :class="{active: item.id === currentId}"
			 @click="handleTabTap(item)">
				{{item.name}}
			</view>
		</scroll-view>

		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="handleAsideScroll" :scroll-top="tabScrollTop">
			<view v-for="item in secondCategoryList" :key="item.id" :id="'main-'+item.id">
				<text class="sub-title">{{item.name}}</text>
				<view class="category-list">
					<view @click="navToList(item.id, titem.id)" v-if="titem.pid === item.id" class="t-item" v-for="titem in thirdCategoryList"
					 :key="titem.id">
						<image :src="titem.picture"></image>
						<text>{{titem.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import apiRequest from '../../api/index.js';
	export default {
		data() {
			return {
				sizeCalcState: false,
				triggeredByTab: false,
				tabScrollTop: 0,
				currentId: 1,
				firstCategoryList: [],
				secondCategoryList: [],
				thirdCategoryList: [],
			}
		},
		onLoad() {
			this.loadCategoryData();
		},
		methods: {
			async loadCategoryData() {
				const categoriesDataSet = await apiRequest.queryCategories();
				this.firstCategoryList = categoriesDataSet.level1;
				this.secondCategoryList = categoriesDataSet.level2;
				this.thirdCategoryList = categoriesDataSet.level3;
			},
			handleTabTap(item) {
				this.triggeredByTab = true;
				if (!this.sizeCalcState) {
					this.calcSize();
				}
				this.currentId = item.id;
				const index = this.secondCategoryList.findIndex(e => {
					return e.pid === item.id
				})
				this.tabScrollTop = this.secondCategoryList[index].top;
			},
			// 右侧栏滚动
			handleAsideScroll(e) {
				if (this.triggeredByTab) {
					this.triggeredByTab = false;
					return;
				}
				if (!this.sizeCalcState) {
					this.calcSize();
				}
				const scrollTop = e.detail.scrollTop;
				const tabs = this.secondCategoryList.filter(item => item.top <= scrollTop).reverse();
				if (tabs.length > 1) {
					this.currentId = tabs[0].pid;
				}
			},
			// 计算右侧栏每个tab的高度等信息
			calcSize() {
				let height = 0;
				this.secondCategoryList.forEach(item => {
					const view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({size: true}, data => {
						item.top = height;
						height += data.height;
						item.bottom = height;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(sid, tid) {
				console.log(sid, tid)
				// uni.navigateTo({
				// 	url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
				// })
			}
		},
		computed: {},
	};
</script>

<style lang="scss">
	// TODO: page ?
	page,
	.category {
		display: flex;
		height: 100%;
		background-color: #FFFFFF;

		.left-aside {
			flex-shrink: 0;
			width: 180upx;
			height: 100%;
			background-color: #F8F8F8;
		}

		.left-item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100upx;
			font-size: 28upx;
			color: $font-color-base;
			position: relative;

			&.active {
				color: $base-color;
				background: #FFFFFF;

				&:before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					height: 36upx;
					width: 8upx;
					background-color: $base-color;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}

		.right-aside {
			flex: 1;
			overflow: hidden;
			padding-left: 20upx;
		}

		.sub-title {
			display: flex;
			align-items: center;
			height: 70upx;
			padding-top: 8upx;
			font-size: 28upx;
			font-weight: bold;
			color: $font-color-dark;
		}

		.category-list {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			background: #fff;
			padding-top: 12upx;

			&:after {
				content: '';
				flex: 99;
				height: 0;
			}
		}

		.t-item {
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 176upx;
			font-size: 26upx;
			color: #666;
			padding-bottom: 20upx;

			image {
				width: 140upx;
				height: 140upx;
			}
		}
	}
</style>
