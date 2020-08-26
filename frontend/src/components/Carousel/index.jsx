import React from 'react'
import { Layout, Carousel } from 'antd';
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import './style.css';

const { Content } = Layout;

const contentStyle = {
    height: '280px',
    color: '#fff',
    lineHeight: '280px',
    textAlign: 'center',
    background: '#364d79',
  };

function carousel (){
    return(
    <Layout>
      <Content id="content">
      <Carousel autoplay >
            <div >
                <img src = {banner1} alt="" style={contentStyle}/>
            </div>
            <div >
                <img src = {banner2} alt="" style={contentStyle}/>
            </div>
            <div >
                <img src = {banner3} alt=""style={contentStyle}/>
            </div>
            <div >
                <img src = {banner2} alt=""style={contentStyle}/>
            </div>
  </Carousel>
        </Content>
    
    </Layout>

    )}
export default carousel;