import { useState } from 'react'
import ApiFetcher from './components/ApiFetcher'
import { useFetchData } from './components/Utils/useFetchData'

import './App.css'

function App() {
  const { data, loading, error } = useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

  return (
    <>
      <div>
        <h2>Recipe Discovery App</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}


      </div>

    </>
  )
}

export default App
