import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <div className='text-red-500'>Hello</div>
      <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </>
  )
}

export default App