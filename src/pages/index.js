import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Home from "../pages/home"




// markup
const IndexPage = ( {data}) => {
  return (

    <Layout>
      <Home />
    </Layout>
    // <div>Hello!
    // {data.site.siteMetadata.description}
    // </div>
  )
}

// export const query = graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `

export default IndexPage
