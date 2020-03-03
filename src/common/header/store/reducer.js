import * as constants from './constants';
// fromJS可以把一个JS对象转换成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			// merge可以同时改变多个数据内容，相当于多次调用set，但性能更高，因为只merge一次
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
			// return state.set('list', action.data).set('totalPage', action.totalPage);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}

}