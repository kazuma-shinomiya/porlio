import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import PostDetail from './pages/PostDetail';
import Header from './components/Header';
import Login from './pages/Login';
import { AuthProvider } from './hooks/AuthContext';

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Switch>
                    <Route exact path="/posts/show/:id" component={PostDetail} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Top}　/>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}