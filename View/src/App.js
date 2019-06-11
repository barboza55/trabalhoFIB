import './index.css';
import React from 'react';
import Teste from '../src/cadastro/teste';
import login from '../src/Login/login';
import cadastro from '../src/cadastro/cadastro';
import dashboard from '../src/Dashboard/dashboard';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard" component={dashboard} />
                    <Route exact path="/" component={login} />
                    <Route exact path="/cadastro" component={cadastro} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
