import React from 'react'
// Components
import Exp from './exp'


export default function ExpContent (props) {
  return (

      <table className="mt-5">
        <thead>
          <tr className="row">
            <th className="col"><h3>Experiencia</h3></th>
            <th className="col"><h3>Educación</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
              <td className="col-6">
                <Exp data={props.data.exp[0]} />
              </td>
              <td className="col-6">
                <Exp data={props.data.edu[0]} />
              </td>
          </tr>
          <tr className="row mt-5">
              <td className="col-6">
                <Exp data={props.data.exp[1]} />
              </td>
              <td className="col-6">
                <Exp data={props.data.edu[1]} />
              </td>
          </tr>
        </tbody>
      </table>
  )
}