import React, { useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Form, Input, InputNumber, Button } from 'antd';
import { Layout } from 'antd';


const { Header, Sider, Content } = Layout;

/*
  const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}; 

*/

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const meuregistro = {
  width: "50%",
  height: "50%",
  margin: 0,
  padding: 0
  
  

};

/*
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
 */

function Cadastro(){

  async function handleCadastro(event) {
    event.preventDefault()
    try {
      // api request to save data.
    } catch (error) {
      alert('Erro ao cadastrar, tente novamente.')
    }
  }

  return (

    <div id="cadastroPage">
     <Navbar />
     <p></p>
     
     <h1 style={mystyle}>Cadastro</h1>
     <p></p>
     <Content style={meuregistro}>
     <Form name="cadastro" onSubmit={handleCadastro}>
      <Form.Item name="nome" label="Nome do Responsável" rules={[{ required: true }]}>
        <Input />    
        
        <p></p>
        <Form.Item
        name="email" label="Email da ONG ou Responsável" rules={[{ type: 'email', message: 'Este não é um email válido!',},{ required: true, message: 'Por favor insira seu email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Senha"
        rules={[
          {
            required: true,
            message: 'Por favor insira sua senha!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Senha"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirme sua senha!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      </Form.Item>
      <Form.Item name="telefone" label="Telefone" rules={[{ type: 'tel' , required: true }]}>
        <Input/>
      </Form.Item>

      <Form.Item name="cidade" label="Cidade" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="estado" label="Estado" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="site" label="Site da ONG">
        <Input />
      </Form.Item>
      <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
    </Content>
    <Footer></Footer>
 
    </div>
  )
}
export default Cadastro;