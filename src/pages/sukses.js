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
          <h2 class="text-center">Pesanan Mu akan segera di proses</h2>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;