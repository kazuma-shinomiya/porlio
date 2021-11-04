import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import PostDetail from './pages/PostDetail';
import Header from './components/Header';
import Login from './pages/Login';
import { AuthProvider } from './hooks/AuthContext';
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}