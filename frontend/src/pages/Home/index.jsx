import React, { useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Drawer from '../../components/Drawer'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import { Row, Col, Button, BackTop, Pagination,  } from 'antd';
import { DownCircleOutlined, PlusOutlined, UpOutlined  } from '@ant-design/icons'
import drawer from '../../components/Drawer';



function Home(){

  const [count, setCount] = useState()     
    
      function showDrawer(){
        setCount(drawer)
      };
      
      function onClose(){
          setCount(count)
        };



  return (
    <div id="homePage">
      <Navbar />          
      <Carousel />
      {count}      
      <Row>
        <Col span={16} className="containerfeed">
          <div className ='group'>
            <h2 className="titlepage">   <DownCircleOutlined /> ÚLTIMOS PROJETOS </h2>
            <div className="buttonproject">
              <Button type="primary" onClick={showDrawer}><PlusOutlined />Novo projeto</Button>
            </div>                                
          </div>
          <hr />
          <BackTop>
            <div className="backtopstyle"><UpOutlined /></div>
          </BackTop>
          <div>
            <Feed />
            <Feed />
            <Feed />
          </div>  
          <div className="pagestep">
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