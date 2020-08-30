import React from 'react'
import { Layout   } from 'antd';
import './style.css';

const { Footer } = Layout;


function footer() {
    return(
        <Layout>
            <Footer id='rodape'>
                <h4>Copyright ©</h4>
            </Footer>
        </Layout>
    )
}
export default footer;
