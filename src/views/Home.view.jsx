import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/App/App';
import Box1 from './Box1.view';
import Box2 from './Box2.view';
import Box3 from './Box3.view';
import Box4 from './Box4.view';

function HomeView() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/box1" component={Box1} />
                <Route path="/box2" component={Box2} />
                <Route path="/box3" component={Box3} />
                <Route path="/box4" component={Box4} />
            </Switch>
        </Router>
    )
}

export default HomeView;