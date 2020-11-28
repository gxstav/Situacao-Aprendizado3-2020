import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import rebeckaicon from '../../assets/images/rebecka.png'
import gustavoicon from '../../assets/images/gustavo.png'
import augustoicon from '../../assets/images/augusto.png'
import { Layout, Card, Col, Row, Avatar } from 'antd';

const {  Content } = Layout;

function About (){
    return(
    <div id="Aboutpage">
        <Layout>
            <Navbar displayAba="2"/>
            <Content>
            <div className ="containerBase">
                <h1>SOBRE A HEROES</h1>
                <div className ="description"> 
                    <p>O projeto <strong>HEROES</strong> surgiu com o intuito de ajudar na divulgação de projetos sociais, ONG´s e instituições. A <strong>HEROES</strong> não visa fins lucrativos, sendo assim, um projeto totalmente filantrópico!</p> 
                    <p><strong>RESUMO DO PROJETO:</strong> Pensando na facilidade, não há necessidade de cadastro para o usuário doador/voluntário, facilitando o acesso a projetos que o interessam, podendo interagir através de curtidas, divulgação, doação ou voluntáriado.</p> 
                </div>
                <h1>QUEM SOMOS?</h1>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card className="stylecard">
                            <Avatar size={120} img src = {rebeckaicon} alt=""  className="contentstyle" />
                            <h3><strong>REBECKA OJEDA</strong></h3>
                            <hr />
                            <p>
                                Rebecka é desenvolvedora front-end do projeto que surgiu através do trabalho de situação de aprendizado da instituição SENAI/SC.
                            </p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="stylecard">
                            <Avatar size={120} img src = {gustavoicon} alt=""  className="contentstyle"/>
                            <h3><strong>GUSTAVO BARCELOS</strong></h3>
                            <hr />
                            <p>
                                Gustavo é desenvolvedor back-end do projeto que surgiu através do trabalho de situação de aprendizado da instituição SENAI/SC.
                            </p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="stylecard">
                            <Avatar size={120} img src = {augustoicon} alt=""  className="contentstyle"/>
                            <h3><strong>AUGUSTO CARVALHO</strong></h3>
                            <hr />
                            <p>
                                Augusto é desenvolvedor full-stack do projeto que surgiu através do trabalho de situação de aprendizado da instituição SENAI/SC.
                            </p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            </Content>
            <Footer />
        </Layout>
    </div>
    )
}
export default About;