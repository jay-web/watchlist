

export interface IMovie {
  imdbID?: string,
  Title?: string,
  Year?: string,
  Poster?: string,
  runtime?: number,
  imdbRating?: number,
  userRating?: number,
  Type?:string,
  Released?: string,
  Actors?: string,
  Director?: string,
  Genre?: string,
  Runtime?: string,
  Plot?:string,
  watchedByYou?: boolean,
  playlist?: string
}


export interface IWatchedMovie {
  imdbID?: string,
  Poster?: string,
  Title?: string,
  Year?: string,
  imdbRating?: number,
  runtime?: number,
  userRating?: string
}


export type Playlist = {
    name:string,
    movies:IMovie[]
} 


export type IWatchlist = Playlist[]

  export interface ModalProps {
    children: React.ReactNode;
    preOpen:boolean
    
  }
  
  export interface ContextType {
    isOpen:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
  }
  
  export interface ButtonProps {
    children: JSX.Element;
    // opens: boolean;
  }
  
  export interface WindowProps {
    children: JSX.Element;
    outsideTouch: boolean

  }