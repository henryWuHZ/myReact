import React from 'react';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link
} from 'react-router-dom';
import Greeter from "../greet";
import List from "./List";
import paths from './paths'

export default class MyRoute extends React.Component{
    render(){
        const getConfirmation = ()=>{
            // window.confirm("Before Go");
        };
        return(
            <Router getUserConfirmation={getConfirmation()}>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/list">List</Link>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/" component={Greeter}/>
                </div>
            </Router>
        );
    }
}