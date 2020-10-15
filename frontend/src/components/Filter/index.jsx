import React from 'react'
import { Layout, Input, Menu, Checkbox, Select  } from 'antd';
import './style.css';

const { Sider } = Layout;
const { Search } = Input;
const { Option } = Select;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function filtro (){
    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return(
        
        <Layout>
        <Sider width={410} className="site-layout-background">
        <Search
            placeholder="Procure um projeto"
            enterButton="Pesquisar"
            size="large"
            onSearch={value => console.log(value)}
        />
        <Menu mode="inline" >
            <div className= "titletype">
                <h3>Tipo de ajuda que você quer oferecer:</h3>
            </div> 
            <div className= "typehelp">
                <Checkbox value="A">Financeira</Checkbox>
                <Checkbox value="A">Voluntária</Checkbox>
                <Checkbox value="A">Divulgação</Checkbox>
            </div>
        <div className= "titletype">
            <h3>Escolha o segmento:</h3>
        </div> 
        <div className= "typehelp">
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Escolher tags"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
        >
         {children}
         </Select>
        </div>
        </Menu>
      </Sider>
</Layout>
    )
}
export default filtro;