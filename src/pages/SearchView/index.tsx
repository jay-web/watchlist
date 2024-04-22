import { Outlet } from "react-router-dom";

import Header from "../../components/Header";

import { BsBookmarkPlusFill } from "react-icons/bs";
import SearchBar from "../../components/SearchBar";

import { SearchViewStyle, StyledInstruction, StyledOutlet, StyledSpan } from "./style";
import Button from "../../ui/Button";
import { useMoviesContext } from "../../context/movies";


const SearchView = () => {
  const {query, setQuery} = useMoviesContext();

  return (
    <SearchViewStyle>
      <Header>
        <h2>
          Welcome to <StyledSpan>Watchlists</StyledSpan>
        </h2>
        <StyledInstruction>
          <p>
            Browse movies, add them to watchlists and share them with friends.
          </p>
          <p>
            Just click the <BsBookmarkPlusFill size="2rem" /> to add a movie, or click on
            the poster to see more details.
          </p>
        </StyledInstruction>
      </Header>
      <SearchBar query={query} setQuery={setQuery} navigatePath="/">
        <Button type="submit"> Search</Button>
      </SearchBar>
     <StyledOutlet>
     <Outlet />
     </StyledOutlet>
     
   
    </SearchViewStyle>
  );
};

export default SearchView;
