import { Outlet } from "react-router-dom";
import MainSection from "../MainSection";
import SideBar from "../SideBar";
import StyledMain from "./style";

import ProtectedRoute from "../Auth/protectedRoute";
import TopBar from "../TopBar";

const AppLayout = () => {


  return (
    <ProtectedRoute>
      <StyledMain>
        <SideBar />
        <TopBar />
        <MainSection>
          <Outlet />
        </MainSection>
      </StyledMain>
    </ProtectedRoute>
  );
};
export default AppLayout;
