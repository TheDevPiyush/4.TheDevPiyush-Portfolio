import React from 'react'
import '../Styles/card.css'
import { Link } from 'react-router-dom'
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
                <Link id='linkkk' to={`/projects/${props.projectId}`}>
                    <div className="cardButton">
                        {props.button}
                    </div>
                </Link>
            </div>

        </div>
    )
}
