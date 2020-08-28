import React from 'react'
import { Layout, Descriptions  } from 'antd';
import './style.css';

const { Content } = Layout;

function feed() {
    return(
        <layout>
            <Content> 
                {/* aqui eu vou criar uma table pra ficar bonitinho ainda ok era so pra testar hehe */}
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                    No. 18, Wantang Road, Xihu District, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>,
            </Content>
        </layout>
    )
}
export default feed;