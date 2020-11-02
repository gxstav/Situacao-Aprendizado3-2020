import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RelatedSider from '../../components/RelatedSider'
import Case from '../../components/Case'
import { Row, Col, Layout, PageHeader } from 'antd';


const { Content } = Layout;

function Caso (){
    return(
    <div id="CasePage">
        <Layout>
        <Navbar />
        <div className="pageheader">
            <PageHeader className="site-page-header" onBack={() => null} title="Projeto"/>
        </div>
            <Content>
                <Row>
                    <Col span={17}>
                        <Case />
                    </Col>
                    <Col span={7}>
                        <div className="siderContent">
                            <h2 className="siderText"><strong>PROJETOS SUGERIDOS</strong></h2>
                            <hr />
                            <RelatedSider />
                            <RelatedSider />
                            <RelatedSider />
                            <RelatedSider />
                        </div>
                    </Col>  
                </Row>
            </Content>
        </Layout>
        <Footer />
    </div>
    )
}
export default Caso;