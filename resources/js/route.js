import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import PostDetail from './pages/PostDetail';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/posts/show/:id" component={PostDetail} />
                <Route exact path="/" component={Top}　/>
            </Switch>
        </div>
    );
}

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('app'))