import React from "react";
import { NavLink } from "react-router-dom";
import SubHeader from "./SubHeader";

export default function HeaderMenu() {

    const menu = [
        {
            name: 'Home',
            path: '/',
            subheader: [
                {
                    name: 'Homepage 1',
                    path: 'hm_1'
                },
                {
                    name: 'Homepage 2',
                    path: 'hm_2'
                },
                {
                    name: 'Homepage 3',
                    path: 'hm_3'
                },
            ]
        },
        {
            name: 'Shop',
            path: 'product'
        },
        {
            name: 'Features',
            path: 'cart'
        },
        {
            name: 'Blog',
            path: 'blog'
        },
        {
            name: 'About',
            path: 'about'
        },
        {
            name: 'Contact',
            path: 'contact'
        },
    ]
  return (
    <div className="menu-desktop">
      <ul className="main-menu">
        {menu.map(value => <li key={value.name} className={value.name === 'Features' ? "label1" : ''} data-label1={value.name === 'Features' ? "hot" : ''}>
                                <NavLink to={`/${value.path}`}>{value.name}</NavLink>
                                {value.subheader ? <SubHeader subcat={value.subheader} />  : ''}
                            </li>
        )}
      </ul>
    </div>
  );
}
