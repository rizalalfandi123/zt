import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  value: {
    isUserDraggingTodo: boolean;
    openedForm: string | null;
  };
};

type UiReducers = {
  toggleIsDraggingTodo: (state: UiState, payload: PayloadAction<boolean>) => void;
  setOpenedForm: (state: UiState, payload: PayloadAction<UiState["value"]["openedForm"]>) => void;
};

const initialState: UiState = {
  value: {
    isUserDraggingTodo: false,
    openedForm: null,
  },
};

const toggleIsDraggingTodo: UiReducers["toggleIsDraggingTodo"] = (state, { payload }) => {
  state.value.isUserDraggingTodo = payload;
};

const setOpenedForm: UiReducers["setOpenedForm"] = (state, { payload }) => {
  state.value.openedForm = payload;
};

export const uiSlice = createSlice<UiState, UiReducers>({
  name: "USER_INTERFACES",
  initialState,
  reducers: {
    toggleIsDraggingTodo,
    setOpenedForm,
  },
});

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
