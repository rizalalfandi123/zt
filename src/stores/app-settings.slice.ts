import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AppTheme, ScreenMode } from "@/schema-and-types";

type AppSettingsState = {
  value: {
    screenMode: ScreenMode;
    theme: AppTheme;
    sidebarWidth: number;
    hideSidebar: boolean;
  };
};

type AppSettingsReducers = {
  toggleScreenMode: (state: AppSettingsState) => void;
  setAppTheme: (state: AppSettingsState, payload: PayloadAction<{ mode: ScreenMode; theme: string }>) => void;
  setSidebarWidth: (state: AppSettingsState, payload: PayloadAction<number>) => void;
  toggleSidebar: (state: AppSettingsState) => void;
};

const initialState: AppSettingsState = {
  value: {
    screenMode: "light",
    theme: {
      dark: "slate",
      light: "red",
    },
    sidebarWidth: 240,
    hideSidebar: false,
  },
};

const toggleScreenMode: AppSettingsReducers["toggleScreenMode"] = (state) => {
  const cureentValue: ScreenMode = (document.documentElement.dataset["screenMode"] as ScreenMode) ?? "light";

  if (cureentValue === "light") {
    document.documentElement.dataset["screenMode"] = "dark";
    state.value.screenMode = "dark";
  } else {
    document.documentElement.dataset["screenMode"] = "light";
    state.value.screenMode = "light";
  }
};

const setAppTheme: AppSettingsReducers["setAppTheme"] = (state, { payload }) => {
  state.value.theme[payload.mode] = payload.theme;
};

const setSidebarWidth: AppSettingsReducers["setSidebarWidth"] = (state, { payload }) => {
  state.value.sidebarWidth = payload;
};

const toggleSidebar: AppSettingsReducers["toggleSidebar"] = (state) => {
  state.value.hideSidebar = !state.value.hideSidebar;
};

const appSettingsSlice = createSlice<AppSettingsState, AppSettingsReducers>({
  name: "APP_SETTINGS",
  initialState,
  reducers: {
    toggleScreenMode,
    setAppTheme,
    setSidebarWidth,
    toggleSidebar,
  },
});

export const { actions: appSettingsActions, reducer: appSettingsReducer } = appSettingsSlice;
