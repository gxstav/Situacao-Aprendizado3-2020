import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Layout, Menu, Button, Avatar, Input, Form, Row, Col } from 'antd';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import './style.css';
import iconheroes from '../../assets/images/iconheroes.png';
import Login from '../../components/Login';
import api from '../../services/api';
import moment from 'moment';
import imagem_login from '../../assets/images/imagem_login.png';

const { Header } = Layout;

function Navbar(props) {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies(['x-access-token', 'x-refresh-token']) 
    const [status, setStatus] = useState(isLogged())
    const { displayAba } = props
    const index = abaSelecionada(displayAba, '1')

    function isLogged() {
        const access = cookie['x-access-token']
        const refresh = cookie['x-refresh-token']
        return access && refresh ? true : false
    }

    function abaSelecionada(aba, home = null) {
        if (aba) { return String(aba) }
        if (home) { return home }
    }

    async function handleLogin(event) {
        event.preventDefault()
        try {
            const data = { email, password }
            const response = await api.post('/login', data)
            if (response.status === 200) {
                const { access_token, refresh_token } = response.data
                const IN_30_MINUTES = new Date(moment().add(30, 'minutes').toDate());
                setCookie('x-access-token', access_token, { path: '/', expires: IN_30_MINUTES})
                setCookie('x-refresh-token', refresh_token, { path: '/', expires: IN_30_MINUTES})
                setStatus(true)
                closeModal()
                gotoHome()
            } else {
                alert(response.data.message)
            }
        } catch (error) {
            alert('Erro ao logar, tente novamente.')
        }
    }

    async function handleLogout(event) {
        event.preventDefault()
        try {
            const token = cookie['x-refresh-token']
            await api.delete('logout', {
                headers: { 'x-refresh-token': token }
            })
            removeCookie('x-access-token')
            removeCookie('x-refresh-token')
            setStatus(false)
            closeModal()
            gotoHome()
        } catch (error) {
            alert('Erro ao deslogar, tente novamente.')
        }
    }

    function gotoHome() {
        history.push('/')
    }

    function gotoCadastro() {
        history.push('/cadastro')
    }

    function gotoAbout() {
        history.push('/sobre')
    }

    function gotoProjects() {
        history.push('/projetos')
    }

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
    }

    const closeModal = () => {
        modalRef.current.close()
    }

    return (
        <Layout id="layout">

            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[index]}>
                    <Menu.Item key="1" onClick={gotoHome}>Início</Menu.Item>
                    <Menu.Item key="2" onClick={gotoAbout}>Conheça os Heroes</Menu.Item>
                    { status && <Menu.Item key="3" onClick={gotoProjects}>Meus projetos</Menu.Item>}
                    <div className="signUp">
                        <img src={iconheroes} alt="Heroes" />
                        { status ? '' : <Button id="botao" type="primary" onClick={gotoCadastro}>Cadastre-se</Button>}
                        <Avatar id="avatar" onClick={openModal} size={44} icon={<UserOutlined />} />
                    </div>
                </Menu>
                {
                status ?
                <Login ref={modalRef}>
                    <Row>
                        <h1>Logout</h1>
                        <Col span={12}>
                            <Avatar id="fechar" onClick={closeModal} size={25} icon={<CloseOutlined />} />
                        </Col>
                    </Row>
                    <br/>
                    <Button id="entrar" type="primary" htmlType="submit" onClick={handleLogout} size="medium">
                        Sair
                    </Button>
                </Login>
                : 
                <Login ref={modalRef}>
                    <Row>
                        <h1>Login</h1>
                        <Col span={12}>
                            <Avatar id="fechar" onClick={() => { modalRef.current.close() }} size={25} icon={<CloseOutlined />} />
                        </Col>
                    </Row>
                    <br />
                    <img src={imagem_login} alt="Login" id="imagem-login"/><p></p>
                    <Form name="logar" >
                        <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!' },
                            { required: true, message: 'Por favor insira seu email!' }]}>
                            <Input placeholder='Email da ONG ou Responsável' value={email} onChange={event => setEmail(event.target.value)} />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Por favor insira sua senha!' }]} hasFeedback>
                            <Input.Password placeholder='Senha' value={password} onChange={event => setPassword(event.target.value)} />
                        </Form.Item>
                        <Button id="entrar" type="primary" htmlType="submit" onClick={handleLogin} size="medium">
                            Entrar
                        </Button>
                        <Button id="querocadastrar" type="primary" htmlType="button" onClick={gotoCadastro} size="medium" >
                            Não possui conta? Cadastre-se
                        </Button>
                    </Form>
                </Login>
                }
            </Header>
        </Layout >
    )
}
export default Navbar;