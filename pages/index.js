import React from 'react';

import Navbar from '../partials/navBar';
import HelloWorld from '../components/helloWorld';

import '../styles/index.scss';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <HelloWorld name="Younes" />
    </div>
  );
}

export default Home;
