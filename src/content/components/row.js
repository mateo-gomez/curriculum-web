import React from 'react'
// Components
import References from './references'
import Lang from './lang'

export default function Row (props) {
  return (
    <div className="row my-5">
      <div className="col">
        <h3>Referencias</h3>
        {
          props.data.ref.map((item) => {
            return <References {...item} key={item.id} />
          })
        }
      </div>
      <div className="col align-center justify-content-center">
        <h3>Lenguajes</h3>
        <div className="d-flex">
        {
          props.data.languages.map((item) => {
            return <Lang {...item} key={item.id} />
          })
        }
        </div>
      </div>
    </div>
  )
}