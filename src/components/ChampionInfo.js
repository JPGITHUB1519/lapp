import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cliploader from "react-spinners/ClipLoader";
import * as APIUtils from '../api/APIUtils';
import ChampionAvatar from './ChampionAvatar';
import { DATADRAGON_IMAGES_URL } from '../api/APIUtils';

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
          <div>
            <ChampionAvatar 
              image={`${DATADRAGON_IMAGES_URL}\\${championData.image && championData.image.group}\\splash\\${championData.id}_0.jpg`}
              alt={championData.name}
            />
            <p>Name: {championData.name}</p><br />
            <p>Title: {championData.title} </p><br />
            <p>Lore: {championData.lore} </p><br />
            {/* championData is not available on first render so we have to short circuit! */}
            <p>Role: {championData.tags ? championData.tags[0] : ''}</p><br />
            <p>Difficulty: {championData.info ? championData.info.difficulty : ''}</p><br />
          </div>
      }

      {isError && <p>Something went wrong 😥</p>}
    </div>
  );
}

export default ChampionInfo;
