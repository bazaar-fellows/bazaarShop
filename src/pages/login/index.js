import React from "react"
import LogInForm from '../../auth/loginForm';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import '../../components/design/loginPage.scss';

import { Provider } from "react-redux";
import {store} from '../index'



const IndexPage = () => (
  <Provider store = {store}>
  <Layout>
      <SEO title="LogIn" keywords={[`gatsby`, `application`, `react`]} />
      <div className="login" style={{ height: '500%', padding: 70}}>
        {/* <h1>Log In</h1> */}
        <LogInForm/>
      </div>
  </Layout>
  </Provider>

)

export default IndexPage
