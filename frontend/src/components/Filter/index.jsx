import React from 'react'
import { Layout, Input  } from 'antd';
import './style.css';

const { Sider } = Layout;
const { Search } = Input;


function filtro (){
    return(
        <Layout id="container">
            <Sider>
            <Search
                placeholder="Nome do projeto"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            </Sider>
        </Layout>
    )

}
export default filtro;