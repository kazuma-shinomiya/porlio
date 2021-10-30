import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';

function App() {
    return (
        <div>
            <Switch>
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