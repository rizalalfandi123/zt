import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type RemoveProjectFromFavourite = (state: ProjectState, payload: PayloadAction<string>) => void;

export const removeProjectFromFavourite: RemoveProjectFromFavourite = (state, { payload }) => {
  const projectContext = state.value[payload] ?? {};

  state.value[payload] = { ...projectContext, isFavourite: false };
};
