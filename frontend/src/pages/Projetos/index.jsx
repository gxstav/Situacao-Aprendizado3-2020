import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import { Layout, Button } from 'antd';
import { PlusOutlined  } from '@ant-design/icons'


function Projetos (){
    return(
    <div id="ProjectPage">
        <Layout>
            <Navbar />
                <div className ="backgroundContainer">
                    <div className ="newProjectButton">
                        <Button type="primary"><PlusOutlined /> Novo projeto</Button>
                    </div>
                    <hr />
                    <br />
                    <Collapse />
                </div>
            <Footer />
        </Layout>

    </div>
    )
}
export default Projetos;