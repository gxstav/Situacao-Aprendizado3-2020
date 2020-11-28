import React from 'react';
import './style.css';
import { Collapse, List, Button  } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import ProjetosAndamento from '../ProjetosAndamento';
const { Panel } = Collapse;

function optionsCollapse (){
    function callback(key) {
        console.log(key);
      }
    return(
        <div id="ProjectPage">
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Projetos em andamento" key="1">
                    <ProjetosAndamento />
                </Panel>
                <Panel header="Projetos finalizados" key="2">
                <List itemLayout="horizontal"  className="ListContent">
                       <h3 className="TitlePreview">NOME DO PROJETO</h3>
                        <div className="ProjectButtonsGroup">
                            <Button type="primary" className="ProjectButtons"><SearchOutlined />Detalhes</Button>
                            <Button type="danger" className="ProjectButtons"><CloseOutlined />Excluir</Button>
                            
                        </div>    
                    </List>
                    <List itemLayout="horizontal" className="ListContent">
                        <h3 className="TitlePreview">NOME DO PROJETO</h3>
                        <div className="ProjectButtonsGroup">
                        <Button type="primary" className="ProjectButtons"><SearchOutlined />Detalhes</Button>
                            <Button type="danger" className="ProjectButtons"><CloseOutlined /> Excluir</Button> 
                        </div> 
                     </List>
                </Panel>
            </Collapse>
        </div>
    )
}
export default optionsCollapse;