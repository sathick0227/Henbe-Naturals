import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartReducer'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const reducer=combineReducers({
   product: cartReducer
});

const persistedReducer = persistReducer(persistConfig,reducer)

export const store=configureStore({
   reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});