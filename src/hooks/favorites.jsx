//usar context = envolver as rotas
import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem("@foodexplorer:favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("@foodexplorer:favorites", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const { favorites, setFavorites } = useContext(FavoritesContext);
    
    function addFavorite(newFavorite) {
        let newList = [...favorites];
        const repeatedFavorite = favorites.some(item => item.id === newFavorite.id);

        if (!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorites(newList);
        }

        // remove list items repeated in the click
        newList = favorites.filter(item => item.id !== newFavorite.id);
        return setFavorites(newList);
    }

    return {
        favorites,
        addFavorite
    }
}


// .some() = verifica em uma lista de array se a ocorrencia aparece pelo menos uma vez