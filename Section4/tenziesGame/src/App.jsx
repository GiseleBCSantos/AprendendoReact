import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true)
    const firstDieValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstDieValue)

    if (allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  function newDie(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice(){
    let diesArray = []
    for (let i=0; i<10; i++){
      diesArray.push(newDie())
    }

    return diesArray
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => (
      die.id === id ?
      {
        ...die,
        isHeld: !die.isHeld
      }
      :
      die
    )))
  }

  
  function rollDice(){
    setDice(prevDice => prevDice.map(die => (
      die.isHeld ?
      die
      :
      newDie()
    )))
  }

  const dices = dice.map(die => <Die 
                                  key={die.id}
                                  value={die.value} 
                                  isHeld={die.isHeld}
                                  holdDice={() => holdDice(die.id)}
                                />)

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dies">
        {dices}
      </div>

      <button className='newRoll' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  )
}

export default App
