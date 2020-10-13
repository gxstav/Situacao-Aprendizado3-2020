import React from 'react'
import { Layout, Carousel } from 'antd';
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import './style.css';

const { Content } = Layout;


function carousel (){
    return(
    <Layout>
        <Content id="content">
        <Carousel autoplay >
            <div >
                <img src = {banner1} alt=""  className="contentstyle" />
            </div>
            <div >
                <img src = {banner2} alt="" className="contentstyle"/>
            </div>
            <div >
                <img src = {banner3} alt="" className="contentstyle"/>
            </div>
            <div >
                <img src = {banner2} alt="" className="contentstyle"/>
            </div>
        </Carousel>
        </Content>
    </Layout>

    )}
export default carousel;

// colocar em um cointainer pra melhorar a visualização