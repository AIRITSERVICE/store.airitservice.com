import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout"


const Success = props => (
  <Layout>
    <Helmet>
      <title>Terima Kasih</title>
      <meta name="description" content="Terima Kasih" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1 class="text-center">Terima Kasih telah berbelanja di AIR IT STORE</h1>
          </header>
          <h2 class="text-center">Silahkan transfer ke rekening dibawah ini sesuai Harga produk</h2>
          <div class="text-center">
          <img src="https://arthakirana.com/wp-content/uploads/2013/05/bca-customer-artha-kirana-flycatcher-pest-control.png" alt="BCA" />
                  <h3>No Rekening: 6300-270-857</h3>
                  <h4>Atas Nama: M IQBAL ARYO ANGGORO</h4>
            </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;