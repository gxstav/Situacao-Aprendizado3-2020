import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import './style.css';
import { Collapse, List, Button  } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import api from '../../services/api';

const { Panel } = Collapse;

function OptionsCollapse() {

    const [cookie, setCookie] = useCookies(['x-access-token', 'x-refresh-token'])
    const token = cookie['x-access-token']
    const [ativos, setAtivos] = useState([])
    const [concluidos, setConcluidos] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function projetosAtivos() {
            const response = await api.get('/ong/projetos', {
                headers: { 'x-access-token': token, 'x-andamento': true }
            }, { active: true })

            if (response.status === 200) {
                const { data } = response
                setAtivos(data)
            }
        }

        async function projetosFinalizados() {
            const response = await api.get('/ong/projetos', {
                headers: { 'x-access-token': token, 'x-andamento': false }
            })

            if (response.status === 200) {
                const { data } = response
                setConcluidos(data)
            }
        }
        
        projetosAtivos()
        projetosFinalizados()
    }, [token]);

    function gotoDetails (id) {
        history.push(`/projetos/${id}`)
    }

    async function deleteProject (id) {
        try {
            const response = await api.delete('/projetos', {
                headers: { 'x-access-token': token, 'x-project-id': id }
            })
            alert(response.data.message)
        } catch (error) {
            alert('Erro ao cadastrar, tente novamente.')
        }
    }

    function criarList (projeto) {
        return (
            <List itemLayout="horizontal" key={projeto.id} className="ListContent">
                <h3 className="TitlePreview">{projeto.name}</h3>
                <div className="ProjectButtonsGroup">
                    <Button type="primary" className="ProjectButtons" onClick={() => gotoDetails(projeto.id)}><SearchOutlined />Detalhes</Button>
                    <Button type="danger" className="ProjectButtons" onClick={() => deleteProject(projeto.id)}><CloseOutlined />Excluir</Button>
                </div>    
            </List>
        )
    }

    return(
        <div id="ProjectPage">
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Projetos em andamento" key="1">
                { ativos.map(projeto => criarList(projeto)) }
                </Panel>
                <Panel header="Projetos finalizados" key="2">
                { concluidos.map(projeto => criarList(projeto)) }
                </Panel>
            </Collapse>
        </div>
    )
}

export default OptionsCollapse;