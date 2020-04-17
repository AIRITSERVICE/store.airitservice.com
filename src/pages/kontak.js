import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Kontak" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Contact-us">
          <div className="container">
            {/* To make form work, use your own formspree credentials in action="" */}
            <form
              action="https://formspree.io/airitservice19@gmail.com"
              method="POST"
              name="contact"
              netlify
            >
              <div>
                <label>Nama Anda
                <input type="text" name="name" /></label>
              </div>
              <div>
                <label>Email Anda: 
                <input type="email" name="email" /></label>
              </div>
              <div>
                <label>Isi pesan: 
                <textarea name="message" /></label>
              </div>
              <div>
                <button type="submit">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
