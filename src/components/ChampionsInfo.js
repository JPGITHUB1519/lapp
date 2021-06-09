import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cliploader from "react-spinners/ClipLoader";
import * as Config from '../config';
import * as Utils from '../Utils';
import * as APIUtils from '../api/APIUtils';
import ChampionsSearcher from './ChampionsSearcher';

function ChampionsInfo(props) {
  const [champions, setChampions] = useState([]);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('All');
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

  // setState callback simulation with hooks
  // if searchFilter or tag filter state changes, run filter function
  useEffect(() => {
    filterChampionsList();
  }, [searchFilter, tagFilter]);

  function handleSearchInputChange(searchValue) {
    // action is batched to excute it in the future, similar to setState
    setSearchFilter(searchValue);

    // do not do this
    //filterChampionsList();

  }

  function handleFilterClick(tagValue) {
    // action is batched to excute it in the future, similar to setState

    setTagFilter(tagValue);

     // do not do this
    //filterChampionsList();
  }

  function filterChampionsList() {
    let filteredData;
    // filtering by name
    filteredData = Utils.filterObjectByKey(champions, searchFilter);
    
    // after filtering by name, filter by tag
    filteredData = Utils.filterChampionsByTag(filteredData, tagFilter);
    
    // setting filtered data
    setFilteredChampions(filteredData);
  }

  return (
    <div className="champions-info">
      {isLoading 
        ? <div className="full-screen-loader-container">
            <Cliploader loading={isLoading} size={200} color="#C2902D" />
          </div>
        : <ChampionsSearcher 
            champions={filteredChampions} 
            searchInputValue={searchFilter}
            selectedTagFilter={tagFilter}
            onSearchInputChange={handleSearchInputChange}
            onFilterClick={handleFilterClick}
          />
      }
      {isError && <div>Something went wrong 😥</div>}
    </div>
  );
}

ChampionsInfo.propTypes = {};

export default ChampionsInfo;
