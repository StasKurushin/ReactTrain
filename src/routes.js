import MainPage from 'components/MainPage/MainPage';
import BlogItem from 'components/BlogData/BlogItem';
import BlogItemList from "components/BlogData/BlogItemList";

export default [
    {
        path: '/',
        component: MainPage,
        exact: true
    },
    {
        path: '/blog-page',
        component: BlogItemList,
        exact: true
    },
    {
        path: '/blog-page/:userId',
        component: BlogItem,
        exact: true
    }

]

