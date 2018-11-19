import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <main>
      <article>
        <h2 className="f3 fw4 pa3 mv0">Images</h2>
        {data.allImageSharp.edges.map(({ node }) => (
          <div className="fl w-100 w-50-m w-50-l pa2">
            <a href="#" className="db link dim tc">
              <Img className="w-100 db outline black-10" fluid={node.fluid} />
            </a>
          </div>
        ))}
      </article>
    </main>
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
