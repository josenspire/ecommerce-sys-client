const cateList = {
	level1: [{
			id: 1,
			name: '手机数码'
		},
		{
			id: 2,
			name: '礼品鲜花'
		},
		{
			id: 3,
			name: '男装女装'
		},
		{
			id: 4,
			name: '母婴用品'
		},
	],
	level2: [{
			id: 5,
			pid: 1,
			name: '手机通讯'
		},
		{
			id: 6,
			pid: 1,
			name: '运营商'
		},
		{
			id: 17,
			pid: 2,
			name: '礼品',
		},
		{
			id: 18,
			pid: 2,
			name: '鲜花',
		},

		{
			id: 25,
			pid: 3,
			name: '男装'
		},
		{
			id: 26,
			pid: 3,
			name: '女装'
		},

		{
			id: 33,
			pid: 4,
			name: '奶粉',
		},
		{
			id: 34,
			pid: 4,
			name: '营养辅食',
		},
		{
			id: 35,
			pid: 4,
			name: '童装',
		},

		{
			id: 39,
			pid: 4,
			name: '喂养用品',
		},
	],

	level3: [{
			id: 8,
			pid: 5,
			name: '全面屏手机',
			picture: '/static/temp/cate2.jpg'
		},
		{
			id: 9,
			pid: 5,
			name: '游戏手机',
			picture: '/static/temp/cate3.jpg'
		},
		{
			id: 10,
			pid: 5,
			name: '老人机',
			picture: '/static/temp/cate1.jpg'
		},
		{
			id: 11,
			pid: 5,
			name: '拍照手机',
			picture: '/static/temp/cate4.jpg'
		},
		{
			id: 12,
			pid: 5,
			name: '女性手机',
			picture: '/static/temp/cate5.jpg'
		},
		{
			id: 14,
			pid: 6,
			name: '合约机',
			picture: '/static/temp/cate1.jpg'
		},
		{
			id: 15,
			pid: 6,
			name: '选好卡',
			picture: '/static/temp/cate4.jpg'
		},
		{
			id: 16,
			pid: 6,
			name: '办套餐',
			picture: '/static/temp/cate5.jpg'
		},

		{
			id: 19,
			pid: 17,
			name: '公益摆件',
			picture: '/static/temp/cate7.jpg'
		},
		{
			id: 20,
			pid: 17,
			name: '创意礼品',
			picture: '/static/temp/cate8.jpg'
		},
		{
			id: 21,
			pid: 18,
			name: '鲜花',
			picture: '/static/temp/cate9.jpg'
		},
		{
			id: 22,
			pid: 18,
			name: '每周一花',
			picture: '/static/temp/cate10.jpg'
		},
		{
			id: 23,
			pid: 18,
			name: '卡通花束',
			picture: '/static/temp/cate11.jpg'
		},
		{
			id: 24,
			pid: 18,
			name: '永生花',
			picture: '/static/temp/cate12.jpg'
		},

		{
			id: 27,
			pid: 25,
			name: '男士T恤',
			picture: '/static/temp/cate13.jpg'
		},
		{
			id: 28,
			pid: 25,
			name: '男士外套',
			picture: '/static/temp/cate14.jpg'
		},
		{
			id: 29,
			pid: 26,
			name: '裙装',
			picture: '/static/temp/cate15.jpg'
		},
		{
			id: 30,
			pid: 26,
			name: 'T恤',
			picture: '/static/temp/cate16.jpg'
		},
		{
			id: 31,
			pid: 26,
			name: '上装',
			picture: '/static/temp/cate15.jpg'
		},
		{
			id: 32,
			pid: 26,
			name: '下装',
			picture: '/static/temp/cate16.jpg'
		},


		{
			id: 36,
			pid: 33,
			name: '有机奶粉',
			picture: '/static/temp/cate17.jpg'
		},
		{
			id: 37,
			pid: 34,
			name: '果泥/果汁',
			picture: '/static/temp/cate18.jpg'
		},
		{
			id: 39,
			pid: 34,
			name: '面条/粥',
			picture: '/static/temp/cate20.jpg'
		},
		{
			id: 42,
			pid: 35,
			name: '婴童衣橱',
			picture: '/static/temp/cate19.jpg'
		},
		{
			id: 43,
			pid: 39,
			name: '吸奶器',
			picture: '/static/temp/cate21.jpg'
		},
		{
			id: 44,
			pid: 39,
			name: '儿童餐具',
			picture: '/static/temp/cate22.jpg'
		},
		{
			id: 45,
			pid: 39,
			name: '牙胶安抚',
			picture: '/static/temp/cate23.jpg'
		},
		{
			id: 46,
			pid: 39,
			name: '围兜',
			picture: '/static/temp/cate24.jpg'
		}
	]
}

const productList = [{
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
		image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 61,
	},
	{
		image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
		image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
		title: "潘歌针织连衣裙",
		price: 78,
		sales: 16,
	},
	{
		image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
		image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
		image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
		title: "巧谷2019春夏季新品新款女装",
		price: 108.8,
		sales: 5,
	}, {
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
		image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
		image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
		title: "私萱连衣裙",
		price: 265,
		sales: 88,
	}, {
		image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
		image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
		title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
		price: 422,
		sales: 137,
	}, {
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
		image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 95,
	},
];


export default {
	cateList,
	productList,
};
