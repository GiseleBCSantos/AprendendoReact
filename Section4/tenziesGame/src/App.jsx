import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = useState(allNewDice())


  function allNewDice(){
    let diesArray = []
    for (let i=0; i<10; i++){
      diesArray.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: true
      })
    }

    return diesArray
  }

  const dices = dice.map(die => <Die 
                                  key={die.id}
                                  value={die.value} 
                                  isHeld={die.isHeld}
                                />)

  function rollDice(){
    setDice(allNewDice())
  }

  return (
    <main>
      <div className="dies">
        {dices}
      </div>

      <button className='newRoll' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
