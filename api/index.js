import MockData from '../Json.js';

const queryCategories = () => {
	return mockOptions(MockData.cateList);
};

const queryProducts = () => {
	return mockOptions(MockData.productList);
};

const mockOptions = mockData => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(mockData)
		}, 2000);
	})
}

export default {
	queryCategories,
	queryProducts,
};