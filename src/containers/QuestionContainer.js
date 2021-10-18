import React, { useEffect, useState } from "react";
import QuestionBox from "../components/QuestionBox";
import unescape from 'lodash/unescape';

const QuestionContainer = () => {

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([])
    const [selectedAnswer, setAnswer] = useState(null)
    const [questionAttempted, setQuestionAttempted] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(currentQuestion?.correct_answer)
    const [allAnswers, setAllAnswers] = useState([])
    const [nextQuestion, setNextQuestion] = useState(false)


    const getQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=medium')
        .then(res => res.json())
        .then((data) => setQuestions(data.results))
    }

    const getRandomQuestion = () => {
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)])
    }

    useEffect(() => {
        getQuestions()
        getRandomQuestion()
    }, [])

    useEffect(() => {
        setCorrectAnswer(currentQuestion?.correct_answer)
        let answersArr = unescape(currentQuestion?.incorrect_answers).split(',')
        answersArr = [...answersArr, currentQuestion?.correct_answer]
        shuffle(answersArr)
        setAllAnswers(answersArr)
    }, [currentQuestion])

    useEffect(() => {
        getRandomQuestion()
        setNextQuestion(false)
        setQuestionAttempted(false)
    }, [nextQuestion])

    const onAnswerSelect = (selectedAnswer) => {
        setAnswer(selectedAnswer)
        setQuestionAttempted(true)
    }

    const handleNextQuestion = () => {
        setNextQuestion(true)
    }

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    



    return(
        <div class="container">
            <h1>QuestionContainer</h1>
            <QuestionBox currentQuestion={currentQuestion} onAnswerSelect={onAnswerSelect} allAnswers={allAnswers}/> 
            <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    )
}




export default QuestionContainer