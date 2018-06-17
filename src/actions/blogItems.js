import { createAction } from 'redux-actions';

export const loadStart  = createAction('[Users] Load start');
export const loadComplete = createAction('[Users] Load complete');
export const loadFail = createAction('[Users] Load fail');

export const loadBlogItems = (dispatch) => {
    dispatch(loadStart());
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((blogItems) => {
            dispatch(loadComplete(blogItems));
        })
        .catch(() => {
            dispatch(loadFail());
        })
};

