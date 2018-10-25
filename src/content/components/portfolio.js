import React from 'react'
// Components

export default function Porfolio (props) {
  return (
    <div id="portfolio" className='Portfolio'>
      <h1>Portafolio</h1>
      <p>he realizado varios proyectos, algunos propios, otros por parte de cursos tomados en <a href="https://platzi.com/">platzi.com</a> o por otros medios, Algunos de ellos son:</p>
      <ul>
        <li>
          Página web de contenido multimedia y reproductor de videos hecho unicamente en react: 
          <br />
          <blockquote className="blockquote">
            <p className="ml-5">
              <a href="https://github.com/mateo-gomez/react" target="_blank">https://github.com/mateo-gomez/react</a>
            </p>
          </blockquote>
        </li>
        <li>Entre mis proyectos tambien está incluida esta página, que es en cierta manera mi página web de presentación y hoja de vida:
          <br />
          <blockquote className="blockquote">
            <p className="ml-5">
              <a href="https://github.com/mateo-gomez/proyecto-react" target="_blank">https://github.com/mateo-gomez/proyecto-react</a>
            </p>
          </blockquote>
        </li>
        <li>
          Este es un ejemplo de una página web personal asi como esta, se enfoca unicamente en diseño y estilo css: 
          <br />
          <blockquote className="blockquote">
            <p className="ml-5">
              <a href="https://github.com/mateo-gomez/desarrollo-web" target="_blank">https://github.com/mateo-gomez/desarrollo-web</a>
            </p>
          </blockquote>
        </li>
        <li>
          Platziverse es un proyecto diseñado por <a href="https://twitter.com/julian_duque">@julian_duque</a>, trata de una plataforma web para internet de las cosas en la cual se puede obtener información a través de dispositivos que puedan recolectar información de un entorno y enviar esta información a una aplicación web en tiempo real:
          <blockquote className="blockquote">
            <p className="ml-5">
              <a href="https://github.com/mateo-gomez/platziverse/tree/platziverse-web" target="_blank">https://github.com/mateo-gomez/platziverse/tree/platziverse-web</a>
            </p>
          </blockquote>
        </li>
      </ul>
    </div>
  )
}