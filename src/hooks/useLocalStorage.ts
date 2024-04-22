import { useEffect, useReducer} from "react";

import { useAuth } from "../context/auth";
import { IWatchlist } from "../types";
import { tempData } from "../data/staticMovieData";
import { IAction, reducer } from "./reducer";



const useLocalStorage = (): [IWatchlist, React.Dispatch<IAction>] => {
  const {user} = useAuth();
 
 
  const [state, dispatch ] = useReducer(reducer, [], () => {
    const storedValue = localStorage.getItem(user);
   
    return storedValue ? JSON.parse(storedValue) : tempData;
  });

 


  useEffect(() => {
  
    localStorage.setItem(user, JSON.stringify(state));
   
  }, [user, state]);


  return [state, dispatch];
};

export default useLocalStorage;
