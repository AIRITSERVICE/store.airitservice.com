# store.airitservice.com


Indonesia Ecommerce Website Template built with GatsbyJS and Contentful


## 🚀 Quick start

  1.  **Setup this site.**

      Use the Gatsby CLI to Clone this site.

      ```sh
      # Clone this Repositories
      gatsby new airitstore https://github.com/AIRITSERVICE/store.airitservice.com.git
      ```

  2.  **Setup Contentful Models**

      Use [contentful-cli](https://github.com/contentful/contentful-cli) to import the models from oneshopper.json

      ```
      contentful space --space-id <CONTENTFUL_SPACE_ID> import --content-file oneshopper.json
      ```
      
      Checkout my Author blog how to Import and Export data from ContentFul
      
      [How to Import and Export data From Contentful](https://rohitgupta.design/import-and-export-data-with-contentful-cli)

  3.  **Start developing.**

      Navigate into your new site’s directory and start it up.

      ```sh
      npm install
      gatsby develop
      ```

  4.  **Setup your Own Configure Projects.**

      Enter your own key

      [ContentFul](https://be.contentful.com/login):
      - spaceId = **Key**
      - accessToken = **Key**


  5.  **Open the source code and start editing!**

      Your site is now running at `http://localhost:8000`!

      _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

