import React from "react"
import { Link } from "gatsby"
import instagramIcon from "../images/instagram-icon-png-white-1.jpg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer_inner">
          <div className="container">
            <div className="footer-widget footer-content">
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-main-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <Link to="/produk">Produk</Link>
                    </li>
                    <li>
                      <Link to="/kontak">Kontak</Link>
                    </li>
                    <li>
                      <Link to="/copyright">Copyright</Link>
                    </li>
                  </ul>
                </div>
              </section>
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-secondary-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <a href="https://www.instagram.com/airitservice/">
                        <img src={instagramIcon} alt="Instagram icon" height={40} width={40} />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="footer-bottom social-right-menu ">
              <div className="site-info">
                © 2020 AIR IT SERVICE
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
