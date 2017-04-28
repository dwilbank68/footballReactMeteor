import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../imports/ui/App.jsx';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

Meteor.startup(
    () => {
        ReactDOM.render(
            <Router history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/new" component={New} />
            </Router>,
            document.querySelector('#render-target')
        );
    }
);