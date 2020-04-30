import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Cara Pembayaran" keywords={[`gatsby`, `application`, `react`]} />{" "}
        <div className="site-About">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Cara Pembayaran</h1>
                <hr />
                <div> 
                <h2>Pembayaran melalui Bank BCA</h2>
                  <p>
                  <ol>
                  <li>Silahkan konfirmasi stok terlebih dahulu, Melalui: </li>
                  <ol>Telepon   : <b>0882-9104-6883</b></ol>
                  <ol>Whatsapp  : <b>0818-0717-5316 || 0882-9104-6883</b></ol>
                  <ol>Line      : <b>bale404</b></ol>
                  <ol>Instagram : <b>airitservice</b></ol>
                  <br></br>

                  <li>Pilih Produk/Barang yang Anda ingin beli!</li>

                  <li>Klik tombol Beli</li>

                  <li>Isi Form Checkout</li>

                  <li>Transfer transaksi sesuai Harga produk</li>

                  <li>Kirim Bukti Pembayaran melalui Whatsapp/Line</li>

                  <li>Barang akan segera Di proses</li>
                  </ol>
                  </p>
                </div>
                 <h2>Pembayaran melalui Cash on Delivery</h2>
                 <p>
                  <ol>
                  <li>TBA (TO BE ANNOUNCED)</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </Layout>
    )
  }
}
export default About
