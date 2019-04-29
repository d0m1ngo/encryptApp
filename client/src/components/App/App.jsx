import React from 'react';
import Sidebar from '../../containers/SidebarContainer';
import Page from '../../containers/PageContainer'
import './App.css';

const App = () => {
    return (
      <div className="app grid">
          <React.Fragment>
            <Sidebar></Sidebar>
            <Page></Page>
          </React.Fragment>
      </div>
    );
}




export default App;
