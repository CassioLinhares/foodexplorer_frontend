import { createContext, useContext, useState } from "react";

const searchContext = createContext();

export function SearchProvider({ children }) {
    const [search, setSearch] = useState("");

    return (
        <searchContext.Provider value={ {search, setSearch} }>
            { children }
        </searchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(searchContext);
    return context;
}