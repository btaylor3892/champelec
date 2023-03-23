import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { getSrc } from 'gatsby-plugin-image';
import 'react-image-gallery/styles/scss/image-gallery.scss';

class Gallery extends Component {
  render() {
    const { images } = this.props;
    const gallery = images.map((image) => ({
      original: getSrc(image.image),
      thumbnail: getSrc(image.image),
    }));
    return (
      <ImageGallery
        items={gallery}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    );
  }
}

export default Gallery;
