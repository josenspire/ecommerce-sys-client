<template>
	<view class="content">
		<!-- <searchComponent></searchComponent> -->
		<view class="content-box">
			<view class="swiper-section">
				<!-- 标题栏和状态栏占位符 -->
				<view class="titleNview-placing"></view>
				<!-- 背景色区域 -->
				<view class="titleNview-background" :style="{backgroundColor: titleNViewBackground}"></view>

				<uni-swiper-dot :info="carouselList" :current="swiperCurrent" :dots-styles="dotsStyles" mode="long">
					<swiper class="carousel" circular autoplay duration="500" @change="handleSwiperChange">
						<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="handleNavToDetailPage({title: '轮播广告'})">
							<image :src="item.src" />
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
	</view>
</template>

<script>
	import searchComponent from "@/components/search.vue";
	import {
		uniSwiperDot
	} from "@dcloudio/uni-ui"
	export default {
		components: {
			searchComponent,
			uniSwiperDot,
		},
		data() {
			return {
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				titleNViewBackground: '',

				dotsStyles: {
					backgroundColor: 'rgba(224, 224, 224, 0.5)',
					border: '1px rgba(224, 224, 224, 0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255, 0.9)',
					selectedBorder: '1px rgba(255, 255, 255, 0.5) solid'
				},
			}
		},
		onLoad() {
			this.initialData();
		},
		methods: {
			initialData() {
				// TODO: loading swiper data
				const carouselList = Object.assign([], [{
					src: '/static/temp/banner2.jpg',
					background: 'rgb(205, 215, 218)',
				}, {
					src: '/static/temp/banner1.jpg',
					background: 'rgb(203, 87, 60)',
				}, {
					src: '/static/temp/banner3.jpg',
					background: 'rgb(183, 73, 69)',
				}]);
				this.titleNViewBackground = carouselList[0].background;
				this.carouselList = carouselList;
			},
			handleSwiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			handleNavToDetailPage(title) {
				console.log(title);
			}
		},
		computed: {},
	}
</script>

<style lang="scss">
	.content {

		/* #ifdef */
		.content-box {
			.swiper-section {
				padding: 0;

				.titleNview-placing {
					padding-top: 0;
					height: 0;
				}
			}
		}

		/* #endif */

		.search-box {}

		.content-box {
			.swiper-section {
				padding: 0;

				.titleNview-placing {
					height: var(--status-bar-height);
					padding-top: 44px;
					box-sizing: content-box;
				}

				.titleNview-background {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 426upx;
					transition: .4s;
				}

				.carousel {
					width: 100%;
					height: 350upx;

					.carousel-item {
						width: 100%;
						height: 100%;
						padding: 0 28upx;
						overflow: hidden;
					}

					image {
						width: 100%;
						height: 100%;
						border-radius: 10upx;
					}
				}

				.swiper-dots {
					left: 45upx;
					bottom: 40upx;
				}
			}
		}


	}
</style>
