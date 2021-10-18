import React from "react";
import unescape from 'lodash/unescape';
import Answer from "./Answer";

const QuestionBox = ({currentQuestion, onAnswerSelect, allAnswers}) => {

    const answerNodes = allAnswers.map((answer) => {
        return <Answer value={answer === currentQuestion?.correctAnswer} text={unescape(answer)} onAnswerSelect={onAnswerSelect}/>
    })

        

    return(
        <div class="question-box">
            {currentQuestion ? <h4>{unescape(currentQuestion.question)}</h4> : null}
            {currentQuestion ? answerNodes : null}
        </div>
    )
}

export default QuestionBox;