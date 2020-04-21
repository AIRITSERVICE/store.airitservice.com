import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Checkout extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Checkout" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Checkout">
          <div className="container">
            {/* To make form work, use your own formspree credentials in action="" */}
            <form
              method="POST"
              name="contact"
              action="/sukses" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              type="file"
              netlify
            >
            <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />
              <div>
                <label>Nama Anda:
                <input type="text" name="name" /></label>
              </div>
              <div>
                <label>Email Anda: 
                <input type="email" name="email" /></label>
              </div>
              <div>
                <label>Nomor Telpon:
                <input type="text" name="name" /></label>
              </div>
              <div>
                <label>Kode/Produk Yang ingin dibeli:
                <input type="text" name="name" /></label>
              </div>
              <div>
                <label>Alamat Lengkap: 
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

export default Checkout
