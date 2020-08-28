import React from 'react'
import { Layout  } from 'antd';
import './style.css';

const { Footer } = Layout;

function footer() {
    return(
        <Layout>
            <Footer id='rodape'>
                aqui é o rodape
            </Footer>
        </Layout>
    )
}
export default footer;
