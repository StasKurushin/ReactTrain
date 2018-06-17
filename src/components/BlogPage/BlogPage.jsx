import React, { PureComponent } from 'react';
import Header from './Header/Header.jsx';
import BlogList from 'containers/BlogListContainer'

export default class BlogPage extends PureComponent {
  render() {
    return (
      <div className="blog-page">
        <Header/>
        <BlogList/>
      </div>
    );
  }
}
