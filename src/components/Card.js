import React from 'react'
import '../Styles/card.css'
export default function Card(props) {
    return (
        <div className="main">
            {props.title}
            {props.body}
        </div>
    )
}
