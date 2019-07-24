import React from 'react';

import Navbar from '../partials/navbar';
import HelloWorld from '../components';

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
