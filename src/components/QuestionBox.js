import React from "react";
import unescape from 'lodash/unescape';

const QuestionBox = ({currentQuestion}) => {


    return(
        <div class="question-box">
            {currentQuestion ? <h4>{unescape(currentQuestion.question)}</h4> : null}
        </div>
    )
}

export default QuestionBox;