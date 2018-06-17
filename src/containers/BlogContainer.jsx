import React, { PureComponent, Fragment } from 'react';

import BlogPageContent from 'components/BlogPage/BlogPageContent';
import Loading from 'components/Loading';

export default class BlogContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            blogItem: {},
            loading: false
        }
    }

    componentDidMount() {
        const { match } = this.props;

        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.userId}`)
            .then((response) => response.json())
            .then((blogItem) => {
                this.setState({
                    blogItem,
                    loading: false
                });
            })
            .catch(() => {
                this.setState({
                    blogItem: {},
                    loading: false
                });
            });
    }

    render() {
        const { blogItem, loading } = this.state;
        return (
            <Fragment>
                { loading ? <Loading /> : <BlogPageContent {...blogItem} /> }
            </Fragment>
        );
    }
}
