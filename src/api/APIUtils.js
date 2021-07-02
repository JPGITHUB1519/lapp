import axios from 'axios';
import * as Utils from '../Utils';

const LOL_VERSION = '11.11.1';
const LANGUAGE = 'en_US';
const DATADRAGON_CDN_URL = 'https://ddragon.leagueoflegends.com/cdn';
const DATADRAGON_API_URL = 'https://ddragon.leagueoflegends.com/api';
const DATADRAGON_DATA_FILES_URL = `${DATADRAGON_CDN_URL}/${LOL_VERSION}/data/${LANGUAGE}`;
export const DATADRAGON_VERSIONED_IMAGES_URL = `${DATADRAGON_CDN_URL}/${LOL_VERSION}/img`;
// not versioned images
export const DATADRAGON_IMAGES_URL = `${DATADRAGON_CDN_URL}/img`; 

// champions abilities cdn
// https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm
const CHAMPION_ABILITIES_VIDEOS_CDN = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities';

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

// get champion indiviaual data by ID
export const getChampionById = async (championID) => {
  const result = await axios(
    `${DATADRAGON_DATA_FILES_URL}/champion/${championID}.json`
  );
  
  const data = result.data.data;

  return data;
};

export const getChampionAbilityVideoURL = (championKey, ability) => {
  const championIdentifier = championKey.padStart(4, '0');
  const videoFormat = '.webm';
  const url = `${CHAMPION_ABILITIES_VIDEOS_CDN}/${championIdentifier}/ability_${championIdentifier}_${ability}1${videoFormat}`;
  return url;
  //https://d28xe8vt774jo5.cloudfront.net/champion-abilities/00${champion.id}/ability_00
};
