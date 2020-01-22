import React from 'react'
import Layout from '../components/Layout'
import tester from '../img/404.svg'

const NotFoundPage = () => (
  <Layout>
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1 className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-1-widescreen is-uppercase">Looks Like We Have a Slight Problem...</h1>
      <h2 className="has-text-weight-bold is-uppercase">This Page Doesn't Exist</h2>
      <img src={tester} alt="404 error" style={{ width: '50%', margin: '20px 0' }} />
    </div>
  </Layout>
)

export default NotFoundPage
