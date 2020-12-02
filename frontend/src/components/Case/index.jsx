import React, { useEffect, useState } from 'react';
import './style.css';
import { Descriptions, Tag, Button, Tabs, Statistic, Form, Input } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import api from '../../services/api';
import Voluntario from '../../components/Voluntario';
import Doar from '../../components/Doar';
import pagamentos from '../../assets/images/pagamentos.png';
import pagamentos2 from '../../assets/images/pagamentos400.png';
import pagamentos3 from '../../assets/images/pagamentos600.png';
import { useCookies } from 'react-cookie';
import moment from 'moment'

const { TabPane } = Tabs;

function Case(props) {

    const { id } = props
    const [cookie] = useCookies(['x-access-token', 'x-refresh-token'])
    const [status] = useState(isLogged())
    const [projeto, setProjeto] = useState({})
    const [email, setEmail] = useState('')
    const [emailText, setEmailText] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneText, setPhoneText] = useState('')

    function isLogged() {
        const access = cookie['x-access-token']
        const refresh = cookie['x-refresh-token']
        return access && refresh ? true : false
    }

    useEffect(() => {
        async function getDetails() {
            const response = await api.get(`/projetos/${id}`)
            if (response.status === 200) {
                const { data } = response
                setProjeto(data)
            }
        }
        getDetails()
    }, [id])

    async function sendEmail() {
        const data = { email, text: encodeURI(emailText), subject: encodeURI(projeto.nome), receiver: projeto.email }
        const response = await api.post('/mailer', data)
        if (response.status === 200) {
            alert(response.data.message)
        }
    }

    async function sendMessage() {
        const data = { phone, phoneText, receiver: projeto.celular }
        const response = await api.post('/messenger', data)
        if (response.status === 200) {
            alert(response.data.message)
        }
    }

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }

    const doarRef = React.useRef();

    const doarModal = () => {
        doarRef.current.doarModal()
    }

    function criarSegmentos() {
        return String(projeto.segmentos).split(',').map((seg, index) => <Tag key={index}>{seg.charAt(0) + seg.slice(1).toLowerCase()}</Tag>)
    }

    function definirTipo() {
        return projeto.tipo === "1" ? <Tag key="1">Voluntária</Tag> : projeto.tipo === "2" ? <Tag key="2">Financeira</Tag> : <Tag key="3">Divulgação</Tag>
    }

    return (
        <div id="container">
            <h2 className="titleproject"><strong>{projeto.nome}</strong></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="SOBRE O PROJETO" key="1" className="tabsTitle">
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Início" span={2}>
                            {moment(projeto.inicio).format('DD/MM/YYYY')}
                        </Descriptions.Item>
                        <Descriptions.Item label="Fim" span={2}>
                            {moment(projeto.fim).format('DD/MM/YYYY')}
                        </Descriptions.Item>
                        <Descriptions.Item label="Responsável">
                            {projeto.ong}
                        </Descriptions.Item>
                        <Descriptions.Item label="Tipo de ajuda">
                            {definirTipo()}
                        </Descriptions.Item>
                        <Descriptions.Item label="Segmento">
                            {criarSegmentos()}
                        </Descriptions.Item>
                        <Descriptions.Item label="Descrição do projeto" span={3}>
                            {projeto.descricao}
                        </Descriptions.Item>
                    </Descriptions>
                </TabPane>
                <TabPane tab="INFORMAÇÕES DE CONTATO" key="2" className="tabsTitle">
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Site">{projeto.site ? projeto.site : 'Não possui'}</Descriptions.Item>
                        <Descriptions.Item label="Celular">{projeto.celular}</Descriptions.Item>
                        <Descriptions.Item label="E-mail">{projeto.email}</Descriptions.Item>
                        <Descriptions.Item label="Endereço" span={2}>{projeto.endereco}</Descriptions.Item>
                        <Descriptions.Item label="Cidade">{`${projeto.cidade}/${projeto.uf}`}</Descriptions.Item>
                    </Descriptions>
                </TabPane>
            </Tabs>
            {
                status ? ''
                    : <div className="LikeButtonsGroup">
                        <Statistic title="Compartilhe!" className="ShareContent" value={1128} prefix={<ShareAltOutlined />} />
                        <div className="buttons">
                            <Button type="primary" className="HelpButton" onClick={doarModal}>Quero doar!</Button>
                            <Button type="primary" className="VoluntaryButton" onClick={openModal}>Quero me voluntariar!</Button>
                            <Voluntario ref={modalRef}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="VIA E-MAIL" key="1" className="tabsTitle">
                                        <Form name="send-email" >Email
                                            <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!' },
                                            { required: true, message: 'Por favor insira seu email!' }]}>
                                                <Input placeholder='exemplo@email.com' value={email} onChange={event => setEmail(event.target.value)} />
                                            </Form.Item>
                                            <Form.Item name="mensagem">Escreva sua mensagem
                                                <Input.TextArea onChange={event => setEmailText(event.target.defaultValue)}/>
                                            </Form.Item>
                                            <Button id="entrar" type="primary" htmlType="submit" onClick={sendEmail} size="medium">Enviar e-mail</Button>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab="VIA WHATSAPP" key="2" className="tabsTitle">
                                        <Form name="send-message" >Whatsapp
                                            <Form.Item name="telefone" type="number">
                                                <Input placeholder='48123456789' maxLength='11' value={phone} onChange={event => setPhone(event.target.value)} />
                                            </Form.Item>
                                            <Form.Item name="mensagem">Escreva sua mensagem
                                                <Input.TextArea onChange={event => setPhoneText(event.target.defaultValue)}/>
                                            </Form.Item>
                                            <Button id="entrar" type="primary" htmlType="submit" onClick={sendMessage} size="medium">Enviar mensagem</Button>
                                        </Form>
                                    </TabPane>
                                </Tabs>
                            </Voluntario>
                            <Doar ref={doarRef}>
                                <h2>Em breve você poderá escolher uma das opções abaixo para efetuar a sua doação!</h2>
                                <img src={pagamentos3} className="payments" alt="pagamentos" width="58%"></img>
                            </Doar>
                        </div>
                    </div>
            }
        </div>
    )
}
export default Case;

