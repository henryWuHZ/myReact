import React from 'react';
import {render} from 'react-dom';
import PCHeader from './components/pcHeader'
import './main.css';

export default class Root extends React.Component {
    render(){
        return(
                <div>
                    {/*<MyRoute/>*/}
                    <PCHeader/>
                </div>
        );
    }
}
render(<Root />, document.getElementById('root'));
