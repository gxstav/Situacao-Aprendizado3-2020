import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import './style.css';

const { Option } = Select;




  function drawer(){  


   const setState = '';    
        
      const showDrawer = () => 
          setState.visible(true);
        ;
      
        const onClose = () =>
          setState.visible(false)
        ;
            
    
    return (
      <>        
        <Drawer
          destroyOnClose
          title="Criar Novo Projeto"
          width={720}
          onClose={onClose}
          visible={showDrawer}         
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Nome do Projeto"                  
                >
                  <Input placeholder="Por favor digite aqui o nome do projeto" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Site da ONG"                  
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Por favor digite aqui o site da ONG"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="ONG ou Responsável"                  
                >                  
                   <Input placeholder="Por favor informe o responsável pelo projeto"/>
                  
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Tipo"                  
                >
                  <Select placeholder="Please choose the type">
                    <Option value="refeicao">Refeição</Option>
                    <Option value="financeiro">Financeiro</Option>
                    <Option value="doacoes">Doações</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Meta"                  
                >
                  <Input placeholder="Defina uma meta"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="Data"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Descrição"                  
                >
                  <Input.TextArea rows={4} placeholder="Por favor insira uma breve descrição sobre o projeto" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer> 
      </>
    );
  }
  

export default drawer; 