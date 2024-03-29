import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Features from '../components/Features';
import HomeProjectRoll from '../components/HomeProjectRoll';

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const src = getSrc(image);
  return (
    <div>
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${!!image.childImageSharp ? src : image})`,
          backgroundPosition: `top center`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '250px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            background:
              'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )',
            padding: '3rem 3rem',
          }}
        >
          <h1
            className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div className='content'>
                    <div className='tile'>
                      <h3
                        className='has-text-weight-semibold is-size-2 is-uppercase'
                        style={{ color: '#032bdf' }}
                      >
                        {mainpitch.title}
                      </h3>
                    </div>
                    <div className='tile'>
                      <h3 className='subtitle'>{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-12'>
                      <h3
                        className='has-text-weight-semibold is-size-2 is-uppercase'
                        style={{ color: '#032bdf' }}
                      >
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className='columns'>
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/services'>
                        See More About Our Services
                      </Link>
                    </div>
                  </div>
                  <div className='column is-12' id='projects'>
                    <h3
                      className='has-text-weight-semibold is-size-2 is-uppercase'
                      style={{ color: '#032bdf' }}
                    >
                      Our Work
                    </h3>
                    <HomeProjectRoll />
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/projects'>
                        See More Of Our Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 64, width: 240)
              }
            }
            text
          }
        }
      }
    }
  }
`;
