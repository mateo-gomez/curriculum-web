import React from 'react'
// Componets
import { Nav, NavItem, NavLink } from 'reactstrap'
// Css
import './nav.css'

export default function NavComponent(props) {
  return (
    <div className="sticky-top nav-header">
      <Nav>
            <NavItem className="nav-item active">
              <NavLink href="#">Inicio</NavLink>
            </NavItem>
            <NavItem className="nav-item active">
              <NavLink href="#aboutMe">Sobre mi</NavLink>
            </NavItem>
            <NavItem className="nav-item active">
              <NavLink href="#portfolio">Portafolio</NavLink>
            </NavItem>
            <NavItem className="nav-item active">
              <NavLink href="#knowledges">Habilidades</NavLink>
            </NavItem>
            <NavItem className="nav-item active">
              <NavLink href="#">Contanctame</NavLink>
            </NavItem>
      </Nav>
    </div>
  )
}