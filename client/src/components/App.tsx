import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/create/StreamCreate';
import StreamEdit from './streams/edit/StreamEdit';
import StreamDelete from './streams/delete/StreamDelete';
import StreamList from './streams/list/StreamList';
import StreamShow from './streams/show/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      {/* Not using BrowserRouter since we want to maintain the history by ourselves so we can access the history in action creator */}
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id"  component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
