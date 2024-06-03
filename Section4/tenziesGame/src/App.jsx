import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function newDice(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice(){
    let diesArray = []
    for (let i=0; i<10; i++){
      diesArray.push(newDice())
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

  const dices = dice.map(die => <Die 
                                  key={die.id}
                                  value={die.value} 
                                  isHeld={die.isHeld}
                                  holdDice={() => holdDice(die.id)}
                                />)

  function rollDice(){
    setDice(prevDice => prevDice.map(die => (
      die.isHeld ?
      die
      :
      newDice()
    )))
  }

  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dies">
        {dices}
      </div>

      <button className='newRoll' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
