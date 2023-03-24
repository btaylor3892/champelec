import React from 'react';
import PropTypes from 'prop-types';
import ProjectPost from '../../templates/project-post';

const ProjectPostPreview = ({ entry, widgetFor, getAsset }) => {
  const data = {
    content: widgetFor('body'),
    tags: entry.getIn(['data', 'tags']),
    title: entry.getIn(['data', 'title']),
    gallery: { image: getAsset(entry.getIn(['data', 'gallery_image'])) },
  };
  return <ProjectPost data={data} />;
};

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjectPostPreview;
