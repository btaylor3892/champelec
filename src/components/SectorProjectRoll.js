import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { PreviewCompatibleImage } from './PreviewCompatibleImage';

class SectorProjectRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className='columns is-multiline'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-6' key={post.id}>
              <article className='blog-list-item tile is-child box'>
                <Link
                  className='title has-text-primary is-size-3'
                  to={post.fields.slug}
                >
                  <p className='post-meta is-uppercase'>
                    {post.frontmatter.title}
                  </p>
                  {post.frontmatter.featuredimage ? (
                    <figure
                      className='featured-thumbnail'
                      style={{ margin: 'auto 0 auto 0' }}
                    >
                      <PreviewCompatibleImage
                        data={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </figure>
                  ) : null}
                </Link>
                <p>
                  <br />
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className='btn' to={post.fields.slug}>
                    Project Details →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

SectorProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default SectorProjectRoll;
