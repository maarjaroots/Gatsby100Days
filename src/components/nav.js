import React from "react";
import "../components/nav.css";
import { graphql, Link, StaticQuery } from "gatsby";

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function nav() {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulAbout {
            name
          }
          contentfulHome {
            name
          }
        }
      `}
      render={(data) => (
        <div className="nav">
          <ul>
            <ListLink to="/">{data.contentfulHome.name}</ListLink>
            <ListLink to="/about">{data.contentfulAbout.name}</ListLink>
          </ul>
        </div>
      )}
    />
  );
}
