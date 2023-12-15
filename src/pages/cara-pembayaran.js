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
                  <li><b>Silahkan konfirmasi stok terlebih dahulu</b> Melalui: </li>
                  {/* <ol>Line      : <b>bale404</b></ol> */}
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
                  <li>TBA</li>
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
