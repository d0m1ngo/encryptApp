import React from "react";
// import Sidebar from "../../containers/SidebarContainer";
import Page from "../components/Page/Page";
import Sidebar from "../components/Sidebar/Sidebar";

const MainPage = props => {
  return (
    <React.Fragment>
      <Sidebar data={props.sidebarData} />
      <Page />
    </React.Fragment>
  );
};

export default MainPage;
