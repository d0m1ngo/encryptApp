import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Page from '../Page/Page'
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
