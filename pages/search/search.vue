<template>
	<view class="content">
		<view class="search-box">
			<!-- mSearch组件 如果使用原样式，删除组件元素-->
			<mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword" @search="handleSearch(false)"
			 @input="inputChange" @confirm="handleSearch(false)" v-model="keyword"></mSearch>
			<!-- 原样式 如果使用原样式，恢复下方注销代码 -->

			<!-- <view class="input-box">
				<input type="text" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="handleSearch(false)"
				 placeholder-class="placeholder-class" confirm-type="search">
			</view>
			<view class="search-btn" @tap="handleSearch(false)">搜索</view> -->

			<!-- 原样式 end -->
		</view>
		<view class="search-keyword" @touchstart="blur">
			<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
				<view class="keyword-entry" hover-class="keyword-entry-tap" v-for="row in keywordList" :key="row.keyword">
					<view class="keyword-text" @tap="handleSearch(row.keyword)">
						<rich-text :nodes="row.htmlStr"></rich-text>
					</view>
					<view class="keyword-img" @tap="setkeyword(row)">
						<image src="/static/HM-search/back.png"></image>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<image @tap="oldDelete" src="/static/HM-search/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="handleSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<view>
							<image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="handleSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import mSearch from '../../components/mehaotian-search-revision.vue';
	export default {
		components: {
			mSearch,
		},
		data() {
			return {
				title: 'Hello',
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false
			}
		},
		onLoad() {

		},
		methods: {
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			handleSearch(key) {
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				this.keyword = key;
				this.saveKeyword(key); //保存为历史 
				uni.showToast({
					title: key,
					icon: 'none',
					duration: 2000
				});
				//以下是示例跳转淘宝搜索，可自己实现搜索逻辑
				//#ifdef APP-PLUS
				plus.runtime.openURL(encodeURI('taobao://s.taobao.com/search?q=' + key));
				//#endif
				//#ifdef H5
				window.location.href = 'taobao://s.taobao.com/search?q=' + key
				//#endif
			},
		}
	}
</script>

<style lang="scss">
	.content {
		/* 		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.search-box {
		background-color: rgb(242, 242, 242);
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;

		.mSearch-input-box {
			width: 100%;
		}

		.input-box {
			width: 85%;
			flex-shrink: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			input {
				width: 100%;
				height: 60upx;
				font-size: 32upx;
				border: 0;
				border-radius: 60upx;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				padding: 0 3%;
				margin: 0;
				background-color: #ffffff;
			}
		}
	}

	.placeholder-class {
		color: #9e9e9e;
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #fff;
		background: linear-gradient(to right, #ff9801, #ff570a);
		border-radius: 60upx;
	}
</style>
