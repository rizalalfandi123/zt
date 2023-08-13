import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { appSettingsReducer } from "./app-settings.slice";
import { uiReducer } from "./ui.slice";
import { projectReducers } from "@/stores/project-store";
import { todoBoardReducers } from "@/stores/todo-column-store";

import { localForageStorage } from "@/lib";

const allReducers = combineReducers({
  appSettings: appSettingsReducer,
  ui: uiReducer,
  projects: projectReducers,
  todoBoard: todoBoardReducers,
});

const rootReducers = persistReducer({ key: "ZAL_TODO", storage: localForageStorage, blacklist: ["ui"] }, allReducers);

const store = configureStore({
  reducer: rootReducers,
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
