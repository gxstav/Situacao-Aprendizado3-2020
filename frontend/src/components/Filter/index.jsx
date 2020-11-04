import React from 'react'
import { Layout, Input, Checkbox, Select, Button } from 'antd';
import './style.css';
import { SearchOutlined } from '@ant-design/icons'

const { Sider } = Layout;
const { Search } = Input;
const { Option } = Select;


function handleChange(value) {
    console.log(`selected ${value}`);
  }

//tags para colocar: #Alimentação #Vestimentas #Atividades #Outros 

function filtro (){
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return(
        <Layout id="filter">
        <Sider width={410} className="site-layout-background">
        <Search placeholder="Nome do projeto" enterButton="Pesquisar" size="medium" onSearch={value => console.log(value)}/>
            <div className="type">
                <div className= "titletype">
                    <h3><strong>TIPO DE AJUDA</strong></h3>
                </div> 
                <div className= "typehelp" >
                    <Checkbox value="">Financeira</Checkbox>
                    <br></br>
                    <Checkbox value="">Voluntária</Checkbox>
                    <br></br>
                    <Checkbox value="">Divulgação</Checkbox>
                </div>
            </div>
            <div className="filtro">
                <div className= "titletype">
                    <h3><strong>FILTRAR POR</strong></h3>
                </div> 
                <div className= "typehelp">
                    <Checkbox value="">Curtidas</Checkbox>
                    <br></br>
                    <Checkbox value="">Novos projetos</Checkbox>
                    <br></br>
                    <Checkbox value="">ONG</Checkbox>
                </div>
            </div>
            <div className= "titletype">
                <h3><strong>ESCOLHA O SEGMENTO</strong></h3>
            </div> 
            <div className= "typehelp">
            <Select mode="multiple" style={{ width: '100%' }} placeholder="Selecione o segmento" onChange={handleChange} optionLabelProp="label"
  >
                <Option value="Alimentação" label="Alimentação">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Alimentação">
                    Alimentação
                    </span>
                </div>
                </Option>
                <Option value="Vestimentas" label="Vestimentas">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Vestimentas">
                    Vestimentas
                    </span>
                </div>
                </Option>
                <Option value="Atividades" label="Atividades">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Atividades">
                    Atividades
                    </span>
                </div>
                </Option>
                <Option value="Outros" label="Outros">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Outros">
                    Outros
                    </span>
                </div>
                </Option>
            </Select>
            </div>
            <div className= "titletype">
             <h3><strong>LOCALIZAÇÃO</strong></h3>
                <Select className= "localization" placeholder="UF" style={{ width: '100%' }}>
                    <Option value="">TODOS OS ESTADOS</Option>
                    <Option value="">SC</Option>
                    <Option value="">RS</Option>
                    <Option value="">SP</Option>
                    <Option value="">RJ</Option>
                    <Option value="">PR</Option>
                    <Option value="">MT</Option>
                    <Option value="">MG</Option>
                </Select>
                <br />
                <br />
                <Button  type="primary" block> <SearchOutlined /> Pesquisar projetos </Button>     
                <br />
                <br /> 
            </div>
        </Sider>
        </Layout>
    )
}
export default filtro;