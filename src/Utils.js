export const filterObjectByKey = (object, filterKey) => {
  const filteredObject = Object.keys(object)
    .filter((key) => key.toLowerCase().includes(filterKey.toLowerCase()))
    .reduce((newObject, key) => {
      newObject[key] = object[key];
      return newObject;
    }, {});

  return filteredObject;
};

// filter champions by tag
export const filterChampionsByTag = (champions, tag) => {
  if (tag === 'All') {
    return champions;
  }

  const filteredData = Object.keys(champions)
    .filter((championKey) => {
      return champions[championKey].tags.includes(tag);
    })
    .reduce((newObject, key) => {
      newObject[key] = champions[key];
      return newObject;
    }, {});

  return filteredData;
};
