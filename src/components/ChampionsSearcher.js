import PropTypes from 'prop-types';
import ChampionsList from './ChampionsList';
import ChampionsFilters from './ChampionsFilters';
import ChampionsSearchInput from './ChampionsSearchInput';


function ChampionsSearcher(props) {
  return (
    <div className="champions-searcher">
      <ChampionsFilters />
      <ChampionsSearchInput />
      <ChampionsList champions={props.champions} />
    </div>
  );
};

ChampionsSearcher.propTypes = {
  champions: PropTypes.object
};

export default ChampionsSearcher;
