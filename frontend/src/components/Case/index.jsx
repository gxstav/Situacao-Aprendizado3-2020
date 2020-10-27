import React from 'react'
import './style.css';
import { Descriptions, Progress, Button, Tabs, Statistic, Row, Col, Card  } from 'antd';
import { RiseOutlined, LikeOutlined} from '@ant-design/icons'
import banner3 from '../../assets/images/banner3.png'
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const { TabPane } = Tabs;

function Case (){
    function onFinish() {
        console.log('finished!');
      }

    function callback(key) {
        console.log(key);
      }
    return(
    <div id="container">
             <div >
                <img src = {banner3} alt=""  className="bannercase" />
            </div>
            <h1 className="titleproject">NOME DO PROJETO</h1>
            <Tabs defaultActiveKey="1" onChange={callback}>
                
                <TabPane tab="SOBRE O PROJETO" key="1" className="tabsTitle">
                <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
            </Descriptions>
                </TabPane>
                <TabPane tab="INFORMAÇÕES DE CONTATO" key="2" className="tabsTitle">
                <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
            </Descriptions>
                </TabPane>
            </Tabs>
            <div className="CardStatistic">
                <Row gutter={16}>
                <Col span={8}>
                    <Card title="Curtidas" bordered={false}>
                    <Statistic value={1128} prefix={<LikeOutlined />} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="O projeto será finalizado em" bordered={false}>
                         <Countdown value={deadline} onFinish={onFinish} />
                    </Card>
                </Col>
                </Row>
            </div>
            <div className="buttons">
                    <Button type="primary" className="HelpButton">Quero ajudar</Button>
                    <Button type="primary" className="VoluntaryButton">Quero me voluntariar</Button> 
            </div>
    </div>

    )
}
export default Case;

