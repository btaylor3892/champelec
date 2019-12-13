import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/stars.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )',
              color: 'white',
              padding: '3rem',
            }}
          >
            Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
