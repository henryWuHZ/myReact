import React, {Component} from 'react'
import config from './config.json';
import styles from './greet.css';

export default class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetConfig} + root
    </div>
    );
    }
}
