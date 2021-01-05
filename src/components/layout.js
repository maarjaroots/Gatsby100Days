import React from 'react'
import '../bulma/bulma.scss'
import { Link } from "gatsby"
import Menu from "../components/menu"



export default function layout( {children}) {
    return (
        <div>
            
            <Menu />
            
            {children}
        </div>
    )
}
