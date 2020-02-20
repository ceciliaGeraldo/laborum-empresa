import React from 'react';
import './Content.css';
import CreateJobAnnouncement from '../../views/CreateJobAnnouncement';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Content = () => {
  return (
    <div className="col-8 container">
      <div>
          <Switch>
            <Route exact path="/crear-aviso" component={CreateJobAnnouncement} />
          </Switch>
      </div>
    </div>
  );
};

export default Content;
