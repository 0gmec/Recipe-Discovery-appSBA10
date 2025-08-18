import { createContext } from "react";
import useLocalStorage from "../Utils/useLocalStorage";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites]= useLocalStorage('favorites', [])
    const [recipeId, setRecipeId]= useState('')

addFavorites,
removeFavorites,
existingFavorites

   const addFavorites=()=>  {
    setFavorites([...favorites])
    setRecipeId('')
        
        
    }

   const  removeFavorites=()=>{
        const newFavorites = favorites.filter(({favorite})=> favorite !== favoriteToDelete)
       setFavorites(newFavorites)

    }

    function existingFavorites() {

    }

return (
    <div>
        
     <FavoritesContext.Provider value= {[favorites, setFavorites, recipeId, setRecipeId]}>
        {children}
     </FavoritesContext.Provider>
     <ul>
        {favorites.map((favorites, index) => ( 
            <li key={index}>
                <span>{favorites.text}</span>
                <button onClick={removeFavorites}>Remove</button>

            </li>
        ))}
     </ul>
     <input type="text" value={recipeId} onChange={handleChange}/>
     <button onClick={addFavorites}>Add</button>
    </div>
   
)

}