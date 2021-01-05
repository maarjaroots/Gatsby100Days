import React from 'react'
import { Link } from "gatsby"

export default function menu() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand has-background-dark">
        {/* <div class="navbar-menu has-background-dark "> */}
        <div class="navbar-start  pl-6"> 

          <div class="navbar-item has-text-white">
          <Link to="/">Home</Link>
          </div>
          <div class="navbar-item has-text-white">
          <Link to="/about">About</Link>
        </div>
        <div class="navbar-item has-text-white">
        <Link to="/location">Locations</Link>
        </div>
        </div>
      </div>
      {/* </div> */}
      </nav>
    )
}
