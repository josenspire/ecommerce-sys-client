<template>
	<view class="content">
		<Search></Search>
		Index Page
	</view>
</template>

<script>
	import Search from './search.vue';
	export default {
		components: {
			Search,
		},
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

		},
		methods: {
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
