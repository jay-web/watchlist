
import  { createContext, useContext, useState } from "react";

import { useFetchMovie } from "../hooks/useFetchMovie";
import { IMovie } from "../types";



type ContextType = {
  query: string,
  movies: IMovie[] | undefined | null,
  error: Error | null,
  isLoading: boolean,
  setQuery: React.Dispatch<React.SetStateAction<string>>
  
} 

const initialState:ContextType = {
  query:"",
  movies: undefined,
  error: null,
  isLoading: false,
  setQuery: () => null

}

const MoviesContext = createContext<ContextType>(initialState);

interface MoviesProviderProps {
  query?:string,
  children?: React.ReactNode
}

export const MoviesProvider = ({children}: MoviesProviderProps) => {
   const [query, setQuery ]  = useState("harry potter");
   const { movies, error, isLoading } = useFetchMovie(query);
  //  const [ watched, setWatched ]= useLocalStorage();

  return (
    <MoviesContext.Provider value={{query,movies, error, isLoading, setQuery}} >
      {children}
    </MoviesContext.Provider>
  )

}

export const useMoviesContext = () => useContext(MoviesContext);