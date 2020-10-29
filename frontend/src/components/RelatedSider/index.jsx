import React from 'react'
import './style.css';
import { Layout, Row, Col } from 'antd';


function Relacionados (){
    return(
        <Layout id="contentSider">
            <Row>
                <Col span={8} className="imageRelated">
    
                </Col>
                <Col span={16} className="textRelated">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris in quam quis lorem interdum porta.</p>
                </Col>
            </Row>
        </Layout>
    )
}
export default Relacionados;