import { championsAbilitiesKeys } from './config';
import { getChampionAbilityVideoURL } from './api/APIUtils';


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

// sleep utility function, you can await it!
export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// champions link builds links generators
export const generateUggBuildLink = (championID) => {
  const link = `https://u.gg/lol/champions/${championID}/build`;
  return link;
};

export const generateOpggBuildLink = (championID) => {
  const link = `https://na.op.gg/champion/${championID}/statistics/`;
  return link;
};

export const generateProBuildLink = (championID) => {
  const link = `https://www.probuilds.net/champions/details/${championID}`;
  return link;
};

export const generateBlitzggLink = (championID) => {
  const link = `https://blitz.gg/lol/champions/${championID}`;
  return link;
};

export const generateChampionBuildLinks = (championID) => {
  return {
    'u.gg' : generateUggBuildLink(championID),
    'op.gg' : generateOpggBuildLink(championID),
    'probuilds': generateProBuildLink(championID),
    'blitz.gg': generateBlitzggLink(championID)
  };
};

export const getChampionAbilitiesVideosURLS = (championKey) => {
  const championAbilitiesVideosURLS = {};
  // destructuring to include champions passive too
  ['P', ...championsAbilitiesKeys].forEach((ability) => {
    championAbilitiesVideosURLS[ability] = getChampionAbilityVideoURL(championKey, ability);
  });

  return championAbilitiesVideosURLS;
}
