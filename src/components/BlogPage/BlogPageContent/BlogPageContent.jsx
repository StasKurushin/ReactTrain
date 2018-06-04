import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class BlogPageContent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
      body: PropTypes.string,

  };

  renderProps = () => {
    const { title, body } = this.props;
    return [ title, body ].map((val, key) => <li key={key}>{val}</li> )
  };

  render() {
    return (
        <Fragment>
            <ul className="blog-page-content">
                {this.renderProps()}
            </ul>
        </Fragment>
    );
  }
}
