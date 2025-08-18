import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../Utils/useLocalStorage";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', [])
    const [recipeId, setRecipeId] = useState('')


    const addFavorites = () => {
        if (recipeId.trim() !== '')
            setFavorites([...favorites, { recipeId }])
        setRecipeId('')


    }

    const removeFavorites = (favoritesToRemove) => {
        const newFavorites = favorites.filter(({ favorite }) => favorite !== favoritesToRemove)
        setFavorites(newFavorites)
    }

    const handleChange = (e) => {
        setRecipeId(e.target.value)
    }

  

   

    return (
        <div>

            <FavoritesContext.Provider value={[favorites, setFavorites, recipeId, setRecipeId]}>
                {children}
                <ul>
                    {favorites.map((favorites, index) => (
                        <li key={index}>
                            <span>{favorites.text}</span>
                            <button onClick={removeFavorites}>Remove</button>

                        </li>
                    ))}
                </ul>
                <input type="text" value={recipeId} onChange={handleChange} />
                <button onClick={addFavorites}>Add</button>
            </FavoritesContext.Provider>
        </div>

    )

}