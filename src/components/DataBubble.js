import React from 'react';
import '../Styles/HomePage.css';

const DataBubble = ({ imgSrc, label }) => {
    return (
        <div className="data-bubble">
            <span>
                <img style={{ "backgroundColor": 'white' }} src={imgSrc} alt={label} className="logos" />
            </span>
            <span style={{ fontSize: "small"}}>
                {label}
            </span>
        </div>
    );
};

export default DataBubble;
