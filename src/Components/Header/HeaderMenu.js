import React from "react";
import { NavLink } from "react-router-dom";
import SubHeader from "./SubHeader";

export default function HeaderMenu() {

    const menu = [
        {
            name: 'Home',
            path: '',
            subheader: [
                {
                    name: 'Sub-menu 1',
                    path: 'hm_1'
                },
                {
                    name: 'Sub-menu 2',
                    path: 'hm_2'
                },
                {
                    name: 'Sub-menu 3',
                    path: 'hm_3'
                },
            ]
        },
        {
            name: 'Shop',
            path: 'product'
        },
        {
            name: 'Cart',
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
        {menu.map(value => <li key={value.name} className={value.name === 'Cart' ? "label1" : ''} data-label1={value.name === 'Cart' ? "hot" : ''}>
                                <NavLink to={`/${value.path}`}>{value.name}</NavLink>
                                {value.subheader ? <SubHeader subcat={value.subheader} />  : ''}
                            </li>
        )}
      </ul>
    </div>
  );
}
