import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import { Row, Col, Button, BackTop, Pagination   } from 'antd';
import { DownCircleOutlined, PlusOutlined  } from '@ant-design/icons'



function Home(){

  return (
    <div id="homePage">
      <Navbar />
      <Carousel />
        <Row>
          <Col span={16} className="containerfeed">
            <div className ='group'>
              <h2 className="titlepage">   <DownCircleOutlined /> ÚLTIMOS PROJETOS </h2>
            <div className="buttonproject">
              <Button type="primary"><PlusOutlined />Novo projeto</Button>
            </div>
            </div>
            <hr />
      <BackTop>
          <div className="backtopstyle">UP</div>
      </BackTop>
      <div>
        <Feed />
        <Feed />
        <Feed /> 
        <Pagination defaultCurrent={1} total={1000} />
      </div>
      </Col>
        <Col span={8} className="containerfilter">
          <div className="buttonsfilter">
        <Filter />
      </div>
        </Col>
       </Row>
    <Footer />
 
    </div>
   
  )
}
export default Home;