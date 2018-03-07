import React from 'react';
import {render} from 'react-dom';
import './main.css';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobile/mobileIndex';
export default class Root extends React.Component {
    render(){
        return(
                <div>
                    <MediaQuery query='(min-device-width: 1224px)'>
                    {/*<MyRoute/>*/}
                        <PCIndex/>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width: 1224px)'>
                        <MobileIndex/>
                    </MediaQuery>
                </div>
        );
    }
}
render(<Root />, document.getElementById('root'));
