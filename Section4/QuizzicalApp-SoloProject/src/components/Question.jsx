import React from 'react'
import { nanoid } from 'nanoid'
import he from 'he';
function Question(props) {

    const incorrectAnswers = props.item.incorrect_answers
    const correctAnswer = props.item.correct_answer
    const randomPosition = Math.floor(Math.random() * 3)

    let answersArray = []
    for (let i = 0; i < incorrectAnswers.length; i++) {
        answersArray.push({
            id: nanoid(),
            answer: incorrectAnswers[i]
        })
    }

    answersArray.splice(randomPosition, 0, { id: nanoid(), answer: correctAnswer })

    const liItems = answersArray.map(answer => (
        <li key={answer.id}>
            <input type="radio" name={`answer_${props.item.id}`} id={`answer_${answer.id}`}/>
            <label htmlFor={`answer_${answer.id}`}>
                {he.decode(answer.answer)}
            </label>
        </li>
    ))

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