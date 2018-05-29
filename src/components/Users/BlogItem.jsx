import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'reactstrap';

export default class BlogItem extends PureComponent {
    static propTypes = {
        blogItem: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string
        }).isRequired
    };

    render() {
        const { blogItem } = this.props;
        return (
            <Jumbotron>
                <h1 className="display-5">{blogItem.title}</h1>
                <p className="lead">
                    {blogItem.body}
                </p>
                <hr className="my-2" />
            </Jumbotron>
        )
    }
}