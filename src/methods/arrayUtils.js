const removeLastItem = (array = []) => {
  const arrayToMutate = [...array];
  const lastIndex = array.length - 1;
  arrayToMutate.splice(lastIndex, 1);
  return arrayToMutate;
};

const addItem = (array = [], item) => (item ? [...array, item] : array);

export { removeLastItem, addItem };
