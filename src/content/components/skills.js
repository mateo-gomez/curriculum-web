import React from 'react'
// Components
import Skill from './skill'

export default function Skills (props) {
  return (
    <table className="mt-5">
      <thead>
        <tr>
          <th><h3>Habilidades</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr className="row">
          {
            props.data.skills.map((item) => {
              return <Skill {...item} key={item.id} />
            })
          }
        </tr>
      </tbody>
    </table>
  )
}