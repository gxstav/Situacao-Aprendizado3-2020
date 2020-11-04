import React, { useEffect } from 'react';
import './style.css';
import { Descriptions, Tag, Button, Tabs, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import banner3 from '../../assets/images/banner3.png';
import api from '../../services/api';

const { TabPane } = Tabs;
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; 

function onFinish() {
  console.log('finished!');
}


function Case (props){

    const { id } = props

    async function fetchData() {
        await api.get(`/caso/${id}`)
    }

    useEffect(() => {
        
    })
    
    return(
    <div id="container">
        <div >
            <img src={banner3} alt="Banner"  className="bannercase" />
        </div>
        <h2 className="titleproject"><strong>NOME DO PROJETO</strong></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="SOBRE O PROJETO" key="1" className="tabsTitle">
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Projeto por:">Nome da ONG</Descriptions.Item> 
                        <Descriptions.Item label="Tipo de ajuda:"><Tag>Financeira</Tag><Tag>Voluntária</Tag><Tag>Divulgação</Tag></Descriptions.Item>
                        <Descriptions.Item label="Segmento:"> <Tag>Alimentação</Tag> <Tag>Outros</Tag></Descriptions.Item>
                        <Descriptions.Item label="Descrição do projeto:"span={3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat risus bibendum justo dictum molestie. Pellentesque ac ornare velit. Mauris in quam quis lorem interdum porta. In laoreet vehicula magna eu condimentum. Praesent vel nisi dictum, fringilla elit et, dictum libero. Morbi vel justo vulputate risus vulputate finibus quis sed sapien. Donec lobortis nulla sit amet tempor tincidunt. Aenean pharetra libero eget erat placerat, vitae tempus ipsum pharetra. Aliquam in ante vel magna commodo hendrerit. Praesent gravida augue eu odio tempor pulvinar.
                        </Descriptions.Item>
                    </Descriptions>
                </TabPane>
                <TabPane tab="INFORMAÇÕES DE CONTATO" key="2" className="tabsTitle">
                    <Descriptions  layout="vertical" bordered>
                        <Descriptions.Item label="Site:">www.sitedaong.com</Descriptions.Item>
                        <Descriptions.Item label="Celular:">(48) 99116-4858</Descriptions.Item>
                        <Descriptions.Item label="E-mail:">e-mail@ong.com</Descriptions.Item>
                        <Descriptions.Item label="Endereço:" span={2}>
                        Rodovia, SC-401, 3730 - Saco Grande, Florianópolis - SC, 88032-005
                        </Descriptions.Item>
                        <Descriptions.Item label="UF">SC</Descriptions.Item>
                    </Descriptions>
                </TabPane>
            </Tabs>
        <div className="LikeButtonsGroup">
            <Statistic title="Curtidas" className="LikeContent" value={1128} prefix={<LikeOutlined />} />
        <div className="buttons">
            <Button type="primary" className="HelpButton">Quero doar</Button>
            <Button type="primary" className="VoluntaryButton">Quero me voluntariar</Button> 
        </div>
        </div>
    </div>
    )
}
export default Case;

