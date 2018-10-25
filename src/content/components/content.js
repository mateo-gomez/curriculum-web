import React from 'react'

export default function Content (props) {
  return (
    <section className="container">
      {props.children}
    </section>
  )
}