import React, {forwardRef, useImperativeHandle} from 'react';
import './style.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import DrawerHeroes from '../../components/DrawerHeroes'
import { Layout, Button } from 'antd';
import { PlusOutlined  } from '@ant-design/icons'
import ReactDOM from 'react-dom'
 

const Login = forwardRef((props,ref) => {

    const [display, setDisplay] = React.useState(false)

    useImperativeHandle(ref, () => {
        return{
            openModal: () => open(),
             close: () => close()   
        }

    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false);
    }

    if(display){

    return ReactDOM.createPortal(
    <div className={"modal-wrapper"}>
    <div onClick={close} className={"modal-backdrop"}/>
    <div className={"modal-box"}>
        {props.children}   
                          
    </div>
    </div>, document.getElementById("modal-root")    
    )       
    
    }
    return null;
});

export default Login;