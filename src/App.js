import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";

import { pages } from "./data/pagesData";
import Layout from "./hoc/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navigation */}

        <Toolbar />

        {/* Pages */}

        <Layout>
          <Switch>
            {pages.map(page => (
              <Route
                path={page.path}
                component={page.component}
                key={page.name}
                exact
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
