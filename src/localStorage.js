const stateKey = "state";

export const loadState = () => {
  try {
    const restoredState = localStorage.getItem(stateKey);
    if (restoredState === null) {
      return undefined;
    }

    return JSON.parse(restoredState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem(stateKey, JSON.stringify(state));
  } catch (err) {
    // Ignore
  }
};
