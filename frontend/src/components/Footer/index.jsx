import React from 'react'
import { Layout, Row, Col, Typography  } from 'antd';
import './style.css';
import { MailFilled, InstagramOutlined, FacebookOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons'
import logoheroes from '../../assets/images/logo_heroes.png'

const { Footer } = Layout;
const { Title } = Typography;



function footer() {
    return(
        <Layout>
            <Footer id='rodape'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div> 
                        <img src = {logoheroes} alt=""/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                    <Title type="danger" level={3}>SOBRE A HEROES</Title>
                    <a href="#">Faça parte do projeto</a>
                        <br></br>
                        <a href="#">Conheça a equipe</a>
                        <br></br>
                        <a href="#">Como surgiu o projeto</a>
                        <br></br>
                        <a href="#">Suporte</a>
                        <br></br>
                        <a href="#">Politica de privacidade</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div >
                    <Title type="danger" level={3}>NOSSOS PROJETOS</Title>
                        <a href="#"> Eventos </a>
                        <br></br>
                        <a href="#"> Locais </a>
                        <br></br>
                        <a href="#"> Projetos </a>
                        <br></br>
                        <a href="#">Ser um Voluntário</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                    <Title type="danger" level={3}>FALE CONOSCO</Title>
                        <p><MailFilled /> heroes@contato.com</p>
                        <p className="iconslist"><InstagramOutlined /> <FacebookOutlined /> <YoutubeOutlined /> <LinkedinOutlined /></p>
                    </div>
                </Col>
            </Row>

            </Footer>
        </Layout>
    )
}
export default footer;
