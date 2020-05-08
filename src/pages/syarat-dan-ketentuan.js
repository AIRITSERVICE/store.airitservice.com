import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class termsofservice extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Cara Pembayaran" keywords={[`gatsby`, `application`, `react`]} />{" "}
        <div className="site-About">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Syarat Dan Ketentuan</h1>
                <hr />
                <div class="col-sm-6">
                <p>
                <ol>
                    <li>
                    AIR IT STORE selalu berusaha untuk mencantumkan harga yang terbaru. Namun untuk menyakinkan harga terakhir, kami sarankan menghubungi Online Support untuk mendapatkan harga terbaru. 
                    Harga bisa berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                    </li>
                    <li>
                    Sebagian barang tidak READY stock sehingga diperlukan pemesanan sebelumnya.
                    </li>
                    <li>
                    Barang yang telah dibeli tidak dapat dikembalikan atau ditukar dengan barang lain, kecuali ada perjanjian terlebih dahulu.
                    </li>
                    <li>
                    AIR IT Store berusaha secara penuh untuk memberikan informasi secara lengkap terhadap produk maupun informasi yang ada, akan tetapi dengan segala keterbatasan, 
                    dengan segala hormat AIR IT STORE tidak menjamin  akan ketepatan data tersebut, termasuk spesifikasi produknya.
                    </li>
                <li>Gambar hanya ilustrasi, versi produk dapat berbeda tergantung kebijakan distributor, namun tidak mengurangi spesifikasi dan fungsi</li>
                <li>jika ada request cantumkan pada keterangan saat order. Jika tidak maka unit kami kirim secara random</li>
                <li>Kerusakan dan kehilangan saat pengiriman diluar tanggung jawab kami.</li>
                <li>Simpan dus dan invoice pembelian untuk garansi.</li>
                </ol>
                </p>
                </div>
                <h1>Pemesanan</h1>
                <hr />
                <p>  
                Guna memudahkan Anda dalam melakukan pemesanan, terlebih dahulu silahkan untuk menjelajahi dengan seksama spesifikasi produk dan harga sesuai dengan yang diharapkan. 
                Catat daftar produk yang ingin dibeli, kemudian hubungi kami mengenai informasi lengkap pemesanan beserta keterangan garansi melalui Via Telepon, WhatsApp dan Online Support
                Anda dapat menghubungi Costumer Services kami melalui kontak yang ada dibawah ini.<br></br>
                <br></br>
                <ul>
                <li>Telepon   : <b>0882-9104-6883</b></li>
                <li>Whatsapp  : <b>0818-0717-5316 || 0882-9104-6883</b></li>
                <li>Instagram : <b>airitservice</b></li>
                <li>Email: <b>airitservice19@gmail.com</b></li>
                </ul>
                </p>
                <br></br>

                <div>
                <h1>Pembayaran</h1>
                <hr/>
                <p>
                Transfer melalui rekening Bank yang tersedia di website,
                penyiapan atau pengepakan barang akan di lakukan jika sudah di transfer ke rekening bank yang tersedia.
                Usahakan jika sudah transfer harap infokan ke marketing yang bersangkutan
                barang akan di kirim secepatnya melalui expedisi / travel yang telah di tentukan sebelumnya.
                </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </Layout>
    )
  }
}
export default termsofservice