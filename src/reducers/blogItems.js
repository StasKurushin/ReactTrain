import { handleActions } from 'redux-actions';

import { loadStart, loadComplete, loadFail } from 'actions/blogItems';

const initialState = {
    loading: false,
    blogItems: []
};

export default handleActions({
    [loadStart]: (state, action) => {
        return {
            ...state,
            loading: true
        }
    },
    [loadComplete]: (state, action) => {
        return {
            ...state,
            blogItems: action.payload,
            loading: false
        }
    },
    [loadFail]: (state, action) => {
        return {
            ...state,
            loading: false
        }
    }
}, initialState)