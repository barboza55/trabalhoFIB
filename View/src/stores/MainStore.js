import {
    applyMiddleware,
    createStore,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import rootReducer from '../reducers/index';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8009, host: 'localhost' });

export const history = createBrowserHistory();

export const store = createStore(
    persistReducer({
        key: 'rootCED',
        storage,
    }, combineReducers({
        ...rootReducer,
        router: connectRouter(history),
    })),
    composeEnhancers(
        applyMiddleware(
            thunk, routerMiddleware(history),
        )
    )
); 


export const persistor = persistStore(store);
