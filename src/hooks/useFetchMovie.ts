import { useQuery } from "@tanstack/react-query";
import { getMovieById, getMovies } from "../services/api";


export function useFetchMovie(query:string){
  const {data: movies, error, isLoading } = useQuery({
    queryKey: [query],
    queryFn: () => getMovies(query),
    retry: 2
  });

    return {movies, error, isLoading }
}

export function useFetchMovieById(id:string){
  const {data: movie, error, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => getMovieById(id),
    retry: 2
  });

    return {movie, error, isLoading }
}