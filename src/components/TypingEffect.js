import React, { useState, useEffect } from 'react';
import '../Styles/HomePage.css'

const TypingEffect = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [eraseIndex, setEraseIndex] = useState(-1);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (eraseIndex >= 0) {
                setTypedText(prevText => prevText.slice(0, -1));
                if (typedText === '') {
                    setEraseIndex(-1);
                    setIndex(prevIndex => (prevIndex + 1) % words.length);
                }
            } else {
                if (typedText === words[index]) {
                    setEraseIndex(words[index].length);
                } else {
                    setTypedText(prevText => prevText + words[index][prevText.length]);
                }
            }
        }, 160);

        return () => clearInterval(typingInterval);
    }, [typedText, index, eraseIndex, words]);

    return (
        <div id='auto-text'>
            {typedText}<span id='blink'></span>
        </div>
    );
};

export default TypingEffect;
