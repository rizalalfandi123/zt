import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  value: {
    isUserDraggingTodo: boolean;
    openedTodoForm: string | null;
  };
};

type UiReducers = {
  toggleIsDraggingTodo: (state: UiState, payload: PayloadAction<boolean>) => void;
  setOpenedTodoForm: (state: UiState, payload: PayloadAction<UiState["value"]["openedTodoForm"]>) => void;
};

const initialState: UiState = {
  value: {
    isUserDraggingTodo: false,
    openedTodoForm: null,
  },
};

const toggleIsDraggingTodo: UiReducers["toggleIsDraggingTodo"] = (state, { payload }) => {
  state.value.isUserDraggingTodo = payload;
};

const setOpenedTodoForm: UiReducers["setOpenedTodoForm"] = (state, { payload }) => {
  state.value.openedTodoForm = payload;
};

export const uiSlice = createSlice<UiState, UiReducers>({
  name: "USER_INTERFACES",
  initialState,
  reducers: {
    toggleIsDraggingTodo,
    setOpenedTodoForm,
  },
});

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
