import React from 'react'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render() {
    function createMarkup() {
      return {__html: '<div id="BambooHR"><script src="https://championelectrical.bamboohr.com/js/jobs2.php" type="text/javascript" async></script><div id="BambooHR-Footer">Powered by<a href="http://www.bamboohr.com" target="_blank" rel="noopener external nofollow noreferrer"><img src="https://resources.bamboohr.com/images/footer-logo.png" alt="BambooHR - HR software"/></a></div></div>'};
    }
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
