import React, { useEffect, useState } from 'react'
import '../Styles/card.css'
export default function Card(props) {

    const [isOutputURL, setIsOutputURL] = useState(false);

    useEffect(() => {
        if (props.liveOutputUrl) {
            setIsOutputURL(true)
        }
    })


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
                <button className="cardButton code-btn" onClick={redirectToSourceCode}>
                    View Code <span> <i class="fa fa-code" aria-hidden="true"></i> </span>
                </button>
                {isOutputURL
                    ?
                    <button className="cardButton live-btn" onClick={redirectToLiveOutput}>
                        View Live <span> <i class="fa fa-play" aria-hidden="true"></i> </span>
                    </button>
                    :
                    <button disabled className="disable-btn">
                        N/A
                    </button>
                }
            </div>



        </div>
    )
}
