const getFromLocalStorage = () => {
  const storedValue = localStorage.getItem("cart");
  if (storedValue) {
    return JSON.parse(storedValue);
  }
  return [];
};

const saveToLocalStorage = (value) => {
  const getData = localStorage.getItem("cart");
  if (!getData) {
    localStorage.setItem("cart", JSON.stringify([value]));
    return;
  }
  const parseData = JSON.parse(getData);
  parseData.push(value);
  localStorage.setItem("cart", JSON.stringify(parseData));
};

const removeFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem("cart");
  const parseData = JSON.parse(storedValue);

  const updatedValue = parseData.filter((item) => item !== key);
  localStorage.setItem("cart", JSON.stringify(updatedValue));
};

const addToLocalStorage = (key) => {
  saveToLocalStorage(key);
};

export {
  saveToLocalStorage as saveData,
  removeFromLocalStorage as removeData,
  addToLocalStorage as addData,
  getFromLocalStorage as getData,
};
