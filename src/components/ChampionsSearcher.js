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
        filters={['All', ...Config.championsRoles.map(role => role.name)]} 
        selectedTagFilter={props.selectedTagFilter}
        onFilterClick={props.onFilterClick} 
      />
      <ChampionsSearchForm value={props.searchValue} onInputChange={props.onSearchInputChange} />
      {Object.keys(props.champions).length > 0 
        ? <ChampionsList champions={props.champions} />
        : <div className="no-champions-notification-container">
            <p>No champions match the filter criteria.</p>
          </div>
      } 
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
