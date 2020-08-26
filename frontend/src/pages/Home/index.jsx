import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
//
// PODE IMPORTAR LOGOS, SVG, COMPONENTES AQUI
//
//

function Home(){

  return (
    <div id="homePage">
      <Navbar />
      <Carousel />
    </div>
  )
}

export default Home;