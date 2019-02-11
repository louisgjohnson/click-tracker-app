const save = ({ key, data }) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const load = key => {
  const jsonData = window.localStorage.getItem(key);
  if (jsonData) return JSON.parse(jsonData);
  return null;
};

export { save, load };
