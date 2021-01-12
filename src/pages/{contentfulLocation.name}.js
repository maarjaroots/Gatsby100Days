import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function location(props) {
  return (
    <Layout>
      <h1>Page of:</h1>
      <h2> {props.data.contentfulLocation.name} </h2>
      <h3> {props.data.contentfulLocation.title} </h3>
      <div className="location">
        <ListLink to="/about">
          Back to: {props.data.contentfulAbout.name}
        </ListLink>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      id
      name
      title
    }
    contentfulAbout {
      name
    }
  }
`;
