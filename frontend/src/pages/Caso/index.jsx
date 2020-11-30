import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RelatedSider from '../../components/RelatedSider'
import Case from '../../components/Case'
import { Row, Col, Layout, PageHeader } from 'antd';
import { useCookies } from 'react-cookie';


const { Content } = Layout;

function Caso (props){

    const history = useHistory()
    const [cookie] = useCookies(['x-access-token', 'x-refresh-token'])
    const [status] = useState(isLogged())

    function isLogged() {
        const access = cookie['x-access-token']
        const refresh = cookie['x-refresh-token']
        return access && refresh ? true : false
    }

    function gotoProjects() {
        history.push('/projetos')
    }

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
        { status ? <Navbar displayAba="2"/> : <Navbar displayAba="1"/> }
        <div className="pageheader">
            <PageHeader className="site-page-header" onBack={status ? gotoProjects : gotoHome} title="PROJETOS"/>
        </div>
            <Content>
                <Row>
                    <Col span={17}>
                        { render(incident) }
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