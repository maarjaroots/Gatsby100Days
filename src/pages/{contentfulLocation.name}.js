import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function location(props) {
  return (
    <Layout>
      <h1>Page of:</h1>

      <h2> {props.data.contentfulLocation.name} </h2>
      <h3> {props.data.contentfulLocation.title} </h3>
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
  }
`;
