import React, { PureComponent, Fragment } from 'react';
import BlogItemList from 'components/BlogData/BlogItemList';
import Loading from 'components/Loading'

export default class BlogListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            blogItems: [],
            loading: false,

        }
    }
    componentDidMount() {
        this.setState( { loading: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((blogItems) => {
                this.setState({
                    blogItems,
                    loading: false,

                })
            })
            .catch(() => {
                this.setState({
                    blogItems: [],
                    loading: false,

                })
            })
    }
    render() {
        const { blogItems, loading } = this.state;
        return (
            <Fragment>
                { loading ? <Loading /> : <BlogItemList blogItems={blogItems}/> }
            </Fragment>
        )
    };
}
