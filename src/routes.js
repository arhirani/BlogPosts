import React from 'react';
//import { Blogs } from './components/Blogs';
const Blogs = React.lazy(() => import('./components/Blogs'));
const Blog = React.lazy(() => import('./components/Blog'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/blogs/:id', exact: true, name: 'Blogs', component: Blogs },
  { path: '/blogs/:id/:postId', exact: true, name: 'post', component: Blog}

];

export default routes;
