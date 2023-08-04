import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { appSettingsReducer } from "./app-settings.slice";
import { todoReducer } from "./todo.slice";
import { uiReducer } from "./ui.slice";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "zal-todo",
  storage,
  blacklist: ["ui"],
};

const rootReducers = combineReducers({ appSettings: appSettingsReducer, todo: todoReducer, ui: uiReducer });

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
