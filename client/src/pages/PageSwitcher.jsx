import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPageContainer from '../containers/MainPageContainer';
import DetailsPage from './DetailsPage';


const PageSwitch = () => (
  <Switch>
    <Route exact path="/details" component={DetailsPage} />
    <Route path="/" component={MainPageContainer} />
  </Switch>
);

export default PageSwitch;
