import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countCart from './countCart';
import {
    persistReducer,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter'],
  };

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        counter: countCart,
    })
)

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
