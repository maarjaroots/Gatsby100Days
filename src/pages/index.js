import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulHomepage.title}</h1>

      <h2>{data.contentfulHomepage.body}</h2>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulHomepage {
      body
      title
    }
  }
`;

export default IndexPage;
