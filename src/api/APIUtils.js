import axios from 'axios';

const LOL_VERSION = '11.11.1';
const LANGUAGE = 'en_US';
const DATADRAGON_CDN_URL = 'https://ddragon.leagueoflegends.com/cdn';
const DATADRAGON_API_URL = 'https://ddragon.leagueoflegends.com/api';
const DATADRAGON_DATA_FILES_URL = `${DATADRAGON_CDN_URL}/${LOL_VERSION}/data/${LANGUAGE}`;
export const DATADRAGON_IMAGES_URL = `${DATADRAGON_CDN_URL}/${LOL_VERSION}\\img`; 

export const getAvailableLanguages = async () => {
  const result = await axios(`${DATADRAGON_CDN_URL}/languages.json`);

  return result.data;
};

// get the latest datadragon version
export const getLatestVersion = async () => {
  let latestVersion;
  const result = await axios(`${DATADRAGON_API_URL}/versions.json`);

  if (result.data) {
    latestVersion = result.data[0];
  }
  return latestVersion;
};

// get all the datadragon versions
export const getVersions = async () => {
  const result = await axios(`${DATADRAGON_API_URL}/versions.json`);
  return result.data;
};

// get all lol champions data
export const getAllChampions = async () => {
  const result = await axios(`${DATADRAGON_DATA_FILES_URL}/champion.json`);
  const championsData = result.data.data;

  return championsData;
};
