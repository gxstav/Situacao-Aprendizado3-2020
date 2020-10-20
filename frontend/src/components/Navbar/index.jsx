import React from 'react'
import { Layout, Menu, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css';
import Cadastro from '../../pages/Cadastro';
import iconheroes from '../../assets/images/iconheroes.png'

const { Header } = Layout;


function navbar(){ 

  return(
   
  <Layout id="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Início</Menu.Item>
        <Menu.Item key="2">Conheça os Heroes</Menu.Item>
        <div className="signUp">
          <img src = { iconheroes } alt=""/>
          <Button id="botao" type="primary" onClick={Cadastro}>Cadastre-se</Button>
          <Avatar id="avatar" size={44} icon={<UserOutlined />} />
          
        </div>
      </Menu>
    </Header>
  </Layout>
  )}
export default navbar;