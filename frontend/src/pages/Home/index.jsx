import React, { useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import { Row, Col, BackTop, Pagination  } from 'antd';
import { DownCircleOutlined, UpOutlined  } from '@ant-design/icons'

function Home(){

  const [ pagina , setPagina ] = useState(0)

  function handlerPagination(page){
    setPagina(page)
  }

  console.log(pagina)

  return (
    <div id="homePage">
      <Navbar />          
      <Carousel />      
      <Row>
        <Col span={16} className="containerfeed">
          <div className ='group'>
            <h2 className="titlepage">
            <DownCircleOutlined /> ÚLTIMOS PROJETOS </h2>
            <div className="buttonproject">
            </div>                                
          </div>
          <hr />
          <BackTop>
            <div className="backtopstyle"><UpOutlined /></div>
          </BackTop>
          <div>
            <Feed />
          </div>  
          <div className="pagestep">
            <Pagination defaultCurrent={pagina} onChange={handlerPagination} total={1000} />
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