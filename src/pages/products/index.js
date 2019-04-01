import React from "react"
import { graphql } from "gatsby"
import '../../components/design/products.scss';
import ProductQuery from '../../components/product-query'
import Background from '../../components/background';

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {ApolloProvider} from 'react-apollo';
import {client} from '..';

import { Provider } from "react-redux";
import {store} from "..";


const Products = (props) => {
  return (
    <ApolloProvider client={client}>
      <Provider store = {store}>

      <Layout>
        <SEO title="Products" />
        <ProductQuery/>
      <Background />
      </Layout>
      </Provider>
    </ApolloProvider>
  )
}

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default Products;