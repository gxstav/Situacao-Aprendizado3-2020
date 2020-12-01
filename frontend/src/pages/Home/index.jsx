import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import { Row, Col, BackTop, Pagination, Layout, Descriptions, Tag, Button, Input, Checkbox, Select } from 'antd';
import { DownCircleOutlined, UpOutlined, ShareAltOutlined, SearchOutlined } from '@ant-design/icons';
import api from '../../services/api';

const { Sider } = Layout;
const { Option } = Select;

function Home() {

    const [pagina, setPagina] = useState(1)
    const [tamanho, setTamanho] = useState(10)
    const [projetos, setProjetos] = useState([])
    const [total, setTotal] = useState(0)
    const history = useHistory()

    function Filter() {

        const [nome, setNome] = useState('')
        const [tipo, setTipo] = useState([])
        const [segmento, setSegmento] = useState([])
        const [estado, setEstado] = useState('')

        async function getProject() {
            const data = { name: nome, uf: estado, types: tipo, segments: segmento }
            console.log(data)
            const response = await api.put(`/projetos?page=1&size=${tamanho}`, data)
            if (response.status === 200) {
                console.log(response.data)
                const { lista, total } = response.data
                setProjetos(lista)
                setTotal(total)
            }
        }

        function handleSegmento(segmentos) {
            let updatedSegmentos = [...segmentos].sort((current, next) => current.localeCompare(next))
            setSegmento(updatedSegmentos)
        }

        function addTipo(singleTipo) {
            setTipo([...tipo, singleTipo])
        }

        function removeTipo(singleTipo) {
            const uptadedTipo = tipo.filter(value => value !== singleTipo)
            setTipo(uptadedTipo)
        }

        function addEstado(uf) {
            setEstado(uf)
        }

        return (
            <Layout id="filter">
                <Sider width={410} className="site-layout-background">
                    <div className="titletype">
                        <h3><strong>POR PROJETO</strong></h3>
                        <Input placeholder="Nome do projeto" onChange={event => setNome(event.target.value)} />
                    </div>
                    <div className="titletype">
                        <h3><strong>POR SEGMENTO</strong></h3>
                    </div>
                    <div className="typehelp">
                        <Select mode="multiple" style={{ width: '100%' }} placeholder="Selecione o segmento" onChange={handleSegmento} optionLabelProp="label">
                            <Option value="ALIMENTACAO" label="Alimentação">
                                <div className="demo-option-label-item">
                                    <span role="img" aria-label="Alimentação">
                                        Alimentação
                            </span>
                                </div>
                            </Option>
                            <Option value="VESTIMENTAS" label="Vestimentas">
                                <div className="demo-option-label-item">
                                    <span role="img" aria-label="Vestimentas">
                                        Vestimentas
                            </span>
                                </div>
                            </Option>
                            <Option value="ATIVIDADES" label="Atividades">
                                <div className="demo-option-label-item">
                                    <span role="img" aria-label="Atividades">
                                        Atividades
                            </span>
                                </div>
                            </Option>
                            <Option value="OUTROS" label="Outros">
                                <div className="demo-option-label-item">
                                    <span role="img" aria-label="Outros">
                                        Outros
                            </span>
                                </div>
                            </Option>
                        </Select>
                    </div>
                    <div className="titletype">
                        <h3><strong>POR LOCALIZAÇÃO</strong></h3>
                        <Select className="localization" onSelect={addEstado} placeholder="UF" style={{ width: '100%' }}>
                            <Option value="">TODOS OS ESTADOS</Option>
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
                        <br />
                        <br />
                        <div className="type">
                            <div className="titletype">
                                <h3><strong>TIPO DE AJUDA</strong></h3>
                            </div>
                            <div className="typehelp" >
                                <Checkbox className="typehelp-checkbox" value="1" onChange={event => event.target.checked ? addTipo(event.target.value) : removeTipo(event.target.value)}>Voluntária</Checkbox>
                                <Checkbox className="typehelp-checkbox" value="2" onChange={event => event.target.checked ? addTipo(event.target.value) : removeTipo(event.target.value)}>Financeira</Checkbox>
                                <Checkbox className="typehelp-checkbox" value="3" onChange={event => event.target.checked ? addTipo(event.target.value) : removeTipo(event.target.value)}>Divulgação</Checkbox>
                            </div>
                        </div>
                        <Button type="primary" onClick={getProject} block> <SearchOutlined /> Pesquisar </Button>
                        <br />
                        <br />
                    </div>
                </Sider>
            </Layout>
        )
    }


    useEffect(() => {
        async function getProjects() {
            const response = await api.put(`/projetos?page=${pagina}&size=${tamanho}`)
            if (response.status === 200) {
                const { lista, total } = response.data
                setProjetos(lista)
                setTotal(total)
            }
        }
        getProjects()
    }, [setProjetos, setTotal, pagina, tamanho])

    function handlerPagination(page, pagesize) {
        setPagina(page)
        setTamanho(pagesize)
    }

    function definirTipo(projeto) {
        return projeto.tipo === "1" ? <Tag key="1">Voluntária</Tag> : projeto.tipo === "2" ? <Tag key="2">Financeira</Tag> : <Tag key="3">Divulgação</Tag>
    }

    function criarSegmentos(projeto) {
        return String(projeto.segmentos).split(',').map((seg, index) => {
            if (seg === 'ALIMENTACAO') {
                return <Tag key={index}>Alimentação</Tag>
            }
            return seg ? <Tag key={index}>{seg.charAt(0) + seg.slice(1).toLowerCase()}</Tag> : ''
        })
    }

    function gotoDetails(id) {
        history.push(`/projetos/${id}`)
    }

    function criarFeed(projeto) {
        return (
            <Layout>
                <div id="container">
                    <div className="FeedDescription">
                        {definirTipo(projeto)}
                        {criarSegmentos(projeto)}
                        <Descriptions className="TitlteFeed" title={projeto.nome}>
                            <Descriptions.Item span={3}>{projeto.descricao}</Descriptions.Item>
                        </Descriptions>
                    </div>
                    <br />
                    <hr />
                    <div className="groupbuttons">
                        <div className="buttonsproject">
                            <Button type="primary" onClick={() => gotoDetails(projeto.id)} ><SearchOutlined /> Saber Mais</Button>
                        </div>
                        <div className="share">
                            <ShareAltOutlined />
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }

    return (
        <div id="homePage">
            <Navbar />
            <Carousel />
            <Row>
                <Col span={16} className="containerfeed">
                    <div className='group'>
                        <h2 className="titlepage">
                            <DownCircleOutlined /> ÚLTIMOS PROJETOS </h2>
                        <div className="buttonproject">
                        </div>
                    </div>
                    <hr />
                    <BackTop>
                        <div className="backtopstyle"><UpOutlined /></div>
                    </BackTop>
                    <div>
                        {projetos.map(projeto => criarFeed(projeto))}
                    </div>
                    <div className="pagestep">
                        <Pagination onChange={handlerPagination} pageSize={tamanho} total={total} />
                    </div>
                </Col>
                <Col span={8} className="containerfilter">
                    <div className="buttonsfilter">
                        <Filter />
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>

    )
}
export default Home;