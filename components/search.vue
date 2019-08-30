<template>
	<view class="content">
		<view class="search-box">
			<text v-if="prefixIcon" class="iconfont cell-icon" :class="prefixIcon"></text>
			<view class="input-box">
				<input type="text" v-model="keyword" :placeholder="placeholder" :placeholder-class="placeholderClass" @confirm="handleSearch()"
				 confirm-type="search" />
			</view>

			<text v-if="suffixIcon" class="iconfont cell-icon" :class="suffixIcon"></text>
			<view v-else class="search-btn" @tap="handleSearch()">搜索</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			prefixIcon: {
				type: String,
				default: "",
			},
			suffixIcon: {
				type: String,
				default: "",
			},
			placeholder: {
				type: String,
				default: "请输入搜索关键字"
			},
			placeholderClass: {
				type: String,
				default: ""
			},
			disabled: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				keyword: "",
			};
		},
	};
</script>

<style lang="scss">
	.content {
		position: absolute;
		width: 100%;
		left: 0;
		top: 0upx;
		z-index: 9999;
		// background-color: $uni-bg-color;

		.cell-icon {}

		.search-box {
			margin: 0 20rpx;
			font-size: 28upx;
			color: $font-color-base;
			// background: rgba(255, 255, 255, .6);
			display: flex;
			justify-content: space-between;

			.cell-icon {
				align-self: center;
				width: 56upx;
				max-height: 60upx;
				font-size: 38upx;
			}

			.input-box {
				flex: 1;
				width: 100%;
				height: 60upx;
				font-size: 28upx;
				background-color: rgb(242, 242, 242);
				display: flex;
				flex-shrink: 1;
				align-items: center;
				padding: 6upx 20upx;
				border-radius: 20px;
				input {
					width: 100%;
				}
			}

			.search-btn {
				width: 120upx;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				font-size: $uni-font-size-base;
				color: $uni-bg-color;
				background: linear-gradient(to right, #ff9801, #ff570a);
				border-radius: 60upx;
			}
		}
	}
</style>
