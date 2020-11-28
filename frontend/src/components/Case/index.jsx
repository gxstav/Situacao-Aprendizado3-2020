import React, { useEffect, useState } from 'react';
import './style.css';
import { Descriptions, Tag, Button, Tabs, Statistic, Form, Input } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import api from '../../services/api';
import Voluntario from '../../components/Voluntario';
import Doar from '../../components/Doar';
import pagamentos from '../../assets/images/pagamentos.png';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;

function Case(props) {

    const { id } = props

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [projeto, setProjeto] = useState({})


    useEffect(() => {
        async function getDetails() {
            const respose = await api.get(`/projetos/${id}`)
            if (respose.status === 200) {
                const { data } = respose
                console.log(data)
                setProjeto(data)
            }
        }
        getDetails()
    }, [id])

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }

    const closeModal = () => {
        modalRef.current.close()
    }

    function handleVoluntario() {
        alert("Enviado")
    }

    const doarRef = React.useRef();

    const doarModal = () => {
        doarRef.current.doarModal()
    }

    const doarClose = () => {
        doarRef.current.doarClose()
    }

    function criarSegmentos () {
        return String(projeto.segmentos).split(',').map(seg => <Tag>{ seg.charAt(0) + seg.slice(1).toLowerCase() }</Tag>)
    }

    function definirTipo () {
        return projeto.tipo === "0" ? <Tag>Voluntária</Tag> : projeto.tipo === "1" ? <Tag>Financeira</Tag> : <Tag>Divulgação</Tag>
    }

    return (
        <div id="container">
            <h2 className="titleproject"><strong>{ projeto.nome }</strong></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="SOBRE O PROJETO" key="1" className="tabsTitle">
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Responsável">{ projeto.ong }</Descriptions.Item>
                        <Descriptions.Item label="Tipo de ajuda">
                            { definirTipo() }
                        </Descriptions.Item>
                        <Descriptions.Item label="Segmento">
                            { criarSegmentos() }
                        </Descriptions.Item>
                        <Descriptions.Item label="Descrição do projeto" span={3}>
                            { projeto.descricao }
                        </Descriptions.Item>
                    </Descriptions>
                </TabPane>
                <TabPane tab="INFORMAÇÕES DE CONTATO" key="2" className="tabsTitle">
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Site">{ projeto.site ? projeto.site : 'Não possui' }</Descriptions.Item>
                        <Descriptions.Item label="Celular">{ projeto.celular }</Descriptions.Item>
                        <Descriptions.Item label="E-mail">{ projeto.email }</Descriptions.Item>
                        <Descriptions.Item label="Endereço" span={2}>{ projeto.endereco }</Descriptions.Item>
                        <Descriptions.Item label="Cidade">{ `${projeto.cidade}/${projeto.uf}` }</Descriptions.Item>
                    </Descriptions>
                </TabPane>
            </Tabs>
            <div className="LikeButtonsGroup">
                <Statistic title="Compartilhe!" className="ShareContent" value={1128} prefix={<ShareAltOutlined />} />
                <div className="buttons">
                    <Button type="primary" className="HelpButton" onClick={doarModal}>Quero doar</Button>
                    <Button type="primary" className="VoluntaryButton" onClick={openModal}>Quero me voluntariar</Button>
                    <Voluntario ref={modalRef}>
                        <h2>Entre em Contato</h2>
                        <br />
                        <Form name="logar" >Email:
                        <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!' },
                            { required: true, message: 'Por favor insira seu email!' }]}>
                                <Input placeholder='exemplo@email.com' value={email} onChange={event => setEmail(event.target.value)} />
                            </Form.Item>
                            <Form.Item name="telefone" type="number">Telefone:
                            <Input placeholder='48123456789' maxLength='11' value={phone} onChange={event => setPhone(event.target.value)} />
                            </Form.Item>
                            <Form.Item name="mensagem">Escreva uma mensagem:
                             <Input.TextArea />
                            </Form.Item>
                            <Button id="entrar" type="primary" htmlType="submit" onClick={handleVoluntario} size="medium">Enviar</Button>
                        </Form>
                    </Voluntario>
                    <Doar ref={doarRef}>
                        <h2>Em breve você poderá escolher uma das opções abaixo para efetuar a sua doação</h2>
                        <img src={pagamentos} alt="pagamentos" width="100%"></img>
                    </Doar>
                </div>
            </div>
        </div>
    )
}
export default Case;

