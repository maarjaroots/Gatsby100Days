import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export default function about(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulAbout.title}</h1>

      <h2>{props.data.contentfulAbout.body}</h2>
      
      <h3>More info of our current locations:</h3>

      <div className="city">
        <ul>
          {props.data.allContentfulLocation.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.path}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    contentfulAbout {
      body
      title
    }
    allContentfulLocation {
      edges {
        node {
          id
          title
          path: gatsbyPath(filePath: "/{contentfulLocation.title}")
        }
      }
    }
  }
`;
