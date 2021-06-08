import PropTypes from 'prop-types';

function ChampionFilter(props) {
  function handleClick(event) {
    props.onClick(props.filterName);
  }
  return (
    <button 
      onClick={handleClick} 
      className={`tag-filter-button ${props.selected ? 'tag-filter-button--selected' : ''}`}>
        {props.filterName}
    </button>
  );
}

export default ChampionFilter;

ChampionFilter.propTypes = {
  filterName: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};
