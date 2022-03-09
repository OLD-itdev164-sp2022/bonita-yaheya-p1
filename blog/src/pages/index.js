import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    
    <h2>Welcome to my Photo Gallery.</h2>

    <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
           <Row>         
      {data.gallery.edges.map(({node}) => (
      <Col lg={4} md={6} key={node.id} className='py-3'>
         <a href={node.publicURL}>
         <GatsbyImage image={node.childImageSharp.gatsbyImageData}
         alt = {node.base.split('-').join(' ').split('.')[0]} />
         </a>
         
      </Col>
           ))}
           </Row>
        </SRLWrapper>
     </SimpleReactLightbox>     
    </Container>
     
    <p>
      <h3>Click image for content</h3> <br />
      <Link to="/page-2/">Next Page</Link><br />
    </p>
  </Layout>
)
export default IndexPage

export const pageQuery = graphql `
  query {
    gallery: allFile(filter: 
      {relativeDirectory: {eq: "college-photos"}}
      sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 900
              transformOptions: {fit: COVER}
              placeholder: BLURRED
              webpOptions: {quality: 50}
            )
          }
        }
      }
    }
  }
`
