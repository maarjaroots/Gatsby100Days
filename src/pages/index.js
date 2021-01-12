import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulHome.name}</h1>

      <h2>{data.contentfulHome.title}</h2>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulHome {
      name
      title
    }
  }
`;

export default IndexPage;
