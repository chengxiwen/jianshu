import * as constants from './constants';
// fromJS可以把一个JS对象转换成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }

    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}