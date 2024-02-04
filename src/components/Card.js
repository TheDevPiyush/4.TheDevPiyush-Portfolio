import React from 'react'
import '../Styles/card.css'
export default function Card(props) {
    return (
        <div className="main">
            <div className="cardTitle">
                {props.title}
            </div>
            <div className="cardBody">
                {props.body}
            </div>

            <div className="cardButtonContainer">
                <div className="cardButton">
                    {props.button}
                </div>
            </div>

        </div>
    )
}
