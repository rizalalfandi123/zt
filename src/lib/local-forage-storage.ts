import localforage from "localforage";

import { WebStorage } from "redux-persist";

export const localForageStorage: WebStorage = {
  getItem: (key) => localforage.getItem(key),
  setItem: async (key, value) => {
    await localforage.setItem(key, value);
  },
  removeItem: (key) => localforage.removeItem(key),
};
