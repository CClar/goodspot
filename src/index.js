import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import PostingList from './components/PostingList/PostingList';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App}>></Route>
            <Route path='/postings' component={PostingList}>></Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
