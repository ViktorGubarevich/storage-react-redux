export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    const db = {
      users: {
        "admin": {
          "password": "12345"
        },
        "admin2": {
          "password": "123456"
        }
      }
    };
    if (serializedState) {
      return { ...db, ...JSON.parse(serializedState) };
    }
    return db;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('We received an error while saving the store');
  }
};
