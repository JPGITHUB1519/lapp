import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as Utils from '../Utils';
import * as APIUtils from '../api/APIUtils';
import ChampionsSearcher from './ChampionsSearcher';

function ChampionsInfo(props) {
  const [champions, setChampions] = useState([]);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await APIUtils.getAllChampions();
        setChampions(data);
        setFilteredChampions(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  function handleSearchInputChange(value) {
    setSearchValue(value);
    filterChampionsListByName(value);
  }

  function filterChampionsListByName(championName) {
    const filteredChampions = Utils.filterObjectByKey(champions, championName);
    setFilteredChampions(filteredChampions);
  }

  return (
    <div>
      {isLoading 
        ? <div>Loading...</div>
        : <ChampionsSearcher 
            champions={filteredChampions} 
            searchInputValue={searchValue}
            onSearchInputChange={handleSearchInputChange}
          />
      }
      {isError && <div>Something went wrong 😥</div>}
    </div>
  );
}

ChampionsInfo.propTypes = {};

export default ChampionsInfo;
