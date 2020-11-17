import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import DrawerHeroes from '../../components/DrawerHeroes'
import { Layout, Button } from 'antd';
import { PlusOutlined  } from '@ant-design/icons'

function Novo(){

  return(alert("TESTE"))
}

/*

class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  }; 
  
}

*/



function Projetos (){

const [display, setDisplay] = React.useState(false)

const open = () => {
  setDisplay(true)
}

const close = () => {
  setDisplay(false);
}

const drawerRef = React.useRef();  

  const openDrawer = () => {
    drawerRef.current.openDrawer()
  }

  
    return(
    <div id="ProjectPage">
        <Layout>
            <Navbar />
            <DrawerHeroes ref={drawerRef}/>
                <div className ="backgroundContainer">
                    <div className ="newProjectButton">
                        <Button type="primary" onClick={openDrawer}><PlusOutlined /> Novo projeto</Button>
                    </div>
                    <hr />
                    <br />
                    <Collapse />
                </div>
            <Footer />
        </Layout>

    </div>
    )
} 

export default Projetos;