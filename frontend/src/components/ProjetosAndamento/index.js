import React from 'react';
import './style.css';
import { Collapse, List, Button  } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import api from '../../services/api';

function ProjetosAndamento() {
    const data = api.get('/projetos')
    return (
        <List itemLayout="horizontal"  className="ListContent">
            <h3 className="TitlePreview"></h3>
            <div className="ProjectButtonsGroup">
                <Button type="primary" className="ProjectButtons"><SearchOutlined />Detalhes</Button>
                <Button type="danger" className="ProjectButtons"><CloseOutlined />Excluir</Button>
            </div>    
        </List>
    )
}

export default ProjetosAndamento;