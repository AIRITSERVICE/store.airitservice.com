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
                <div class="col-sm-6">
                  <img src="https://arthakirana.com/wp-content/uploads/2013/05/bca-customer-artha-kirana-flycatcher-pest-control.png" alt="BCA" />
                  <h3>No Rekening: 6300-270-857</h3>
                  <h4>Atas Nama: M IQBAL ARYO ANGGORO</h4>
                </div>
                <hr />
                <div> 
                <h2>Pembayaran melalui Bank BCA</h2>
                  <p>
                  <ol>
                  <li>Pilih barang yang anda ingin beli!</li>

                  <li>Klik tombol Beli</li>

                  <li>Pilih pembayaran melalui Bank BCA</li>

                  <li>Transfer transaksi sesuai Harga</li>

                  <li>Kirim Bukti Pembayaran melalui Whatsapp/Line </li>

                  <li>Barang akan segera Di proses</li>
                  </ol>
                  </p>
                </div>

                <h2>Pembayaran melalui Tokopedia</h2>
                  <p>
                  <ol>
                  <li>TBA (TO BE ANNOUNCED)</li>
                  </ol>
                  </p>
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
