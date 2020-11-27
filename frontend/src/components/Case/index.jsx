import React, { useEffect, useState } from 'react';
import './style.css';
import { Descriptions, Tag, Button, Tabs, Statistic, Form, Input } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import api from '../../services/api';
import Voluntario from '../../components/Voluntario';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;

function Case (props){

    const { id } = props

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    async function fetchData() {
        await api.get(`/caso/${id}`)
    }

    useEffect(() => {
        
    })

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }

    const closeModal = () => {
        modalRef.current.close()
    }

    function handleVoluntario(){
        alert("Enviado")
    }
    
    return(
    <div id="container">
        <h2 className="titleproject"><strong>NOME DO PROJETO</strong></h2>
        <Tabs defaultActiveKey="1">
        <TabPane tab="SOBRE O PROJETO" key="1" className="tabsTitle">
            <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="Projeto por:">Nome da ONG</Descriptions.Item> 
                <Descriptions.Item label="Tipo de ajuda:"><Tag>Financeira</Tag><Tag>Voluntária</Tag><Tag>Divulgação</Tag></Descriptions.Item>
                <Descriptions.Item label="Segmento:"> <Tag>Alimentação</Tag><Tag>Outros</Tag></Descriptions.Item>
                <Descriptions.Item label="Descrição do projeto:"span={3}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer feugiat risus bibendum justo dictum molestie. Pellentesque ac ornare velit.
                Mauris in quam quis lorem interdum porta. In laoreet vehicula magna eu condimentum. 
                Praesent vel nisi dictum, fringilla elit et, dictum libero. Morbi vel justo vulputate 
                risus vulputate finibus quis sed sapien. Donec lobortis nulla sit amet tempor tincidunt. 
                Aenean pharetra libero eget erat placerat, vitae tempus ipsum pharetra. Aliquam in ante vel
                magna commodo hendrerit. Praesent gravida augue eu odio tempor pulvinar.
                </Descriptions.Item>
            </Descriptions>
        </TabPane>
        <TabPane tab="INFORMAÇÕES DE CONTATO" key="2" className="tabsTitle">
            <Descriptions  layout="vertical" bordered>
                <Descriptions.Item label="Site:">www.sitedaong.com</Descriptions.Item>
                <Descriptions.Item label="Celular:">(48) 99116-4858</Descriptions.Item>
                <Descriptions.Item label="E-mail:">e-mail@ong.com</Descriptions.Item>
                <Descriptions.Item label="Endereço:" span={2}> Rodovia, SC-401, 3730 - 
                    Saco Grande, Florianópolis - SC, 88032-005
                </Descriptions.Item>
                <Descriptions.Item label="UF">SC</Descriptions.Item>
            </Descriptions>
        </TabPane>
        </Tabs>
        <div className="LikeButtonsGroup">
            <Statistic title="Compartilhe!" className="ShareContent" value={1128} prefix={<ShareAltOutlined />} />
            <div className="buttons">
                <Button type="primary" className="HelpButton">Quero doar</Button>
                <Button type="primary" className="VoluntaryButton" onClick={openModal}>Quero me voluntariar</Button>
                <Voluntario ref={modalRef}>
                    <h2>Entre em Contato</h2>
                    {/* <Row>
                        <Col span={1}>
                            <Avatar id="fechar" onClick={closeModal} size={25} icon={<CloseOutlined />} />
                        </Col>
                    </Row> */}
                    <br />
                    <Form name="logar" >Email:
                        <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!' },
                            { required: true, message: 'Por favor insira seu email!' }]}>
                            <Input placeholder='exemplo@email.com' value={email} onChange={event => setEmail(event.target.value)} />
                        </Form.Item>
                        <Form.Item name="telefone" type="number">Telefone:
                            <Input placeholder='(XX)XXXXX-XXXX'value={phone} onChange={event => setPhone(event.target.value)}/>
                        </Form.Item>
                        <Form.Item name="mensagem">Escreva uma mensagem:  
                             <Input.TextArea />                                             
                        </Form.Item>    
                        <Button id="entrar" type="primary" htmlType="submit" onClick={handleVoluntario} size="medium">Enviar</Button>                        
                    </Form>
                </Voluntario>
            </div>
        </div>
    </div>
    )
}
export default Case;

