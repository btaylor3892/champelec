import React from 'react'
import { PostScribe } from 'react-postscribe'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" style={{marginBottom: '100px'}}>
          <div className="container">
            <div className="content">
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-uppercase has-text-centered"
              style={{
                color: '#333',
                lineHeight: '1',
                padding: '0.25em',
                margin: '20px 0'
              }}>Careers</h1>
              <PostScribe html={`
                <div id="BambooHR">
                  <script src="https://championelectrical.bamboohr.com/js/jobs.php" type="text/javascript"></script>
                </div>
              `} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
