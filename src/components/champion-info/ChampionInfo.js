import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cliploader from "react-spinners/ClipLoader";
import * as APIUtils from '../../api/APIUtils';
import ChampionAvatar from '../ChampionAvatar';
import ChampionBuildLinks from '../ChampionBuildLinks';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL, getChampionAbilityVideoURL } from '../../api/APIUtils';
import * as Utils from '../../Utils';
import ChampionBasicInfo from './ChampionBasicInfo';
import ChampionAbilitiesInfo from './ChampionAbilitiesInfo';
import ChampionSkinsGallery from './ChampionSkinsGallery';

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

  // if (Object.keys(championData).length > 0) {
  //   const abilitiesVideosUrl = Utils.getChampionAbilitiesVideosURLS(championData.key)
  //   console.log(abilitiesVideosUrl);
  // }

  //console.log(getChampionAbilityVideoURL(championData.key, 'Q'));


  return (
    <div className="champion-info">
      {isLoading
        ? <div className="full-screen-loader-container">
            <Cliploader loading={isLoading} size={200} color="#C2902D" />
          </div>
        : Object.keys(championData).length > 0 && 
          <>
            <ChampionBasicInfo championData={championData} />
            <ChampionAbilitiesInfo championData={championData} />
            <ChampionSkinsGallery championData={championData} />
            <br></br>          
          </>
      }

      {isError && <p>Something went wrong 😥</p>}
    </div>
  );
}

export default ChampionInfo;
