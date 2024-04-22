
import  { createContext, useContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

import { IWatchlist} from "../types";
import { IAction } from "../hooks/reducer";


type ContextType = {
  watchlist: IWatchlist,
  setWatchlist: React.Dispatch<IAction>,
  queryInWatchlist: string,
  // filter: IMovie[],
  setQueryInWatchlist: React.Dispatch<React.SetStateAction<string>>
  

  
} 

const initialState:ContextType = {
  queryInWatchlist: "",
  // filter: [],
  watchlist: [],
  setWatchlist: () => null,
  setQueryInWatchlist: () => null
 

}

const WatchedContext = createContext<ContextType>(initialState);

interface WatchedProviderProps {
  query?:string,
  children?: React.ReactNode
}

export const WatchProvider = ({children}: WatchedProviderProps) => {
   const [ watchlist, setWatchlist ]= useLocalStorage();
   const [queryInWatchlist, setQueryInWatchlist ]  = useState("");

  //  const filter = watchlist.map((item) => item.movies.find((movie) => movie.Title?.toLowerCase() === queryInWatchlist.toLowerCase() ))


  return (
    <WatchedContext.Provider value={{watchlist, setWatchlist, queryInWatchlist, setQueryInWatchlist }} >
      {children}
    </WatchedContext.Provider>
  )

}

export const useWatchedContext = () => useContext(WatchedContext);