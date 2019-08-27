import MockData from '../Json.js';

const queryCategories = () => {
	return mockOptions(MockData.cateList)
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
};