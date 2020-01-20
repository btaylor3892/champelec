import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, widgetFor }) => (
  <ProjectPostTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    gallery={entry.getIn(['data', 'gallery'])}
  />
)

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPostPreview
