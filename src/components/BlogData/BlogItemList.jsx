import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import 'components/BlogData/BlogItemList.scss'
import Header from "components/BlogPage/Header/Header";

export default class BlogItemList extends PureComponent {
    static propTypes = {
        blogItems: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                body: PropTypes.string,

            })
        )
    };
    static defaultProps = {
        blogItems: []
    };

    render() {
        const { blogItems } =  this.props;
        return (
            <Fragment>
                <Header/>
                <div className="content">
                    <div className="content-container">
                        {blogItems.map((blogItem, idx) =>
                            <BlogItem key={idx} blogItem={blogItem} />
                        )}
                    </div>
                </div>
            </Fragment>
        )
    }
}
