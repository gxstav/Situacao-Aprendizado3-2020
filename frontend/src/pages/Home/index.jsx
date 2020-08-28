import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import { Row, Col } from 'antd';
//
// PODE IMPORTAR LOGOS, SVG, COMPONENTES AQUI
//

function Home(){

  return (
    <div id="homePage">
      <Navbar />
      <Carousel />
      <Row>
        <Col span={16}>
          <div id='feedstyle'>
            <h1>Projetos aqui</h1>
            <hr />
            <Feed />
          </div>
        </Col>
        <Col span={8}>
          <div id='filter'>
            <h1>filtro aqui</h1>
          </div>
        </Col>
      </Row>
    <Footer />
    </div>
  )
}
export default Home;