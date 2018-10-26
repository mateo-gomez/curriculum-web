import React from 'react'

export default function Icon (props) {
  const {
    color,
    size
  } = props
  return (
    <svg
      fill={color}
      
    >
      {props.children}
    </svg>
  )
}