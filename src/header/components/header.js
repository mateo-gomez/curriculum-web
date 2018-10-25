import React from 'react'

import Nav from "./nav";
import './header.css'
import '../../images/hero.jpg'

export default function Header (props) {
    return (
        <header className="Header">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">
                        <span className="name">Mateo Gómez</span>
                    </h1>
                    <p className="lead desc">
                        <span>Desarrollador web listo para crear proyectos grandes y con ancias de adquirir nuevos conocimientos</span>
                    </p>
                </div>
            </div>
        </header>
    )
}