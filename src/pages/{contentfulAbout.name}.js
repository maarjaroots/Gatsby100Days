import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export default function about(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulAbout.name}</h1>

      <h2>{props.data.contentfulAbout.title}</h2>
      
      <h3>More info of our current locations:</h3>

      <div className="city">
        <ul>
          {props.data.allContentfulLocation.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.path}>{node.name}</Link>
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
      name
      title
    }
    allContentfulLocation {
      edges {
        node {
          id
          name
          path: gatsbyPath(filePath: "/{contentfulLocation.name}")
        }
      }
    }
  }
`;
