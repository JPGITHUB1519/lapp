import PropTypes from 'prop-types';
import ChampionsList from './ChampionsList';
import ChampionsFilters from './ChampionsFilters';
import ChampionsSearchForm from './ChampionsSearchForm.js';


function ChampionsSearcher(props) {
  return (
    <div className="champions-searcher">
      <ChampionsFilters />
      <ChampionsSearchForm value={props.searchValue} onInputChange={props.onSearchInputChange} />
      <ChampionsList champions={props.champions} />
    </div>
  );
};

ChampionsSearcher.propTypes = {
  champions: PropTypes.object,
  searchValue: PropTypes.string,
  onSearchInputChange: PropTypes.func
};

export default ChampionsSearcher;
