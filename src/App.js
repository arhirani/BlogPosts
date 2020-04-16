import React, { useState, Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import DisplayUsers from "./components/Users";
import routes from './routes';

const App = (props) => {
  console.log(props);
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  return (
    <HashRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home" component={DisplayUsers} />
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            ) : (null);
          })}
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default App;
