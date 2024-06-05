import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Questions from './components/Questions'
import Answers from './components/Answers'
import axios from 'axios'

function App() {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(res => {
        setApiData(res.data.results);
      })
      .catch(() => {
      })
  }, [])

  // console.log(apiData)

  return (
    <>
      <Questions data={apiData} />
    </>
  )
}

export default App
