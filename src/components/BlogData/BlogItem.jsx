import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

import { Link } from 'react-router-dom'

export default class BlogItem extends PureComponent {
    static propTypes = {
        blogItem: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            body: PropTypes.string
        }).isRequired
    };

    render() {
        const { blogItem } = this.props;
        return (
            <Jumbotron>
                <Link to={`/blog-page/${blogItem.id}`}>
                    {blogItem.title}
                </Link>
                <p className="lead">
                    {blogItem.body}
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda consequuntur ea eius fugit, illo in ipsa
                    ipsum, iste labore laborum minima nam nulla odio officia
                    officiis quae rem ullam voluptatum?
                </p>
                <hr className="my-2" />
            </Jumbotron>
        )
    }
}
