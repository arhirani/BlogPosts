import React, { useState, Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import DisplayUsers from "./components/Users";
import DisplayBlogs from "./components/Blogs";
import routes from './routes';

const App = () => {

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <HashRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home" render={props => <DisplayUsers {...props} />} />
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
    // <DisplayBlogs />
  )
}

export default App;
