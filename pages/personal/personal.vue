<template>
	<view class="personal">
		<view class="user-section">
			<image class="header-bkg" src="/static/user_header_bkg.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="user-avatar" :src="userInfo.avatar || '/static/default_avatar.png'" mode=""></image>
				</view>
				<view class="profile-box">
					<text class="username">{{userInfo.nickname || '游客'}}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bkg" src="/static/vip_card_bkg.png" mode=""></image>
				<view class="vip-open-btn">
					立即加入
				</view>
				<view class="card-title">
					<text class="card-icon"></text>
					优品会员
				</view>
				<text class="card-sub-title">YOUP Union</text>
				<text class="card-desc">加入会员 品味生活</text>
			</view>
		</view>

		<view class="cover-container" :style="[{
			transform: coverTransform,
			transition: coverTransition
		}]"
		 @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend">

			<image class="arc" src="/static/arc.png"></image>

			<view class="service-section">
				<view class="service-item">
					<text class="num-value">128.8</text>
					<text>余额</text>
				</view>
				<view class="service-item">
					<text class="num-value">0</text>
					<text>优惠券</text>
				</view>
				<view class="service-item">
					<text class="num-value">20</text>
					<text>积分</text>
				</view>
			</view>

			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navToPage('/pages/order/order?state=0')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="iconfont cs-icon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navToPage('/pages/order/order?state=1')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="iconfont cs-icon icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navToPage('/pages/order/order?state=2')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="iconfont cs-icon icon-yishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navToPage('/pages/order/order?state=4')" hover-class="common-hover"
				 :hover-stay-time="50">
					<text class="iconfont cs-icon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>

			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view class="sec-header">
					<text class="iconfont icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list">
					<image @click="navToPage('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105186633&di=c121a29beece4e14269948d990f9e720&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fm8%2FM04%2FDE%2FDE%2FwKhQplZ-QteEBvsbAAAAADUkobU751.jpg"
					 mode="aspectFill"></image>
					<image @click="navToPage('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105231218&di=09534b9833b5243296630e6d5b728eff&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm1%2FM05%2FD1%2FAC%2FwKhQcFQ3iN2EQTo8AAAAAHQU6_8355.jpg"
					 mode="aspectFill"></image>
					<image @click="navToPage('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105320890&di=c743386be51f2c4c0fd4b75754d14f3c&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fhb%2FMTQ1OTg4ODY0MDA3Ny05OTQ4ODY1NDQ%3D.jpg"
					 mode="aspectFill"></image>
					<image @click="navToPage('/pages/product/product')" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2691146630,2165926318&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
					<image @click="navToPage('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105443324&di=8141bf13f3f208c61524d67f9bb83942&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac9a5548d29b0000019ae98e6d98.jpg"
					 mode="aspectFill"></image>
					<image @click="navToPage('/pages/product/product')" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=191678693,2701202375&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
				</scroll-view>
				<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @eventClick="navToPage('/pages/address/address')"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="分享" tips="邀请好友赢10万大礼"></list-cell>
				<list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navToPage('/pages/setting/setting')"></list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import ListCell from '../../components/mix-list-cell.vue';

	let startY = 0,
		moveY = 0,
		pageAtTop = true;

	export default {
		components: {
			ListCell,
		},
		data() {
			return {
				userInfo: {
					avatar: '',
					nickname: '',
				},

				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
			};
		},
		onLoad() {

		},
		methods: {
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e) {
				if (pageAtTop === false) {
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e) {
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if (moveDistance < 0) {
					this.moving = false;
					return;
				}
				this.moving = true;
				if (moveDistance >= 80 && moveDistance < 100) {
					moveDistance = 80;
				}

				if (moveDistance > 0 && moveDistance <= 80) {
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			navToPage(url) {
				// TODO: should handle user login
				// if (!this.hasLogin) {
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({
					url: url
				});
			},
		},
	};
</script>

<style lang="scss">
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.personal {
		.user-section {
			height: 520upx;
			padding: 100upx 30upx 0;
			position: relative;

			.header-bkg {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				filter: blur(1px);
				opacity: .7;
			}

			.user-info-box {
				height: 180upx;
				display: flex;
				align-items: center;
				position: relative;
				z-index: 1;

				.portrait-box {
					.user-avatar {
						width: 130upx;
						height: 130upx;
						border: 5upx solid #fff;
						border-radius: 50%;
					}
				}

				.profile-box {
					.username {
						font-size: $font-lg + 6upx;
						color: $font-color-dark;
						margin-left: 20upx;
					}
				}
			}

			.vip-card-box {
				display: flex;
				flex-direction: column;
				color: #f7d680;
				height: 240upx;
				background: linear-gradient(left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8));
				border-radius: 16upx 16upx 0 0;
				overflow: hidden;
				position: relative;
				padding: 20upx 24upx;

				.card-bkg {
					position: absolute;
					top: 20upx;
					right: 0;
					width: 380upx;
					height: 260upx;
				}

				.vip-open-btn {
					position: absolute;
					right: 20upx;
					top: 16upx;
					width: 132upx;
					height: 40upx;
					text-align: center;
					line-height: 40upx;
					font-size: 22upx;
					color: #36343c;
					border-radius: 20px;
					background: linear-gradient(left, #f9e6af, #ffd465);
					z-index: 1;
				}

				.card-title {
					font-size: $font-base+2upx;
					color: #f7d680;
					margin-bottom: 28upx;

					.card-icon {
						color: #f6e5a3;
						margin-right: 16upx;
					}
				}

				.card-desc {
					font-size: $font-sm;
					color: #d8cba9;
					margin-top: 10upx;
				}
			}
		}

		.cover-container {
			background: $page-color-base;
			margin-top: -150upx;
			padding: 0 30upx;
			position: relative;
			background: #f5f5f5;
			padding-bottom: 20upx;

			.arc {
				position: absolute;
				left: 0;
				top: -34upx;
				width: 100%;
				height: 36upx;
			}

			.service-section {
				@extend %section;

				.service-item {
					@extend %flex-center;
					flex-direction: column;
					height: 140upx;
					font-size: $font-sm;
					color: #75787d;
				}

				.num-value {
					font-size: $font-lg;
					color: $font-color-dark;
					margin-bottom: 8upx;
				}
			}

			.order-section {
				@extend %section;
				padding: 28upx 0;
				margin-top: 20upx;

				.order-item {
					@extend %flex-center;
					width: 120upx;
					height: 120upx;
					border-radius: 10upx;
					font-size: $font-sm;
					color: $font-color-dark;
				}

				.cs-icon {
					font-size: 48upx;
					margin-bottom: 18upx;
					color: #fa436a;
				}

				.icon-shouhoutuikuan {
					font-size: 44upx;
				}
			}

			.history-section {
				padding: 30upx 0 0;
				margin-top: 20upx;
				background: #fff;
				border-radius: 10upx;

				.sec-header {
					display: flex;
					align-items: center;
					font-size: $font-base;
					color: $font-color-dark;
					line-height: 40upx;
					margin-left: 30upx;

					.cs-icon {
						font-size: 44upx;
						color: #5eba8f;
						margin-right: 16upx;
						line-height: 40upx;
					}
				}

				.h-list {
					white-space: nowrap;
					padding: 30upx 30upx 0;

					image {
						display: inline-block;
						width: 160upx;
						height: 160upx;
						margin-right: 20upx;
						border-radius: 10upx;
					}
				}
			}
		}
	}
</style>
