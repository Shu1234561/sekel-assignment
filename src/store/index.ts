import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countCart from './countCart';
import cart from './cart';
import {
    persistReducer,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter', 'cart'],
  };

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        counter: countCart,
        cart: cart
    })
)

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
