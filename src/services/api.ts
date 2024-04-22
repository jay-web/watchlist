import axios from "axios";
import { sendError } from "../utils";
import { IMovie } from "../types";


const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/`;


export const getMovies = async (query:string):Promise<IMovie[] | null> => {

    if(query == "") return null;
    try {

        const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${apiKey}`);

        if(response.data.Response == "False"){
           throw Error(response.data.Error);
        }
        const data = await response.data;
        return data.Search || [];
     
  
    } catch (error: any) {
        
        return sendError(error);
    }
  };

  
export const getMovieById = async (id:string):Promise<IMovie> => {
    try {

        const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${apiKey}`);
        const data = await response.data;
        
        return data;
     
  
    } catch (error: any) {
       
        return sendError(error);
    }
  };


