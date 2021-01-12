import React from "react";
import Nav from "../components/nav";
import "./layout.css"


export default function layout({ children }) {
  return (
    <div >
      <Nav />
      {children}
    </div>
  );
}
