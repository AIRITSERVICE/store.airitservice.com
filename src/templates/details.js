import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import StarRatingComponent from "react-star-rating-component";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const ProductDetails = data => (
  <Layout>
    <SEO
      title={data.data.contentfulProduct.name}
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div className="container details-page">
      <div className="product-details">
        <div>
        </div>
        <div className="Product-Screenshot">
        <h2>{data.data.contentfulProduct.name}</h2>
          {data.data.contentfulProduct.productMorePhotos === null ? (
            <div className="no-image">No Image</div>
          ) : (
            <Tabs>
              {data.data.contentfulProduct.productMorePhotos.map(items => (
                <TabPanel key={items.id}>
                  <Tab>
                    <img src={items.fixed.src} alt="" />
                  </Tab>
                </TabPanel>
              ))}
              <TabList>
                {data.data.contentfulProduct.productMorePhotos.map(items => (
                  <Tab key={items.id}>
                    <img src={items.fixed.src} alt="" />
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          )}
        </div>
        {/* <StarRatingComponent
          name="rate1"
          starCount={5}
          value={data.data.contentfulProduct.rating}
        /> */}
        <div class="col-md-6">
         
        </div>
        <div className="row buynowinner">
{/*          <div className="col-sm-2">
            <span className="price">
              Precio: ${data.data.contentfulProduct.price}
            </span>
          </div>*/}
          <div className="col-sm-10 text-left">
          <a                  
              href={`/cara-pembayaran`}
              className="Product method-payment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-shopping-bag" />
              Cara Pembayaran
            </a>
            &nbsp;
            <a
              href={`/checkout`}
              className="Product snipcart-add-item"
              target="_blank"
              rel="noopener noreferrer"
              data-item-id={data.data.contentfulProduct.slug}
              data-item-price={data.data.contentfulProduct.price}
              data-item-image={
                data.data.contentfulProduct.image === null
                  ? ""
                  : data.data.contentfulProduct.image.fixed.src
              }
              data-item-name={data.data.contentfulProduct.name}
              data-item-url={`/`}
            >
              <i className="fas fa-shopping-cart" />
              Beli
            </a>
          </div>
        </div>
        {/* <p><u>Untuk saat ini seluruh pengiriman menggunakan JNE, </u><a href="https://www.jne.co.id/id/beranda">Cek ongkir!</a></p> */}
        <div
          dangerouslySetInnerHTML={{
            __html:
              data.data.contentfulProduct.details.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </Layout>
)

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      name
      slug
      image {
        fixed(width: 1120, height: 500) {
          width
          height
          src
          srcSet
        }
      }
      price
      details {
        childMarkdownRemark {
          html
        }
      }
      productMorePhotos {
        id
        fixed(width: 600, height: 600) {
          src
        }
      }
      rating
    }
  }
`
