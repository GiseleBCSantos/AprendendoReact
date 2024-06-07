import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import he from 'he';

function Question(props) {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answers, setAnswers] = useState([])

    const incorrectAnswers = props.item.incorrect_answers
    const correctAnswer = props.item.correct_answer

    useEffect(() => {

        const randomPosition = Math.floor(Math.random() * 3)

        let answersArray = []
        for (let i = 0; i < incorrectAnswers.length; i++) {
            answersArray.push({
                id: nanoid(),
                answer: incorrectAnswers[i]
            })
        }

        answersArray.splice(randomPosition, 0, { id: nanoid(), answer: correctAnswer })

        setAnswers(answersArray)
    }, [])

    useEffect(() => {
        if (props.isChecked){
            if (selectedAnswer === correctAnswer) {
                props.setCountChecked(prevState => prevState + 1)
            }
        }
        else{
            props.setCountChecked(0)
        }
    }, [props.isChecked])


    function handleChange(e) {
        setSelectedAnswer(e.target.value)
    }


    const style_correct_answer = {
        background: 'lightgreen',
        border: 'none'
    }

    const style_wrong_answer = {
        background: 'pink',
        border: 'none'
    }

    function useStyle(answer) {
        if (props.isChecked) {
            if (answer === selectedAnswer) {
                if (answer !== correctAnswer) {
                    return style_wrong_answer
                }
            }

            if (answer === correctAnswer) {
                return style_correct_answer
            }

            else {
                return {}
            }
        }
        else {
            return {}
        }
    }



    const liItems = answers.map(answer => {

        return (
            <li key={answer.id}>
                <input
                    type="radio"
                    name={`answer_${props.item.id}`}
                    id={`answer_${answer.id}`}
                    onChange={handleChange}
                    value={answer.answer}
                    checked={answer.answer === selectedAnswer}
                />
                <label
                    htmlFor={`answer_${answer.id}`}
                    style={useStyle(answer.answer)}
                >
                    {he.decode(answer.answer)}
                </label>
            </li>
        )
    }
    )

    return (
        <div className='question'>
            <h2>{he.decode(props.item.question)}</h2>
            <ul className='answers'>
                {liItems}
            </ul>
        </div>
    )
}

export default Question