import PropTypes from 'prop-types';
import ChampionFilter from './ChampionFilter';

function ChampionsFilters(props) {
  return (
    <div className="champions-filter">
      <ChampionFilter filterName="Top" />
      <ChampionFilter filterName="Jungle" />
      <ChampionFilter filterName="Mid" />
      <ChampionFilter filterName="Bottom" />
      <ChampionFilter filterName="Support" />
    </div>
  );
}

ChampionsFilters.propTypes = {};

export default ChampionsFilters;
