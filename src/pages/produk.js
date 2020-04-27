import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class IndexPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NoOfPost: 6,
      contactPhone: "088291046883"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleProductClick = () => {
 //   console.log(items.node);
  }

  handleScroll() {
    var lastScrollY = window.pageYOffset + 1100

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3
      this.setState({
        NoOfPost: count,
      })
    }
  }

  render() {
    const { data } = this.props
    const { NoOfPost } = this.state

    return (
      <React.Fragment>
        <div className="row product-main" onScroll={this.handleScroll}>
        {data.data.allContentfulProduct.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
                key={items.node.id}
              >
              {    console.log(items.node) }
                <div className="details_List">
                  <Link to={`/${items.node.slug}`}>
                    {items.node.image === null ? (
                      <div className="no-image">No Image</div>
                    ) : (
                      <Img sizes={items.node.image.fluid} />
                    )}
                  </Link>

                  <div className="details_inner">
                    <h2>
                      <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                    </h2>
                    <div className="row">

                      <div className="col-sm-12 text-right align-self-center">
                        <a
                          href={`/checkout`}
                          className="Product snipcart-add-item"
                          target="_blank"
                           rel="noopener noreferrer"
                          data-item-image={
                            items.node.image === null
                              ? ""
                              : items.node.image.fluid.src
                          }
                          data-item-name={items.node.name}
                          data-item-url={`/`}
                          onClick={this.handleProductClick}
                        >
                          <i className="fas fa-shopping-cart" />
                          Beli
                        </a>
                        &nbsp;
                      <a                  
                        href={`/cara-pembayaran`}
                        className="Product method-payment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-shopping-bag" />
                        Cara Pembayaran
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Produk" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query StoreQuery {
  allContentfulProduct{
    edges{
      node{
        id
        name
        slug
        rating
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
}
`