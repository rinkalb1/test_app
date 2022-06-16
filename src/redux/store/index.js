import { createStore } from 'redux';
import rootReducer from '../reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { api } from '../../helper/userApi'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
            serializableCheck: false,
        }),
})

export default store;
