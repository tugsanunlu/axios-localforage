import localForageStore from "./localForageStore.js";

document.querySelector("#btnGetData").addEventListener("click", () => {
  localForageStore().then(async (githubAPI) => {
    await githubAPI.get("/users/tugsanunlu").then((resp) => {
      document.querySelector("#listData").innerHTML = JSON.stringify(resp.data);
    });
  });
});
