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
  const [numberOfRolls, setNumberOfRolls] = useState(0)
  const [startTime, setStartTime] = useState(new Date())


  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true)
    const firstDieValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstDieValue)

    if (allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  useEffect(() => {
    if (tenzies){
      const elapsedTime = new Date() - startTime
      const currentTime = Math.floor(elapsedTime/1000)
      // localStorage.setItem('bestTime', Math.floor(elapsedTime/1000))
      console.log(Math.floor(elapsedTime/1000))

      setStartTime(new Date())

      const bestScore = localStorage.getItem('bestScore')
      const bestTime = localStorage.getItem('bestTime')

      bestScore ? numberOfRolls < bestScore && localStorage.setItem('bestScore', numberOfRolls) : localStorage.setItem('bestScore', numberOfRolls)

      bestTime ? currentTime < bestTime && localStorage.setItem('bestTime', currentTime) : localStorage.setItem('bestTime', currentTime)

    }
  }, [tenzies])

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
    if (!tenzies){
      setDice(prevDice => prevDice.map(die => (
        die.isHeld ?
        die
        :
        newDie()
      )))
      setNumberOfRolls(prevState => prevState+1)
    }
    else{
      setDice(allNewDice())
      setTenzies(false)
      
      setNumberOfRolls(0)
    }
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

      <div className="scores">
        <p>Score: {numberOfRolls}</p>
        <p>Best Score: {localStorage.getItem('bestScore') ? localStorage.getItem('bestScore') : 0}</p>
        <p>Best Time: {localStorage.getItem('bestTime') ? localStorage.getItem('bestTime') : 0} sec</p>
      </div>
    </main>
  )
}

export default App
