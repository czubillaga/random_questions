import React from "react";

const Answer = ({value, onAnswerSelect, text }) => {

    const handleAnswerSelect = (event) => {
        onAnswerSelect(event.target.value)
    }


    
    return(
        <div>
            <button  value={value} key={Date.now()} onClick={handleAnswerSelect}>{text}</button>
        </div>
    )
}

export default Answer