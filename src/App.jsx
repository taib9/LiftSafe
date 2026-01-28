import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './lib/supabaseClient'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  // fetching data from test table in supabase when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Test') 
        .select('*')

      if (error) {
        console.error('Supabase fetch error:', error)
      } else {
        setData(data)
        console.log('Fetched data:', data)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <h2>Supabase Data:</h2>
        <ul>
          {data.map((row) => (
            <li key={row.id}>{row.name}</li>
          ))}
        </ul>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
