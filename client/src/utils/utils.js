export const deepEqual = (a, b) => {
  for (const key in a) {
    if (b.hasOwnProperty(key)) {
      if (b[key] !== a[key]) return false;
    }
  }
  return true;
};
