import { setup } from "axios-cache-adapter";
import localforage from "localforage";

const localForageStore = async () => {
  const store = localforage.createInstance({
    driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
    name: "githuhCacheDB",
  });

  return setup({
    baseURL: "https://api.github.com",
    cache: {
      store,
      maxAge: 86400000, // 1 day
    },
  });
};

export default localForageStore;
