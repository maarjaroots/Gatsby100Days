import React from "react";
import "../components/nav.css"
import { graphql, Link, StaticQuery } from "gatsby";

export default function nav() {
  return (

<StaticQuery
      query={graphql`
      query {
      contentfulAbout {
        body
        title
      }
    }
      `}


render = {data => (

<div className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">{data.contentfulAbout.title}</Link>
      </li>
    </ul>
    </div>

)}
/>
)
}
