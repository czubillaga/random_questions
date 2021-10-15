import React from "react";

const QuestionBox = ({currentQuestion}) => {

    return(
        <div class="question-box">
            {currentQuestion ? <h4>{currentQuestion.question}</h4>: null}
        </div>
    )
}

export default QuestionBox;