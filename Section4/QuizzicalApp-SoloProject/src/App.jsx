import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Questions from './components/Questions'
import axios from 'axios'
import { nanoid } from 'nanoid'

function App() {

  const [currentPage, setCurrentPage] = useState('main')
  const [apiData, setApiData] = useState([])

  console.log(currentPage)

  function newQuestionsArray() {
    axios.get(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(res => {
        const data = res.data.results

        setApiData(data.map(item => ({
          id: nanoid(),
          ...item
        })))

      })
      .catch(() => {

      })
  }


  function handleClick() {
    setCurrentPage('questions')
  }

  newQuestionsArray()

  return (
    <>
      {currentPage === 'main' ? <Main handleClick={handleClick} /> :
        <Questions
          data={apiData}
          setCurrentPage={setCurrentPage}
          setNewData={newQuestionsArray}
        />}
    </>
  )
}

export default App
