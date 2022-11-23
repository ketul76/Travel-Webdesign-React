import React from 'react';
import Header from './Header';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Forms from './Forms';

function Layout() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Blog/>
      <Forms/>
    </>
  );
}

export default Layout;