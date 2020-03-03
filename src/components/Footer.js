import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/champ-logo-reverse.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter" style={{ paddingBottom: '48px' }}>
        <div className="content has-text-centered">
          <Link to="/">
          <img
            src={logo}
            alt="Champion Logo"
            style={{ width: '22em'}}
          />
          </Link>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4" style={{padding: '0'}}>
                <section className="menu">
                  <ul className="menu-list" style={{margin: '0'}}>
                    <li>
                      <Link to="/" className="navbar-item is-bold">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item is-bold" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item is-bold" to="/services">
                        Services
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4" style={{padding: '0'}}>
                <section>
                  <ul className="menu-list" style={{margin: '0'}}>
                    <li>
                      <Link className="navbar-item is-bold" to="/projects">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item is-bold" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item is-bold" to="/careers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4" style={{padding: '0'}}>
                <section className="menu">
                  <ul className="menu-list" style={{margin: '0'}}>
                    <li>
                      <a className="navbar-item is-bold" title="phone" href="tel:561-296-4144">561-296-4144</a>
                    </li>
                    <li>
                      <a className="navbar-item is-bold" title="email" href="mailto:
&#105;&#110;&#102;&#111;&#064;&#099;&#104;&#097;&#109;&#112;&#105;&#111;&#110;&#101;&#108;&#101;&#099;&#116;&#114;&#105;&#099;&#097;&#108;&#046;&#110;&#101;&#116;">&#105;&#110;&#102;&#111;&#064;&#099;&#104;&#097;&#109;&#112;&#105;&#111;&#110;&#101;&#108;&#101;&#099;&#116;&#114;&#105;&#099;&#097;&#108;&#046;&#110;&#101;&#116;</a>
                    </li>
                    <li>
                      <a className="navbar-item is-bold" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/2875+Jupiter+Park+Dr+%23500,+Jupiter,+FL+33458/@26.9282278,-80.1412249,258m/data=!3m2!1e3!4b1!4m5!3m4!1s0x88ded67dd0f495ab:0xcc4e0e268cd2f0dc!8m2!3d26.9282266!4d-80.1406777">
                        <span className="address">2875 Jupiter Park Drive #500</span>
                        <br />
                        <span className="address">Jupiter, FL 33458</span>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="column is-12">
              <div className="row">
                <span className="is-bold has-text-centered" style={{color: 'white'}}>LIC#: EC13005014</span>
              </div>
              {/* <div className="row social">
                <a title="facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
