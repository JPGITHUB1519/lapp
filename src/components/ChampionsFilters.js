import PropTypes from 'prop-types';
import ChampionFilter from './ChampionFilter';

function ChampionsFilters(props) {
  return (
    <div className="champions-filter">
      {props.filters.map(filter => {
        return <ChampionFilter 
                filterName={filter} 
                onClick={props.onFilterClick} 
                selected={filter === props.selectedTagFilter}
              />
      })}
    </div>
  );
}

ChampionsFilters.propTypes = {
  filters: PropTypes.array,
  selectedTagFilter: PropTypes.string,
  onFilterClick: PropTypes.func
};

export default ChampionsFilters;
