import React, {Fragment} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
// import Countdown from "../components/countdown"
import { graphql } from "gatsby"


class IndexPost extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
            <div
              className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
              key={items.node.id}
            >
              <div className="details_List">
                {items.node.image === null ? (
                  <div className="no-image">No Image</div>
                ) : (
                  <Img sizes={items.node.image.fluid} />
                )}

                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  {/* <p>{items.node.details.childMarkdownRemark.excerpt}</p> */}
                  <div className="row">
                    <div className="col-sm-12 align-self-center">
                    <a                  
                        href={items.node.slug}
                        className="Product method-payment"
                        rel="noopener noreferrer"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={
                          items.node.image === null
                            ? ""
                            : items.node.image.fluid.src
                        }
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" />
                        Lihat produk
                      </a>
                      &nbsp;
                      <a                  
                        href={`/checkout`}
                        className="Product snipcart-add-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={
                          items.node.image === null
                            ? ""
                            : items.node.image.fluid.src
                        }
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-cart" />
                        Beli
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

// Categories section
class CategoriesPost extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="row product-main">
          {data.data.allContentfulProductCategories.edges.map(items => (
            <div
              className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
              key={items.node.id}
            >
              <div className="details_List">
                {items.node.image === null ? (
                  <div className="no-image">No Image</div>
                ) : (
                  <Img sizes={items.node.image.fluid} />
                )}
                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `ecommerce`, `react`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Barang Favorit <span role="img" aria-label="Sparkling-heart">❤️</span></h2>
      </div>
      <IndexPost data={data} />
    </div>
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Kategori Pilihan <span role="img" aria-label="Shopping-cart">🛒</span></h2>
      </div>
      <CategoriesPost data={data} />
    </div>
    {/* <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Ingin mendapatkan free ongkir?</h2>
        <p>
         atau ingin Cash on Delivery?
        </p>
        <p><strong>Langsung saja Hubungi Kontak kami dibawah ini!</strong>.</p>
        <Link to="/kontak" className="with-underline">
          Kontak kami
        </Link>
      </div>
    </div>
     <Countdown data={data.data.contentfulDealCountDown} /> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6, sort: { fields: name, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }

    allContentfulProductCategories(limit: 3, sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          slug
          id
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }

        }
      }
    }
  }
`
//    <LatestBlogs data={data.data.allContentfulBlogs} />
/*
    allContentfulBlogs(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1120) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
*/