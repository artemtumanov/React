
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import profileReducer from './profile/reducer'
//import middleware from '../middlewares/middleware'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import gistsReducer from './gists/reducer';

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    gists: gistsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'MyApp',
    storage: storage
}

const persisterReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
    persisterReducer,
    composeEnhancer(applyMiddleware(thunk))
)
export const persistor = persistStore(store);