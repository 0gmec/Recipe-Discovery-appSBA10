import { useState } from 'react'
import ApiFetcher from './components/ApiFetcher'
import { useFetchData } from './components/Utils/useFetchData'
import { Routes, Route, } from 'react-router-dom'
import { FavoritesProvider } from './components/Context/FavoritesContext'
import { Link } from 'react-router-dom'
// import {useLocalStorage} from './components/Utils/useLocalStorage'
import './App.css'

const HomePage = () => <h4>Home Page</h4>
const Category = () => <h4>Category</h4>
const RecipeDetails = () => <h2>Recipe Details</h2>
const Favorites = () => <h2>Favorites</h2>

function App() {
  const { data, loading, error } = useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/category/:categoryName">Category</Link></li>
            <li><Link to="/recipe/:recipeId">Recipe Details</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>

          </ul>
          <div class="searchbar">
            <input type="text" placeholder="Search.." />
            <button type="submit">Search</button>
          </div>
        </nav>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>


        <h2>Recipe Discovery App</h2>

        <ApiFetcher />

      </div>

    </>
  )
}

export default App
