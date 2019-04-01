import React from "react"
import "../components/design/carsoul.scss"
import "../components/design/index.scss"

import Mutation from "../components/apollo/category-mutation.js"
import DeleteMutation from "../components/apollo/category-delete-mutation.js"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "node-fetch"

import Auth from "../auth/auth"

import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"

import SubHeader from "../components/subHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/design/dropdown.css"
import Background from "../components/background"
import { Provider } from "react-redux"
import createStore from "../store"

export const store = createStore()

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://bazaarapi.herokuapp.com/graphql",
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

// export const client = new ApolloClient({
//   uri: "https://bazaarapi.herokuapp.com/graphql"
// });

const IndexPage = () => (
  <>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Auth capibility="delete">
            <p> Add Category </p>
            <Mutation />
            <p> Delete Category</p>
            <DeleteMutation />
          </Auth>

          <SubHeader />
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className="carsoul">
            <Background />

            <input type="checkbox" className="faux-ui-facia" />
            <div
              className="slide"
              slide="5"
              annot="This is the fifth slide title. Photo by David Marcu."
            >
              <img
                className="carsoulImg"
                src="https://res.cloudinary.com/olive-atlas/image/upload/v1551387680/oliveandatlas_olive_and_atlas_handmade_dog_accessories_spring_summer_17-12.jpg"
                alt="Slide 3"
              />
            </div>

            <input type="checkbox" className="faux-ui-facia" />
            <div
              className="slide"
              slide="4"
              annot="This is the fourth slide title. Photo by Ryan Lum."
            >
              <img
                className="carsoulImg"
                src="https://res.cloudinary.com/olive-atlas/image/upload/v1551387680/oliveandatlas_olive_and_atlas_handmade_dog_accessories_spring_summer_17-12.jpg"
                alt="Slide 2"
              />
            </div>

            <input type="checkbox" className="faux-ui-facia" />
            <div
              className="slide"
              slide="3"
              annot="This is the third slide title. Photo by Tomasz Paciorek."
            >
              <img
                className="carsoulImg"
                src="https://res.cloudinary.com/olive-atlas/image/upload/v1551387680/oliveandatlas_olive_and_atlas_handmade_dog_accessories_spring_summer_17-12.jpg"
                alt="Slide 1"
              />
            </div>

            <div className="counter" count="3">
              {" "}
              / 3
            </div>
          </div>
          <div>
          </div>
        </Layout>
      </ApolloProvider>
    </Provider>
  </>
)

export default IndexPage
