import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './components/Die'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice(){
    let diesArray = []
    for (let i=0; i<10; i++){
      diesArray.push(Math.ceil(Math.random() * 6))
    }

    return diesArray
  }

  const dices = dice.map(value => <Die value={value} />)

  return (
    <main>
      <div className="dies">
        {dices}
      </div>

      <button className='newRoll' onClick={() => setDice(allNewDice())}>Roll</button>
    </main>
  )
}

export default App
