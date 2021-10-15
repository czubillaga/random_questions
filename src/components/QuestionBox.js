import React from "react";
import unescape from 'lodash/unescape';
import Answer from "./Answer";

const QuestionBox = ({currentQuestion, onAnswerSelect}) => {

    const incorrectAnswers = unescape(currentQuestion?.incorrect_answers).split(',')
    const correctAnswer = currentQuestion?.correct_answer

    const allAnswers = [...incorrectAnswers, correctAnswer].map((answer) => {
        return <Answer value={answer == correctAnswer} text={answer} onAnswerSelect={onAnswerSelect}/>
    })
        

    return(
        <div class="question-box">
            {currentQuestion ? <h4>{unescape(currentQuestion.question)}</h4> : null}
            {currentQuestion ? allAnswers : null}
        </div>
    )
}

export default QuestionBox;