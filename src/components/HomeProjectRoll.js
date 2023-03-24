import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { PreviewCompatibleImage } from './PreviewCompatibleImage';

const HomeProjectRoll = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query HomeProjectRollQuery {
      allMarkdownRemark(
        limit: 6
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { templateKey: { eq: "project-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  gatsbyImageData(quality: 80, width: 620)
                }
              }
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = allMarkdownRemark;

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
};

export default HomeProjectRoll;
