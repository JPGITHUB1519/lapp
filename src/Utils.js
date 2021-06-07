export const filterObjectByKey = (object, filterKey) => {
  const filteredObject = Object.keys(object)
    .filter((key) => key.toLowerCase().includes(filterKey.toLowerCase()))
    .reduce((newObject, key) => {
      newObject[key] = object[key];
      return newObject;
    }, {});

  return filteredObject;
};
