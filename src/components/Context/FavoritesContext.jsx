import { createContext } from "react";
import useLocalStorage from "../Utils/useLocalStorage";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites]= useLocalStorage('favorites', [])

addFavorites,
removeFavorites,
existingFavorites

    addFavorites=()=>  {
        setFavorites(prev)
       
        
    }

    function removeFavorites() {

    }

    function existingFavorites() {

    }

return (
    <div>
        <h2>Favorite Recipe</h2>
     <FavoritesContext.Provider>
        {children}
     </FavoritesContext.Provider>
    </div>
   
)

}