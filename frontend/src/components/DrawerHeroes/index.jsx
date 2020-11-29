import React, { useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { useCookies } from 'react-cookie';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Checkbox } from 'antd';
import locale from 'antd/es/date-picker/locale/pt_BR';
import moment from 'moment';
import api from '../../services/api';

const { Option } = Select;
const DATE_FORMAT = 'DD/MM/YYYY';

const DrawerHeroes = forwardRef((props, ref) => {
    const [drawer, setDrawer] = useState(false)
    const [name, setName] = useState('')
    const [type, setType] = useState()
    const [address, setAddress] = useState('')
    const [dateRange, setDateRange] = useState([])
    const [segment, setSegment] = useState([])
    const [description, setDescription] = useState('')
    const [cookie, setCookie] = useCookies(['x-access-token', 'x-refresh-token']) 

    useImperativeHandle(ref, () => {
        return {
            openDrawer: () => open()
        }

    })

    function closeDrawer() {
        setDrawer(false)
    }

    function open() {
        setDrawer(true)
    }

    async function handleProject(event) {
        event.preventDefault()
        try {
            const data = { name, type, address, segment, description, date_start: moment(dateRange[0]).format('YYYY-MM-DD'), date_end: moment(dateRange[1]).format('YYYY-MM-DD') }
            const token = cookie['x-access-token']
            const response = await api.post('/projetos', data, {
                headers: { 'x-access-token': token }
            })
            if (response.status === 200) {
                alert(response.data.message)
                closeDrawer()
            }
            alert(response.data.message)
        } catch (error) {
            alert('Erro ao criar Projeto, tente novamente.')
        }
    }

    function checkedSegment(event) {
        const { value, checked } = event.target
        if (checked) {
            addSegment(value)
        } else {
            removeSegment(value)
        }
    }

    function addSegment(singleSegment) {
        setSegment([...segment, singleSegment])
    }

    function removeSegment(singleSegment) {
        const uptadedSegments = segment.filter(value => value !== singleSegment)
        setSegment(uptadedSegments)
    }

    function dataReady(){
        return !(name && type && address && dateRange && segment && description)
    }


    if (drawer) {
        return ReactDOM.createPortal(
            <Drawer
                destroyOnClose="true"
                title="Criar Novo Projeto"
                width={720}
                onClose={closeDrawer}
                visible={drawer}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
                            Cancelar
                    </Button>
                        <Button onClick={handleProject} type="primary" disabled={dataReady()}>
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
                                validateFirst={true}
                                rules={[{ type:'string' , required: true, message: 'Insira o nome do projeto!', whitespace: true }]}
                            >
                                <Input placeholder="Por favor digite aqui o nome do projeto" value={name} onChange={
                                    (event) => {
                                        setName(event.target.value)
                                    }
                                }/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Tipo de Ajuda"
                                rules={[{ type:'string', required: true, message: 'Insira o tipo de ajuda!' }]}
                            >
                                <Select placeholder="Informe o tipo de ajuda" onChange={type => setType(type)}>
                                    <Option value="0">Voluntária</Option>
                                    <Option value="1">Financeira</Option>
                                    <Option value="2">Divulgação</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Endereço"
                                rules={[{ type:'string', required: true, message: 'Insira o endereço!', whitespace: true }]}
                            >
                                <Input placeholder="Rua fulaninha, 456, 201C" value={address} onChange={event => setAddress(event.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Data de início e fim do projeto"
                            >
                                <DatePicker.RangePicker
                                    style={{ width: '100%' }}
                                    locale={locale}
                                    getPopupContainer={trigger => trigger.parentElement}
                                    format={DATE_FORMAT}
                                    value={[moment(), moment()]}
                                    defaultValue={[moment()]}
                                    disabled={[false, false]}
                                    onChange={
                                        (dates) => {
                                            setDateRange(dates)
                                        }
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="Segmento"
                                label="Segmento"
                            >
                                <Checkbox value="ALIMENTACAO" onChange={checkedSegment}>Alimentação</Checkbox>
                                <Checkbox value="VESTIMENTAS" onChange={checkedSegment}>Vestimentas</Checkbox>
                                <Checkbox value="ATIVIDADES" onChange={checkedSegment}>Atividades</Checkbox>
                                <Checkbox value="OUTROS" onChange={checkedSegment}>Outros</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Descrição"
                                rules={[{ type:'string', required: true, message: 'Insira uma descrição!', whitespace: true }]}
                            >
                                <Input.TextArea rows={4} placeholder="Por favor insira uma breve descrição sobre o projeto." value={description} onBlur={event => setDescription(event.target.value)}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>, document.getElementById("drawer-root")
        )
    }
    return null;
});


export default DrawerHeroes; 