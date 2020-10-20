import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Form, Input, Button, Col, Row, PageHeader  } from 'antd';
import herocadastro from '../../assets/images/hero.png'
import { Layout } from 'antd';

/*
  const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}; 

*/

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
function Registrado(){
  return console.log("REGISTRADO");
}
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
    <Layout>
         <div id="cadastroPage">
           <Navbar />
           <div className="site-page-header">
            <PageHeader onBack={() => null} title="Cadastro"/>
           </div>
         <Row>
         <Col span={12} className="cadastroimage"> 
           <div >
             <img src = {herocadastro} alt=""  />
           </div>
         </Col>
         <Col span={12} className="form">
            <div className="formEdit">
              <h2>Preencha os campos abaixo:</h2>
              <Form name="cadastro" onSubmit={handleCadastro}>
              <Form.Item name="nome">      
              <Input placeholder='Nome do Responsável'/>    
               </Form.Item>
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

                <Form.Item name="confirm" dependencies={['password']} hasFeedback rules={[
                    {
                      required: true,
                      message: 'Por favor confirme sua senha!',
                    },
                    ({ getFieldValue }) => ({
                      validator(value) {
                        if (value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }else{
                        return Promise.reject('As senhas não correpondem!');}
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder='Confirmar Senha' />
                </Form.Item>

                <Form.Item name="telefone" type="number">
                  <Input placeholder='Telefone'/>
                </Form.Item>

                <Form.Item name="cidade" rules={[{ required: true }]}>
                  <Input placeholder='Cidade' />
                </Form.Item>

                <Form.Item name="estado" rules={[{ required: true }]}>
                  <Input placeholder='Estado'/>
                </Form.Item>

                <Form.Item name="site">
                  <Input placeholder='Site da ONG (opcional)' />
                </Form.Item>

                <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
                  <Input.TextArea />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" onSubmit={Registrado()}>
                    Registrar
                  </Button>
                </Form.Item> 
              </Form>  
            </div>
         </Col>
         </Row> 
        <Footer />
      </div> 
    </Layout>
  )
}
export default Cadastro;