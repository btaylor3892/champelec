import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

class Gallery extends React.Component {
    render() {
        const {images} = this.props
        const gallery = images.map(image => ({
            original: image.image.childImageSharp.fluid.src,
            thumbnail: image.image.childImageSharp.fixed.src
        }))
        return (
            <ImageGallery items={gallery} showBullets={false} showFullscreenButton={false} showPlayButton={false} />
        )
    }
}

export default Gallery
