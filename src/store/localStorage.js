export const loadState = () => {
  const serializedState = localStorage.getItem("state");

  if (serializedState) {
    return JSON.parse(serializedState);
  } else {
    return {};
  }
};

export const saveState = (state) => {
  localStorage.setItem(
    "state",
    JSON.stringify({
      ...loadState(),
      ...state,
    })
  );
};
