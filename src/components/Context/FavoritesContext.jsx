import { createContext } from "react";
import useLocalStorage from "../Utils/useLocalStorage";

export const FavoritesContext = createContext({favorites: [],
}) 



export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites]= useLocalStorage([])

addFavorites,
removeFavorites,
existingFavorites

    function addFavorites() {

        addFavorites
        
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