import React from 'react';
import {Layout, Menu, Row, Col, Icon} from 'antd';
import logo from '../../images/logo.png';
import mobilestyle from '../../css/mobile.css'

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'mail',
        };
        this.handleClick = (e) => {
            console.log('click ', e);
            this.setState({
                current: e.key,
            });
        };
    }

    render() {
        const {Header} = Layout;
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <Layout className="layout">
                <Row>
                    <Header className={mobilestyle.mobileheader}>
                        <img src={logo} alt="logo" className={mobilestyle.mobileheader_img}/>
                        <span className={mobilestyle.mobileheader_span}>企业员工交互平台</span>
                    </Header>
                </Row>
            </Layout>
        );
    }
}