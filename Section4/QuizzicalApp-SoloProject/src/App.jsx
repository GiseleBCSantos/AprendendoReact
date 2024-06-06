import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Questions from './components/Questions'
import Answers from './components/Answers'
import axios from 'axios'
import { nanoid } from 'nanoid'

function App() {

  const [currentPage, setCurrentPage] = useState('main')
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(res => {
        setApiData(res.data.results);

        setApiData(prevState => prevState.map(item => ({
          id: nanoid(),
          ...item
        })))

      })
      .catch(() => {
      })
  }, [])

  
  function handleClick(){
    setCurrentPage('questions')
    document.getElementById('main').style.display = 'none'
    document.getElementById('questions').style.display = 'flex'
  }



  return (
    <>
      <Main handleClick={handleClick}/>
      <Questions data={apiData} />
    </>
  )
}

export default App
