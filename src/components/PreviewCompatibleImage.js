import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const PreviewCompatibleImage = ({ data }) => {
  const imageStyle = { borderRadius: '5px' };
  const image = getImage(data.image);
  // if (!!image && !!image.childImageSharp) {
  return <GatsbyImage style={imageStyle} image={image} />;
  // }

  // if (!!image.childImageSharp) {
  //   return <GatsbyImage style={imageStyle} image={image} />;
  // }

  // if (!!image && typeof image === 'string')
  //   return <img style={imageStyle} src={image} />;

  // return null;
};

PreviewCompatibleImage.propTypes = {
  data: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};
