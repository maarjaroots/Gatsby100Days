import React from "react";
import "../components/nav.css"
import { graphql, Link, StaticQuery } from "gatsby";

// const ListLink = props => (
//   <li>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function nav() {
  return (

<StaticQuery
      query={graphql`
      query {
      contentfulAbout {
        name
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
        <Link to="/about">{data.contentfulAbout.name}</Link>
      </li>
    </ul>

{/* <ul>
  <ListLink to="/">Home</ListLink>
  <ListLink to="/about-us">{data.contentfulAbout.title}</ListLink>
</ul> */}

    </div>

)}
/>
)
}
