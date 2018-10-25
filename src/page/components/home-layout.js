import React from 'react'
import './home-layout.css'

export default function HomeLayout (props) {
    return (
        <section>
            {props.children}
        </section>
    )
}