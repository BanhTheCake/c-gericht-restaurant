import { Header, AboutUs, Menu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container'
import { Navbar } from './components' 
import './App.scss';
import React, { Suspense, useCallback, useEffect, useState } from 'react';



function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
