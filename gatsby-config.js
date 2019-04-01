module.exports = {
  siteMetadata: {
    title: `OLIVE + ATLAS`,
    description: `E-commerce made easy.`,
    author: `@bazaarfellows`,
    footer: `© 2019 Bazaar Fellows`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'Products',
        link: '/products/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
  
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "Category",
        // This is the field under which it's accessible
        fieldName: "shop",
        // URL to query from
        // url: "http://localhost:3000/graphql",
        url: "https://bazaarapi.herokuapp.com/graphql"
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `gatsby-starter-default`,
      //   short_name: `starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `minimal-ui`,
      // },
    },
  ],
}
