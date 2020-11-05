import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Button, Avatar, Input, Form, Row, Col } from 'antd';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import './style.css';
import iconheroes from '../../assets/images/iconheroes.png';
import Login from '../../components/Login'



const { Header } = Layout;


function Navbar(){

  const history = useHistory()

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
 
  

  return(
   
  <Layout id="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={gotoHome}>Início</Menu.Item>
        <Menu.Item key="2" onClick={gotoAbout}>Conheça os Heroes</Menu.Item>
        <Menu.Item key="3" onClick={gotoProjects}>Meus projetos</Menu.Item>
        <div className="signUp">
          <img src={ iconheroes } alt="Heroes"/>                                          
          <Button id="botao" type="primary" onClick={gotoCadastro}>Cadastre-se</Button>
          <Avatar id="avatar" onClick={openModal} size={44} icon={<UserOutlined />} />
        </div>
      </Menu>
      <Login ref={modalRef}>
        <Row><h1>Login</h1>       
          
  <Col span={12}><Avatar id="fechar" onClick={() =>{modalRef.current.close()}} size={50} icon={<CloseOutlined/>} /></Col> </Row>

          <p>

         
  <Avatar id="avatar2" size={250} icon={<UserOutlined/>} />
  
            </p>   
            <p>    
          <Form name="logar">
                                           
          <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!',},{ required: true, message: 'Por favor insira seu email!',
                    },
                  ]}
                >
                  <Input placeholder='Email da ONG ou Responsável'/>
                </Form.Item>

                <Form.Item
                  name="password"        
                  rules={[
                    {
                      required: true,
                      message: 'Por favor insira sua senha!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder='Senha'/>
                </Form.Item>

                <Button id="entrar" type="primary" htmlType="submit" size="large">
                   Entrar 
                </Button>
                <p><p>
                <Button id="querocadastrar" type="primary" htmlType="submit" onClick={gotoCadastro} size="large" >
                   Quero me cadastrar 
                </Button>
                </p></p>
                
                </Form>
          </p>
              
      </Login>      
    </Header>
  </Layout>
  )}
export default Navbar;