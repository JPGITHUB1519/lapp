import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cliploader from "react-spinners/ClipLoader";
import * as APIUtils from '../api/APIUtils';
import ChampionAvatar from './ChampionAvatar';
import ChampionBuildLinks from './ChampionBuildLinks';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL } from '../api/APIUtils';

function ChampionInfo(props) {
  const [championData, setChampionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  let { championID } = useParams();

  // use effect runs after the first render
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const data = await APIUtils.getChampionById(championID);
        setChampionData(data[championID]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  

  return (
    <div className="champion-info">
      {isLoading
        ? <div className="full-screen-loader-container">
            <Cliploader loading={isLoading} size={200} color="#C2902D" />
          </div>
        : Object.keys(championData).length > 0 && 
          <>
            <ChampionAvatar 
              image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_0.jpg`}
              alt={championData.name}
            />
            <ChampionBuildLinks championID={championData.id} />

            <p>Name: {championData.name}</p><br />
            <p>Title: {championData.title} </p><br />
            <p>Lore: {championData.lore} </p><br />
            {/* championData is not available on first render so we have to short circuit! */}
            <p>Role: {championData.tags ? championData.tags[0] : ''}</p><br />
            <p>Difficulty: {championData.info ? championData.info.difficulty : ''}</p><br />
            <h2>Abilities</h2>
            <ChampionAvatar 
              image={`${DATADRAGON_VERSIONED_IMAGES_URL}\\${championData.passive.image.group}\\${championData.passive.image.full}`} 
              alt={championData.passive.name}
            />
            <p>Passive - {championData.passive.name}</p>
            <p>{championData.passive.description}</p>
            {championData.spells.map(spell => {
              return (
                <div>
                  <ChampionAvatar 
                    image={`${DATADRAGON_VERSIONED_IMAGES_URL}\\${spell.image.group}\\${spell.image.full}`} 
                    alt={spell.name}
                  />
                  <b>{spell.name}</b>
                  <p>{spell.description}</p>
                  <br></br>
                </div>
              );
            })}
            <br></br>
            <h2>Skins:</h2>
            {championData.skins.map(skin => {
              return (
                <>
                  <p>{skin.name}</p>
                  <ChampionAvatar 
                    image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_${skin.num}.jpg`} 
                    alt={skin.name}
                    width={500}
                    height={300}
                  />
                </>
              );
            })}            
          </>
      }

      {isError && <p>Something went wrong 😥</p>}
    </div>
  );
}

export default ChampionInfo;
