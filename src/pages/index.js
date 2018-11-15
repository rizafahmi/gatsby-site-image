import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    {data.allImageSharp.edges.map(({ node }) => (
      <div>
        <Img fluid={node.fluid} />
        <h3>{node.fluid.originalName}</h3>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query ListAllImages {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`;
