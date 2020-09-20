import React from 'react'
import './style.css';
import { Descriptions, Progress, Button  } from 'antd';

function Case (){
    return(
    <div id="container">
          <Descriptions title="NOME DO PROJETO" layout="vertical" bordered>
            <Descriptions.Item label="ONG">Nome da ONG</Descriptions.Item>
            <Descriptions.Item label="CAUSA">Motivo da abertura do projeto</Descriptions.Item>
        <Descriptions.Item label="DESCRIÇÃO DO PROJETO"> Descrição </Descriptions.Item>
            <Descriptions.Item label="CONTRIBUIÇÃO">Tipo de doação que a ONG solicita</Descriptions.Item>
            <Descriptions.Item label="CONTATO">Contato da ONG</Descriptions.Item>
            <Descriptions.Item label="LOCAL"> localização</Descriptions.Item>
        </Descriptions>
        <div className="Progress">
            <h2>Andamento do projeto</h2>
                <p>doações efetuadas</p>
                <Progress percent={30} />
                <p>novos voluntários</p>
                <Progress percent={50} status="active" />
        </div>
        <div className="buttons">
        <Button type="primary">Quero ajudar</Button>
        <Button type="primary">Quero me voluntariar</Button> 
        </div>
    </div>

    )
}
export default Case;

