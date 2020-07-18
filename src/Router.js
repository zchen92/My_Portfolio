import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getContentfulNav, getContentfulProjects } from './Queries/index';
import App from './App'

class MyRouter extends React.Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </Router>
    )}
}

export default MyRouter;