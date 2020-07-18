import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getContentfulProjects } from './Queries/index';
import App from './App'
import ProjectPage from './Components/ProjectPage'
import About from './Components/About'


const MyRouter = () => {

    let [project, getProjects] = useState({})


    const getPost = async () => {
        const theData = await getContentfulProjects();
        getProjects(theData);
    }

    useEffect(() => {
        getPost()
    }, [])


    return (
        <Router>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                {project.items && project.items.map((proj, i) => {
                    return <Link to={`/${proj.fields.title}`}> {proj.fields.title} </Link>
                })}
            </nav>
            <Switch>
                {project.items && project.items.map((proj, i) => {
                    return <Route exact path={`/${proj.fields.title}`} render={() => <ProjectPage content={proj} />} />
                })}
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={App} />

            </Switch>
        </Router >
    )
}

export default MyRouter;