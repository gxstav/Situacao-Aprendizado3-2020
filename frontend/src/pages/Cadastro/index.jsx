import React, { useState } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Feed from '../../components/Feed'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import { Form, Input, InputNumber, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

  const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

//
// PODE IMPORTAR LOGOS, SVG, COMPONENTES AQUI
//

function Cadastro(){

  return (

    
    <div id="cadastroPage">
     
     <Form {...layout} name="cadastro">
      <Form.Item name="nome" label="Nome do Responsável" rules={[{ required: true }]}>
        <Input />    
        
        <p></p>
        <Form.Item
        name="email" label="Email da ONG ou Responsável" rules={[{ type: 'email', message: 'The input is not valid E-mail!',},{ required: true, message: 'Please input your E-mail!',
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
            message: 'Please input your password!',
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
            message: 'Please confirm your password!',
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
      <Form.Item name="telefone" label="Telefone" rules={[{ type: 'tel' }]}>
        <Input/>
      </Form.Item>

      <Form.Item name="cidade" label="Cidade">
        <Input />
      </Form.Item>

      <Form.Item name="estado" label="Estado">
        <Input />
      </Form.Item>

      <Form.Item name="site" label="Site da ONG">
        <Input />
      </Form.Item>
      <Form.Item name="descricao" label="Descrição">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
 
    </div>
  )
}
export default Cadastro;