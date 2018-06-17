import { combineReducers } from 'redux';

import blogItems from './blogItems';
import posts from './posts';

export default combineReducers({
    blogItems,
    posts
});