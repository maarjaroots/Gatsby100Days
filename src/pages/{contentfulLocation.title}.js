import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export default function location(props) {
  return (
    <Layout>
      <h1>Page of:</h1>

      <h2> {props.data.contentfulLocation.title} </h2>
      <h3> {props.data.contentfulLocation.body} </h3>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      id
      title
      body
    }
  }
`;
