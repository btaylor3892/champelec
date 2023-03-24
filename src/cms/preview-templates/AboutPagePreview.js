import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = {
    title: entry.getIn(['data', 'title']),
    image: entry.getIn(['data', 'image']),
    content: widgetFor('body'),
  };
  return <AboutPage data={data} />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
