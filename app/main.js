import React from 'react';
import {render} from 'react-dom';
import MyRoute from './components/route';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import './main.css';

export default class Root extends React.Component {
    render(){
        return(
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <MyRoute/>
                </div>
        );
    }
}
render(<Root />, document.getElementById('root'));
