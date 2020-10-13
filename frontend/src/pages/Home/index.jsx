import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import { Row, Col, Typography, Button, BackTop, Pagination   } from 'antd';
import { FireOutlined } from '@ant-design/icons'

const { Title } = Typography;

function Home(){

  return (
    <div id="homePage">
      <Navbar />
        <Carousel />
          <Row>
            <Col span={16} className="containerfeed">
              <div className ='group'>
              <div className="titlepage">
                <Title level={2}> <FireOutlined /> ÚLTIMOS PROJETOS</Title>
              </div>
              <div className="buttonproject">
                <Button type="primary">Novo projeto</Button>
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
              <div>
                <Filter />
              </div>
            </Col>
          </Row>
    <Footer />
 
    </div>
   
  )
}
export default Home;