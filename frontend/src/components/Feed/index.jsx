import React from 'react'
import { Layout, Descriptions, Tabs, Statistic, Button } from 'antd';
import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import './style.css';
const { Content } = Layout;
const { TabPane } = Tabs;


function feed() {
    return(
        <Layout>
            <Content> 
            <div id="container">
             {/* <div >
                <img src = {imagemcaso} alt="" className="imagecase"/>
            </div> */}
            <Tabs defaultActiveKey="1">

                <TabPane tab="Descrição" key="1">
                    <Descriptions title="NOME DO PROJETO">
                        <Descriptions.Item label="Projeto">Pata voluntária</Descriptions.Item>
                        <Descriptions.Item label="Descrição">
                        O projeto tem como objetivo arrecadar 100kg de ração.
                        </Descriptions.Item> 
                    </Descriptions>
                </TabPane>
                <TabPane tab="Informações" key="2">
                    <Descriptions.Item label="Contato">(48) 9685-4586</Descriptions.Item>
                    <Descriptions.Item label="Local">São paulo, Brasil</Descriptions.Item>
                </TabPane>
                <TabPane tab="Metas" key="3">
                    <Statistic title="Quantas pessoas curtiram esse projeto?" value={1128} prefix={<LikeOutlined />} />
                </TabPane>
            </Tabs>
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