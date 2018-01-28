import React, {Component} from 'react'
import config from '../config.json';
export default class List extends Component{
    render() {
        return (
            <div>
                {config.listConfig}
            </div>
        );
    }
}
