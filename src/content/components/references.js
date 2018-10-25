import React from 'react'

export default function References (props) {
  return (
    <div className="References">
      <h4>{props.title}</h4>
      <h5>{props.name} | 
      <span className="text-muted"> {props.prof}</span></h5>
      <p>{props.num} | 
      <span className="text-muted"> {props.email}</span></p>
    </div>
  )
}