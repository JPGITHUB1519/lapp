import PropTypes from 'prop-types';

function ChampionFilter(props) {
  return (
    <button>{props.filterName}</button>
  );
}

export default ChampionFilter;

ChampionFilter.propTypes = {};
