import { loadState } from "../store/localStorage";

export const logIn = (username, password) =>
  new Promise((resolve, reject) => {
    const store = loadState().users;

    if (typeof store[username] === "undefined") {
      reject(new Error("Incorrect username."));
    } else if (store[username].password !== password) {
      reject(new Error("Incorrect password."));
    } else {
      resolve();
    }
  });

export const signUp = (username, password) =>
  new Promise((resolve, reject) => {
    const store = loadState().users;

    if (typeof store[username] === "undefined") {
      reject(new Error("Incorrect username."));
    } else if (store[username].password !== password) {
      reject(new Error("Incorrect password."));
    } else {
      resolve();
    }
  });
