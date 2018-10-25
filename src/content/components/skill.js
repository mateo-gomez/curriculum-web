import React from 'react'

export default function Skill (props) {
  return (
    <td className="col-6">
      <div className='Skill row justify-content-between'>
        <div className="col">
          <h6>{props.skill}</h6>
        </div>
        <div className="col">
          {props.level}
        </div>
      </div>
    </td>
  )
}