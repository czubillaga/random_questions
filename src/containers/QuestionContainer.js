import React, { useEffect, useState } from "react";
import QuestionBox from "../components/QuestionBox";

const QuestionContainer = () => {

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([])

    const getQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=30&category=9&difficulty=medium')
        .then(res => res.json())
        .then((data) => setQuestions(data.results))
    }

    const getRandomQuestion = () => {
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)])
    }

    useEffect(() => {
        getQuestions()
    }, [])

    useEffect(() => {
        getRandomQuestion()
    })



    return(
        <div class="container">
            <h1>QuestionContainer</h1>
            <QuestionBox currentQuestion={currentQuestion} /> 
        </div>
    )
}

export default QuestionContainer