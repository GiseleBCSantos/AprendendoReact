import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Questions from './components/Questions'
import Answers from './components/Answers'
import axios from 'axios'
import { nanoid } from 'nanoid'
import Question from './components/Question'

function App() {

  const [currentPage, setCurrentPage] = useState('main')
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    async function fetchData() {
      await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple`)
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
      fetchData()
  }, [currentPage])


  function handleClick() {
    setCurrentPage('questions')
  }

  return (
    <>
      {currentPage === 'main' ? <Main handleClick={handleClick} /> :
        <Questions 
          data={apiData} 
        />}
    </>
  )
}

export default App
