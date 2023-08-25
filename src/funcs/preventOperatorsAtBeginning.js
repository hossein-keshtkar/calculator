export const preventOperatorsAtBeginning = (input) => {
  const regEx = /^\/|^\*/;
  if (regEx.test(input)) return;
};
