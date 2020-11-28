import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Form, Input, Button, Col, Row, PageHeader, Select } from 'antd';
import herocadastro from '../../assets/images/hero.png';
import { Layout } from 'antd';
import api from '../../services/api';

const { Option } = Select;

function Cadastro() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')
    const [url, setUrl] = useState('')
    const [about, setAbout] = useState('')

    const history = useHistory()

    async function handleCadastro(event) {
        event.preventDefault()
        try {
            const data = { name, email, password, phone, city, uf, url, about }
            const response = await api.post('cadastro', data)
            alert(response.data.message)
            gotoHome()
        } catch (error) {
            alert('Erro ao cadastrar, tente novamente.')
        }
    }

    function gotoHome() {
        history.push('/')
    }

    return (
        <Layout>
            <div id="cadastroPage">
                <Navbar displayAba="0" />
                <div className="site-page-header">
                    <PageHeader onBack={gotoHome} title="CADASTRO" />
                </div>
                <Row>
                    <Col span={12} className="cadastroimage">
                        <div >
                            <img src={herocadastro} alt="Heroes" />
                        </div>
                    </Col>
                    <Col span={12} className="form">
                        <div className="formEdit">
                            <div className="TitleRegister">
                                <h2>PREENCHA OS CAMPOS ABAIXO</h2>
                            </div>
                            <Form name="cadastro">
                                <Form.Item name="nome">
                                    <Input placeholder='Nome da ONG' value={name} onChange={event => setName(event.target.value)} />
                                </Form.Item>
                                <Form.Item name="email" rules={[{ type: 'email', message: 'Este não é um email válido!', }, { required: true, message: 'Por favor insira seu email!', },]}>
                                    <Input placeholder='Email da ONG ou Responsável' value={email} onChange={event => setEmail(event.target.value)} />
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
                                    <Input.Password placeholder='Senha' value={password} onChange={event => setPassword(event.target.value)} />
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
                                            } else {
                                                return Promise.reject('As senhas não correpondem!');
                                            }
                                        },
                                    }),
                                ]}
                                >
                                    <Input.Password placeholder='Confirmar Senha' />
                                </Form.Item>

                                <Form.Item name="telefone" type="number" rules={[{ required: true }]}>
                                    <Input placeholder='Telefone' value={phone} onChange={event => setPhone(event.target.value)} />
                                </Form.Item>

                                <Form.Item name="cidade" rules={[{ required: true }]}>
                                    <Input placeholder='Cidade' value={city} onChange={event => setCity(event.target.value)} />
                                </Form.Item>

                                <Form.Item name="estado" rules={[{ required: true }]}>
                                    {/* <Input placeholder='Estado' value={uf} onChange={event => setUF(event.target.value)} /> */}
                                    <Select placeholder="Estado" value={uf} onChange={uf => setUF(uf)}>
                                        <Option value="AC">Acre</Option>
                                        <Option value="AL">Alagoas</Option>
                                        <Option value="AP">Amapá</Option>
                                        <Option value="AM">Amazonas</Option>
                                        <Option value="BA">Bahia</Option>
                                        <Option value="CE">Ceará</Option>
                                        <Option value="DF">Distrito Federal</Option>
                                        <Option value="ES">Espírito Santo</Option>
                                        <Option value="GO">Goiás</Option>
                                        <Option value="MA">Maranhão</Option>
                                        <Option value="MT">Mato Grosso</Option>
                                        <Option value="MS">Mato Grosso do Sul</Option>
                                        <Option value="MG">Minas Gerais</Option>
                                        <Option value="PA">Pará</Option>
                                        <Option value="PB">Paraíba</Option>
                                        <Option value="PR">Paraná</Option>
                                        <Option value="PE">Pernambuco</Option>
                                        <Option value="PI">Piauí</Option>
                                        <Option value="RJ">Rio de Janeiro</Option>
                                        <Option value="RN">Rio Grande do Norte</Option>
                                        <Option value="RS">Rio Grande do Sul</Option>
                                        <Option value="RO">Rondônia</Option>
                                        <Option value="RR">Roraima</Option>
                                        <Option value="SC">Santa Catarina</Option>
                                        <Option value="SP">São Paulo</Option>
                                        <Option value="SE">Sergipe</Option>
                                        <Option value="TO">Tocantins</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item name="site">
                                    <Input placeholder='Site da ONG (opcional)' value={url} onChange={event => setUrl(event.target.value)} />
                                </Form.Item>

                                <Form.Item name="descricao" label="Descrição" rules={[{ required: true }]}>
                                    <Input.TextArea value={about} onChange={event => setAbout(event.target.value)} />
                                </Form.Item>
                                <div className="buttonRegister">
                                    <Button type="primary" htmlType="submit" onClick={handleCadastro} size="large" >
                                        Cadastrar minha ONG
                </Button>
                                </div>
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