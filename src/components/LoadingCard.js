import React from 'react'
import '../Styles/Loadingcard.css'
export default function LoadingCard(props) {
    return (
        <div className="mainLoading">
            <div className="cardTitleLoading">
                {props.title}
            </div>
            <div className="cardBodyLoading">
                {props.body}
            </div>

        </div>
    )
}
