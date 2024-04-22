import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MoviesList from "./components/MoviesList";

import GlobalStyle from "./styles/globalStyle";

import ListView from "./pages/ListView";
import SearchView from "./pages/SearchView";
import MovieDetails from "./components/MovieDetails";
import AppLayout from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { MoviesProvider } from "./context/movies";
import Auth from "./components/Auth";

import { WatchProvider } from "./context/watched";
import Playlist from "./components/Playlist";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000, // ! 1 hour stale time
    },
  },
});

function App() {
 

  return (
    <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools  initialIsOpen={false} />  */}
      <GlobalStyle />

      <MoviesProvider>
        <WatchProvider>
          <BrowserRouter basename="/">
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<SearchView />}>
                  <Route path="" element={<MoviesList />} />
                  <Route path="/:id" element={<MovieDetails />} />
                  
                </Route>
                <Route path="/list/:playlistname" element={<ListView />} >
                  
                  <Route path="" element={<Playlist />} />
                </Route>
              </Route>
              <Route path="/login" element={<Auth />} />
            </Routes>
          </BrowserRouter>
        </WatchProvider>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;
