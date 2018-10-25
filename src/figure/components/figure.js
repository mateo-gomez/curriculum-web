import React from 'react'

export default function Figure(props) {
  return (
    <figure className="figure">
      <img
        src={props.img}
        className="figure-img img-fluid rounded"
        alt="A generic square placeholder image with rounded corners in a figure."
      />
      <figcaption className="figure-caption text-right">
        {props.alt}
      </figcaption>
    </figure>
  )
}