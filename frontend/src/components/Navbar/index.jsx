import React from 'react'
import { Layout, Menu, Button  } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css';

const { Header } = Layout;


function navbar(){
  return(
   
  <Layout id="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Início</Menu.Item>
        <Menu.Item key="2">Conheça os Heroes</Menu.Item>
        <div className="signUp">
          <Button id="botao" type="primary">Cadastre-se</Button> 
          <Avatar id="avatar" size={44} icon={<UserOutlined />} />
        </div>
      </Menu>
    </Header>
  </Layout>
  )}
export default navbar;