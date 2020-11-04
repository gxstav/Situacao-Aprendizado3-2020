import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RelatedSider from '../../components/RelatedSider'
import Case from '../../components/Case'
import { Row, Col, Layout, PageHeader } from 'antd';


const { Content } = Layout;

function Caso (props){

    const history = useHistory()

    function gotoHome() {
        history.push('/')
    }

    function render(incident) {
        if (incident) {
            return <Case id={incident}/>
        }
    }

    const [ incident , setIncident ] = useState(0)
    
    useEffect(() => {
        const { id } = props.match.params
        setIncident(id)
    }, [props.match.params])


    return(
    <div id="CasePage">
        <Layout>
        <Navbar />
        <div className="pageheader">
            <PageHeader className="site-page-header" onBack={gotoHome} title="PROJETO"/>
        </div>
            <Content>
                <Row>
                    <Col span={17}>
                        {render(incident)}
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