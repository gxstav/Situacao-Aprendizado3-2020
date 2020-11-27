import React from 'react'
import { Layout, Descriptions, Tag, Button } from 'antd';
import { ShareAltOutlined, SearchOutlined} from '@ant-design/icons';
import './style.css';

function feed() {
    return(
        <Layout>
            <div id="container">
                <div className="FeedDescription">
                    <Tag>Refeição</Tag>
                    <Tag>Financeiro</Tag>
                    <Tag>Doações</Tag> 
                    <Descriptions className ="TitlteFeed" title="Nome do projeto">           
                    <Descriptions.Item span={3}>Lorem ipsum dolor sit amet. Nulla suscipit scelerisque velit. imperdiet bibendum,  tincidunt nibh, sed rutrum metus sem at ligula. Quisque vel sagittis nulla, et ullamcorper metus. Fusce at congue lacus. Maecenas fermentum libero pellentesque libero efficitur molestie. Aliquam pretium mauris Donec non ultricies mi, sit amet molestie lorem.</Descriptions.Item>
                    </Descriptions>
                </div>
                <br />
                <hr />
                <div className="groupbuttons">  
                    <div className="buttonsproject">
                         <Button type="primary"><SearchOutlined /> Saber Mais</Button>
                    </div>     
                    <div className="share">
                        <ShareAltOutlined />
                    </div>
                     </div>  
                       
            </div>
        </Layout>
    )
}
export default feed;