import PropTypes from 'prop-types';
import * as Config from '../config';
import ChampionsList from './ChampionsList';
import ChampionsFilters from './ChampionsFilters';
import ChampionsSearchForm from './ChampionsSearchForm.js';

function ChampionsSearcher(props) 
{
  return (
    <div className="champions-searcher">
      <ChampionsFilters 
        filters={['All', ...Config.championsTags]} 
        selectedTagFilter={props.selectedTagFilter}
        onFilterClick={props.onFilterClick} 
      />
      <ChampionsSearchForm value={props.searchValue} onInputChange={props.onSearchInputChange} />
      <ChampionsList champions={props.champions} />
    </div>
  );
};

ChampionsSearcher.propTypes = {
  champions: PropTypes.object,
  searchValue: PropTypes.string,
  selectedTagFilter: PropTypes.string,
  onSearchInputChange: PropTypes.func,
  onFilterClick: PropTypes.func
};

export default ChampionsSearcher;
