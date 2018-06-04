import BlogPage from './components/BlogPage'
import MainPage from 'components/MainPage/MainPage';
import BlogItem from 'components/BlogData/BlogItem';

export default [
    {
        path: '/',
        component: MainPage,
        exact: true
    },
    {
        path: '/blog-page',
        component: BlogPage,
        exact: true
    },
    {
        path: '/blog-page/:blogId',
        component: BlogItem,
        exact: true
    }

]

