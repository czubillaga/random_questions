import React from "react";
import unescape from 'lodash/unescape';

const Answer = ({value, onAnswerSelect, text }) => {

    const handleAnswerSelect = (event) => {
        onAnswerSelect(event.target.value)
    }
    
    return(
        <div>
            <button class="choice" value={unescape(text)} key={Date.now()} onClick={handleAnswerSelect}>{unescape(text)}</button>
        </div>
    )
}

export default Answer