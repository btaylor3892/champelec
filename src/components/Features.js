import React from 'react';
import PropTypes from 'prop-types';
import { PreviewCompatibleImage } from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map((item) => (
      <div key={item.text} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <h3>{item.title}</h3>
              <br />
              <PreviewCompatibleImage data={{ image: item.image }} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
