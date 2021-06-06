import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as APIUtils from '../api/APIUtils';
import ChampionsSearcher from './ChampionsSearcher';

function ChampionsInfo(props) {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await APIUtils.getAllChampions();
        setChampions(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div>
      {isLoading 
        ? <div>Loading...</div>
        : <ChampionsSearcher champions={champions} />
      }
      {isError && <div>Something went wrong 😥</div>}
    </div>
  );
}

ChampionsInfo.propTypes = {};

export default ChampionsInfo;
