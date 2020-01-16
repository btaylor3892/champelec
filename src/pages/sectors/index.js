import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Market Sectors | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Project Market Sectors</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue} style={{textAlign: 'center'}}>
                  <Link to={`/sectors/${kebabCase(tag.fieldValue)}/`} style={{color: '#333', fontSize: '1.5rem'}}>
                    {tag.fieldValue} ({tag.totalCount})
                    <div style={{width: `6rem`, textAlign: 'center', fontSize: '4rem', color: 'white', backgroundColor: '#032bdf', margin: '0 auto'}}>
                      {tag.fieldValue.slice(0,1).toUpperCase()}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
