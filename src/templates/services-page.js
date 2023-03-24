import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import { PreviewCompatibleImage } from '../components/PreviewCompatibleImage';

const ServicePageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
}) => {
  const src = getSrc(image);
  return (
    <div className='content'>
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${!!image.childImageSharp ? src : image})`,
        }}
      >
        <h2
          className='has-text-weight-bold is-size-1'
          style={{
            background:
              'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )',
            color: 'white',
            padding: '3rem',
          }}
        >
          {title}
        </h2>
      </div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-offset-1'>
                <h3 className='has-text-weight-semibold is-size-2 is-uppercase'>
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <Features gridItems={intro.blurbs} />
                <div className='columns'>
                  <div className='column'>
                    <h3 className='has-text-weight-semibold is-size-3 is-uppercase'>
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className='tile is-ancestor'>
                  <div className='tile is-vertical'>
                    <div className='tile'>
                      <div className='tile is-parent is-vertical'>
                        <article className='tile is-child'>
                          <PreviewCompatibleImage
                            data={{ image: main.image1 }}
                          />
                        </article>
                      </div>
                      <div className='tile is-parent'>
                        <article className='tile is-child'>
                          <PreviewCompatibleImage
                            data={{ image: main.image2 }}
                          />
                        </article>
                      </div>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child'>
                        <PreviewCompatibleImage data={{ image: main.image3 }} />
                      </article>
                    </div>
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/projects'>
                        See More Of Our Projects
                      </Link>
                    </div>
                  </div>
                </div>
                {testimonials.length > 1 && (
                  <Testimonials testimonials={testimonials} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ServicePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 80, layout: FULL_WIDTH)
          }
        }
        heading
        description
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 92, width: 526)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 92, width: 526)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, width: 1075)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
