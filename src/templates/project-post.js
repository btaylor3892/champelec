import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Gallery from '../components/Gallery';

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  gallery,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-1 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            {gallery && <Gallery images={gallery} />}
            <br />
            <PostContent content={content} />
            <br />
            <hr />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Market Sector</h4>
                <ul className='taglist'>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link className='btn' to={`/sectors/${kebabCase(tag)}/`}>
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  gallery: PropTypes.array,
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        gallery={post.frontmatter.gallery_image}
        helmet={
          <Helmet titleTemplate='%s | Projects'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        gallery_image {
          image {
            childImageSharp {
              gatsbyImageData(quality: 80, width: 1000)
            }
          }
        }
      }
    }
  }
`;
