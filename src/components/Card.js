import React from 'react'
import '../Styles/card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {


    const redirectToSourceCode = () => {
        if (props.sourceCodeUrl) {
            window.open(props.sourceCodeUrl, '_blank');
        } else {
            alert('Source Code URL not available');
        }
    };

    const redirectToLiveOutput = () => {
        if (props.liveOutputUrl) {
            window.open(props.liveOutputUrl, '_blank');
        } else {
            alert(`Live Output URL not available for ${props.title}.`);
        }
    };


    return (
        <div className="main">
            <div className="cardTitle">
                {props.title}
            </div>
            <div className="cardBody" dangerouslySetInnerHTML={{ __html: props.body }}>
            </div>

            <div className="cardButtonContainer">
                <button className="cardButton" onClick={() => { redirectToSourceCode(props.sourceCodeUrl, ) }}>
                    Source Code
                </button>
                <button className="cardButton" onClick={() => { redirectToLiveOutput(props.liveOutputUrl, props.title) }}>
                    Live Output
                </button>
            </div>

        </div>
    )
}
