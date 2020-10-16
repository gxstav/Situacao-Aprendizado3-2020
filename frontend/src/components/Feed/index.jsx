import React from 'react'
import { Layout, Descriptions, Tag, Button, Row, Col } from 'antd';
import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import imagemcaso from '../../assets/images/imagemcaso.png'
import './style.css';
const { Content } = Layout;

function feed() {
    return(
        <Layout>
            <Content>
            <div id="container">
            <div className="contentgroup">
                <div className = "imageico">
                    <img src = {imagemcaso} alt=""/>
                   </div> 
                <div className ="contentcase">
                    <p>        
                    <Tag>Refeição</Tag>
                    <Tag>Financeiro</Tag>
                    <Tag>Doações</Tag> </p>
                    <Descriptions title="Nome do projeto">   
                    
                    <Descriptions.Item>Lorem ipsum dolor sit amet. Nulla suscipit scelerisque velit. imperdiet bibendum,  tincidunt nibh, sed rutrum metus sem at ligula. Quisque vel sagittis nulla, et ullamcorper metus. Fusce at congue lacus. Maecenas fermentum libero pellentesque libero efficitur molestie. Aliquam pretium mauris Donec non ultricies mi, sit amet molestie lorem.</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
                    <div className="groupbuttons">
                        <div className="share">
                            <ShareAltOutlined />
                        </div>
                        <div className="like">
                            <LikeOutlined /></div>
                        <div className="buttonsproject">
                            <Button type="primary">Saber Mais</Button>
                        </div>     
                    </div>        
                
            </div>
            </Content>
        </Layout>
    )
}
export default feed;