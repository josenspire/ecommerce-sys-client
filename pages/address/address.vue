<template>
	<view class="content line-top">
		<view class="data-list line-bottom" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<uni-swipe-action :options="options">
				<view class="content-wrapper">
					<view class="address-wrapper">
						<view class="address-box">
							<text v-if="item.default" class="tag">默认</text>
							<text class="address">{{item.addressName}} {{item.area}}</text>
						</view>
						<view class="u-box">
							<text class="name">{{item.name}}</text>
							<text class="mobile">{{item.mobile}}</text>
						</view>
					</view>
					<text class="iconfont icon-bianji" @click.stop="handleAddressOperation('edit', item)"></text>
				</view>
			</uni-swipe-action>
		</view>
		<text style="display:block;padding: 16upx 30upx 10upx;lihe-height: 1.6;color: #fa436a;font-size: 24upx;">
			重要：添加和修改地址回调仅增加了一条数据做演示，实际开发中将回调改为请求后端接口刷新一下列表即可
		</text>

		<button class="add-btn" @click="handleAddressOperation('add')">新增地址</button>
	</view>
</template>

<script>
	import {
		uniSwipeAction
	} from "@dcloudio/uni-ui";

	export default {
		components: {
			uniSwipeAction,
		},
		data() {
			return {
				source: 0,
				addressList: [{
					name: '刘晓晓',
					mobile: '18666666666',
					addressName: '贵族皇仕牛排(东城店)',
					address: '北京市东城区',
					area: 'B区 北京市东城区 贵族皇仕牛排(东城店)',
					default: true
				}, {
					name: '刘大大',
					mobile: '18667766666',
					addressName: '龙回1区12号楼',
					address: '山东省济南市历城区',
					area: '西单元302',
					default: false,
				}],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#d9534f'
					}
				}]
			};
		},
		onLoad(option) {
			console.log(option.source);
			this.source = option.source;
		},
		methods: {
			//选择地址
			checkAddress(item) {
				if (this.source == 1) {
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			handleAddressOperation(type, item) {
				uni.navigateTo({
					url: `/pages/address/addressManager?type=${type}&data=${JSON.stringify(item)}`
				});
			},
			//添加或修改成功之后回调
			refreshList(data, type) {
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);

				console.log(data, type);
			}
		}
	};
</script>

<style lang="scss">
	page {
		padding-bottom: 120upx;
	}

	.content {
		position: relative;
	}

	.data-list {
		display: flex;
		align-items: center;
		background: #fff;
		position: relative;
	}

	.content-wrapper {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.address-wrapper {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding: 20upx 20upx 20upx 30upx;
		}

		.address-box {
			display: flex;
			align-items: center;

			.tag {
				font-size: 24upx;
				color: $base-color;
				margin-right: 10upx;
				background: #fffafb;
				border: 1px solid #ffb4c7;
				border-radius: 4upx;
				line-height: 1;
				padding: 4upx 10upx;
				width: 100upx;
				text-align: center;
			}

			.address {
				font-size: 30upx;
				color: $font-color-dark;
			}
		}

		.u-box {
			font-size: 28upx;
			color: $font-color-light;
			margin-top: 16upx;

			.name {
				margin-right: 30upx;
			}
		}

		.icon-bianji {
			display: flex;
			align-items: center;
			height: 80upx;
			font-size: 40upx;
			color: $font-color-light;
			padding-right: 20upx;
		}
	}

	.add-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
