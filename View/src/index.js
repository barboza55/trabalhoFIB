import React from 'react';
import { Provider } from 'react-redux';
import { store, history, persistor } from '../src/stores/MainStore';
import { ConnectedRouter } from 'connected-react-router';
import { render } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const Main = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
);

// $FlowFixMe
render(<Main/>, document.getElementById('root'));
