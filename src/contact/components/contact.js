import React from 'react'

// component
import Social from './social'

// Css
import './contact.css'

export default function Contact(props) {
  return (
    <section className='Contact bg-info'>
      <div className="container">
        <div className="row contact-row">
          <div className="col">
            <h4 className="contact-title">¿Creamos algo juntos?</h4>
          </div>
          <div className="col">
            <form>
              <div className="form-group">
                <input className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col social">
            {
              props.contact.map((item) => {
                return <Social {...item} key={item.id} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}