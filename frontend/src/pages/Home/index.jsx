import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import { Row, Col, BackTop, Pagination, Layout, Descriptions, Tag, Button } from 'antd';
import { DownCircleOutlined, UpOutlined, ShareAltOutlined, SearchOutlined } from '@ant-design/icons';
import api from '../../services/api';

function Home () {

    const [pagina, setPagina] = useState(1)
    const [tamanho, setTamanho] = useState(10)
    const [projetos, setProjetos] = useState([])
    const [total, setTotal] = useState(0)
    const history = useHistory()

    
    useEffect(() => {
        async function getProjects() {
            const response = await api.get(`/projetos?page=${pagina}&size=${tamanho}`)
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

    function definirTipo (projeto) {
        return projeto.tipo === "0" ? <Tag>Voluntária</Tag> : projeto.tipo === "1" ? <Tag>Financeira</Tag> : <Tag>Divulgação</Tag>
    }

    function criarSegmentos (projeto) {
        return String(projeto.segmentos).split(',').map(seg => seg ? <Tag>{ seg.charAt(0) + seg.slice(1).toLowerCase()}</Tag> : '')
    }

    function gotoDetails (id) {
        history.push(`/projetos/${id}`)
    }

    function criarFeed(projeto) {
        return (
            <Layout>
                <div id="container">
                    <div className="FeedDescription">
                        { definirTipo(projeto) }
                        { criarSegmentos(projeto) }
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
                        { projetos.map(projeto => criarFeed(projeto)) }
                    </div>
                    <div className="pagestep">
                        <Pagination onChange={handlerPagination} pageSize={tamanho} pageSizeOptions={[5, 10, 20, 50, 100]} total={total} />
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