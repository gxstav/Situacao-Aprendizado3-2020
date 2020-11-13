import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Checkbox, Upload, message } from 'antd';
import './style.css';

const { Option } = Select;


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  
  class Avatar extends React.Component {
    state = {
      loading: false,
    };
    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    }
  }




function DrawerHeroes(props) {
    
    const [drawer, setDrawer] = useState(true)

    function closeDrawer() {
        setDrawer(false)
    }

    function handleCaso() {
        /**
         *  API FETCH HERE
         */
    }


    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    return (
        <Drawer
            destroyOnClose="true"
            title="Criar Novo Projeto"
            width={720}
            onClose={closeDrawer}
            visible={drawer}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
                <div style={ {textAlign: 'right'} }>
                    <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
                        Cancelar
                    </Button>
                    <Button onClick={handleCaso} type="primary">
                        Adicionar Projeto
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
                            name="type"
                            label="Tipo de Ajuda"
                        >
                            <Select placeholder="Informe o tipo de ajuda">
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
                            label="Endereço"
                        >
                            <Input placeholder="Rua fulaninha, 456, 201C" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label="Data de início e fim do projeto"
                            rules={[{ required: true, message: 'Por favor insira uma data' }]}
                        >
                            <DatePicker.RangePicker
                                style={{ width: '100%' }}
                                getPopupContainer={trigger => trigger.parentElement}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                <Col span={12}>
                        <Form.Item
                            name="Segmento"
                            label="Segmento"
                        >
                            <Checkbox onChange={onChange}>Alimentação</Checkbox>
                            <Checkbox onChange={onChange}>Vestimentas</Checkbox>
                            <Checkbox onChange={onChange}>Atividades</Checkbox>
                            <Checkbox onChange={onChange}>Outros</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Upload name="avatar"
                            listType="picture-card"
                            style={{ width: '100000%' }}                                                       
                            >Adicione uma Imagem                        
                          </Upload>
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
    );
}


export default DrawerHeroes; 