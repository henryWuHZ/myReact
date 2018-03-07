import React from 'react';
import { Layout, Menu,  Row, Col, Icon } from 'antd';
import pcHeaderStyle from '../css/public.css';
import logo from '../images/logo.png';


export default class PCHeader extends React.Component{
    constructor(){
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

    render(){
        const { Header} = Layout;
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <Layout className="layout">
                <Row>
                    <Header className={pcHeaderStyle.pcHeader}>
                        <Col span={4}>
                            <a href="/" className={pcHeaderStyle.logo}>
                                <img src={logo} alt="logo"/>
                                <span>企业员工交互平台</span>
                            </a>
                        </Col>
                        <Col span={16}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                style={{background: 'darkkhaki'}}
                            >
                                <Menu.Item key="mail">
                                    <Icon type="mail" />Navigation One
                                </Menu.Item>
                                <Menu.Item key="app" disabled>
                                    <Icon type="appstore" />Navigation Two
                                </Menu.Item>
                                <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <Menu.Item key="alipay">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={4}>

                        </Col>
                    </Header>
                </Row>
            </Layout>
        );
    }
}