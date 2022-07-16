import React from 'react'
import { NavLink } from "react-router-dom";

export default function SubHeader(props) {
  return (
    <ul className="sub-menu">
        {props.subcat.map(subval => <li key={subval.path}>
                                        <NavLink to={`/${subval.path}`}>{subval.name}</NavLink>
                                    </li>)}
    </ul>
  )
}
