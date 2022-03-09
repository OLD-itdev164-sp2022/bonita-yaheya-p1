import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hope you enjoyed my photo gallery!</h1>
    <p>Thanks for visiting my site!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
