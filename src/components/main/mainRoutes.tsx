import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../login/login';

class MainRoutes extends React.Component<{}> {
  constructor() {
    super({});
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    )
  }
}

export default MainRoutes;
