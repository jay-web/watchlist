import Header from "../../components/Header";

import StyledListView, { StyledInstruction, Styledh3 } from "./style";

import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { Outlet } from "react-router-dom";

const ListView = () => {
  return (
    <StyledListView>
      <Header>
        <h2>Movies by Watchlists</h2>
        <StyledInstruction>
          <Styledh3>About this watchlist</Styledh3>
          <p>
            Click the <FaCheck /> to mark the movie as watched, or click the{" "}
            <MdDeleteForever size="2rem" /> to remove a movie from watchlists.
          </p>
        </StyledInstruction>
      </Header>

      <Outlet />
    </StyledListView>
  );
};

export default ListView;
