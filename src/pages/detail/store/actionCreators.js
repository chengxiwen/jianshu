import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})

export const getDetail =() => {
	return (dispatch) => {
		axios.get('api/detail.json').then((res) => {
			// 拿到store中的数据要改变数据，所以要再发一个action
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		})
	}
}