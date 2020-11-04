import React from 'react'
import { Layout, Descriptions, Tag, Button, Row, Col } from 'antd';
import { LikeOutlined, ShareAltOutlined, SearchOutlined} from '@ant-design/icons';
import imagemcaso from '../../assets/images/imagemcaso.png'
import './style.css';

function feed() {
    return(
        <Layout>
            <div id="container">
                <Row>
                    <Col span={8}>
                        <div className = "imageico">
                            <img src = {imagemcaso} alt=""/>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className ="contentcase">
                            <Tag>Refeição</Tag>
                            <Tag>Financeiro</Tag>
                            <Tag>Doações</Tag> 
                            <Descriptions className ="TitlteFeed" title="Nome do projeto">           
                            <Descriptions.Item className="DescriptionFeed">Lorem ipsum dolor sit amet. Nulla suscipit scelerisque velit. imperdiet bibendum,  tincidunt nibh, sed rutrum metus sem at ligula. Quisque vel sagittis nulla, et ullamcorper metus. Fusce at congue lacus. Maecenas fermentum libero pellentesque libero efficitur molestie. Aliquam pretium mauris Donec non ultricies mi, sit amet molestie lorem.</Descriptions.Item>
                            </Descriptions>
                        </div>   
                    </Col>  
                </Row> 
                <br />
                <hr />
                        <div className="groupbuttons">  
                            <div className="buttonsproject">
                                <Button type="primary"><SearchOutlined /> Saber Mais</Button>
                            </div>     
                            <div className="share">
                                <ShareAltOutlined />
                            </div>
                            <div className="like">
                                <LikeOutlined />
                            </div>
                        </div>  
                       
            </div>
        </Layout>
    )
}
export default feed;