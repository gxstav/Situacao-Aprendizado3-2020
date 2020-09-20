import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Case from '../../components/Case'
import { Row, Col, Layout, PageHeader } from 'antd';


const { Content } = Layout;

function Caso (){
    return(
    <div id="CasePage">
        <Layout>
         <Navbar />
         <div className="pageheader">
         <PageHeader 
            className="site-page-header"
            onBack={() => null}
            title="Projeto"
        /></div>
            <Content>
                <Row>
                    <Col span={16}>
                        <Case />
                    </Col>
                    <Col span={8}>
                    <h1>Conheça outros projetos</h1>
                    {/* projetos sugeridos aqui */}
                    </Col>  
                    </Row>
            </Content>
        </Layout>
        <Footer />
    </div>
    )
}
export default Caso;