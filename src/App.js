import React, { useState, Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import DisplayUsers from "./components/Users";
import DisplayBlogs from "./components/Blogs";

const App = () => {
  
  return(
    <DisplayUsers />
    // <DisplayBlogs />
  )
}

export default App;
