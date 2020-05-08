var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken, } = process.env

module.exports = {
  siteMetadata: {
    title: `AIR IT STORE - Empower Your Productivity`,
    description: `Jual Barang Elektronik dan Aksesoris Komputer/Laptop`,
    author: `@B4Lee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AIR IT STORE`,
        short_name: `AIR IT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-151639144-2",
        },
      },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      },
    },
  ],
}
