import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SectorProjectRoll from '../components/SectorProjectRoll';

class TagRoute extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} Project${
      totalCount === 1 ? '' : 's'
    } in ${tag} Market Sector`;

    return (
      <Layout>
        <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
                <SectorProjectRoll data={this.props.data} />
                <p>
                  <Link className='btn' to='/sectors/'>
                    Browse All Market Sectors
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
                gatsbyImageData(width: 620, quality: 80)
              }
            }
          }
        }
      }
    }
  }
`;
