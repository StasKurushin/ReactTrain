import React, { PureComponent, Fragment } from 'react';
import BlogItemList from 'components/BlogData/BlogItemList';
import Loading from 'components/Loading'
import {connect} from "react-redux";
import {loadBlogItems} from 'actions/blogItems';
import BlogContainer from "containers/BlogContainer";

class BlogListContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
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

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        blogItems: state.blogItems.blogItems,
        loading: state.blogItems.loading
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => loadBlogItems(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer)