import React from 'react'
import { Layout, Descriptions } from 'antd';
import './style.css';
const { Content } = Layout;

function feed() {
    return(
        <layout>
            <Content> 
            <div id="container">

                <Descriptions title="Mais Ração">
                    <Descriptions.Item label="Projeto">Pata voluntária</Descriptions.Item>
                    <Descriptions.Item label="Contato">(48) 9685-4586</Descriptions.Item>
                    <Descriptions.Item label="Local">São paulo, Brasil</Descriptions.Item>
                    <Descriptions.Item label="Descrição">
                    O projeto tem como objetivo arrecadar 100kg de ração.
                    </Descriptions.Item>
                </Descriptions></div>
            </Content>
        </layout>
    )
}
export default feed;