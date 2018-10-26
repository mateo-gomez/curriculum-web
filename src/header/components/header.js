import React from 'react'
// Components
import ContactIcon from './contact-icon'
// Css
import './header.css'
// Images
// import pic from '../../images/mateo.jpg'

export default function Header(props) {
  return (
    <section className="Header">
      <div className="container">
        <div className="row">
          <div className='col-sm-2'>
            <figure className="figure figure-img float-left">
              <img className="img-fluid img-thumbnail" src="./dist/images/mateo.jpg" />
            </figure>
          </div>
          <div className="col align-self-end">
            <h1 className="text-uppercase text-white">Mateo Gómez</h1>
          </div>
          <div className="col-4 align-self-end">
            <div className="float-right-fluid">
              <div className="d-flex justify-content-between">
                <ContactIcon img='mail' />
                <a className="text-white" href="">mateogomezmolina@gmail.com</a>
              </div>
              <div className="mt-5 d-flex justify-content-between">
                <ContactIcon img='tel' />
                <p className="text-white d-block text-center mb-0">+57 3016323333</p>
              </div>
              <div className="mt-5 d-flex justify-content-between">
                <ContactIcon img='github' />
                <a className="text-white" href="https://github.com/mateo-gomez" target="_blank">github.com/mateo-gomez</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}