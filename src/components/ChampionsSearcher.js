import PropTypes from 'prop-types';
import ChampionsList from './ChampionsList';
import ChampionsFilters from './ChampionsFilters';
import ChampionsSearchInput from './ChampionsSearchInput';


function ChampionsSearcher(props) {
  return (
    <div className="champions-searcher">
      <ChampionsFilters />
      <ChampionsSearchInput />
      <ChampionsList />
    </div>
  );
};

ChampionsSearcher.propTypes = {};

export default ChampionsSearcher;
