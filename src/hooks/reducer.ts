
import { IMovie, IWatchlist } from "../types";


export interface IAction {
    type: string;
    payload: {
        name:string,
        movie?:IMovie
    }
}


export const reducer: React.Reducer<IWatchlist, IAction> = (state = [], action) =>{
  
    switch(action.type){
        case "watchlist/add": {
          
        
            let temp =  state.map((item ) => {
                if(item.name == action.payload?.name){
                    let newMovie = action.payload.movie;
                    newMovie!.playlist = action.payload?.name;
                    item?.movies.push(action.payload?.movie!);
           
                }
                return item;
            });
            return temp;
        }
        case "watchlist/delete": {
            let movieToDelete = action.payload.movie;
            let temp = [...state];
            temp =  temp.map((item ) => {
                if(item.name == action.payload.name){
                    let findMovieIndex = item.movies.findIndex((item) => item.imdbID == movieToDelete?.imdbID)
                    item?.movies.splice(findMovieIndex, 1);
                }
                return item;
            });
            return temp;
        }
        case "watchlist/addPlaylist": {
            let playlistToAdd = {
                name:action.payload?.name,
                movies:[]
            }
            
            return [...state, playlistToAdd];
        }
        case "watchlist/deletePlaylist": {
            let temp = [...state];
            let indexOfPlaylist = temp.findIndex((item) => item.name === action.payload.name);
            temp.splice(indexOfPlaylist, 1);
            
            return temp;
        }
        case "watchlist/markWatched": {
            let movieToMarked = action.payload.movie;
            let temp = [...state];
            temp =  temp.map((item ) => {
                if(item.name == action.payload.name){
                    let findMovieIndex = item.movies.findIndex((item) => item.imdbID == movieToMarked?.imdbID)
                    item.movies[findMovieIndex].watchedByYou = true;
                }
                return item;
            });
            return temp;
        }

        default:{
            return state;
        }
    }
}

export const addPlaylist =(name:string) => {
    return {
        type: "watchlist/addPlaylist",
        payload: { name, movie: {}}
    }
}

export const deletePlaylist =(name:string) => {
    return {
        type: "watchlist/deletePlaylist",
        payload: { name }
    }
}



export const addMovie = (name:string, movie:IMovie) => {
    return {
        type: "watchlist/add",
        payload: { name, movie}
    }
}   

export const deleteMovie = (name:string, movie:IMovie) => {
    return {
        type: "watchlist/delete",
        payload: { name, movie}
    }
}  


export const markedWatched = (movie:IMovie) => {
    return {
        type:"watchlist/markWatched",
        payload: {name: movie.playlist!, movie}
    }
}