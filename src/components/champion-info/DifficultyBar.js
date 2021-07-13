import PropTypes from 'prop-types';

export default function DifficultyBar(props) {
  return (
    <div className="difficulty-bar">
      {/* filled columns */}
      {[...Array(props.level)].map((x, index) => {
        return <div className='difficulty-bar__fill difficulty-bar__fill--brown'></div>
      })}

      {/* unfilled columns = totalColumns - level */}
      {[...Array(props.totalColumns - props.level)].map((x, index) => {
       return <div className='difficulty-bar__fill difficulty-bar__fill'></div>
      })}
    </div>
  );
}

DifficultyBar.propTypes = {
  level: PropTypes.number,
  totalColumns: PropTypes.number
};

DifficultyBar.defaultProps = {
  totalColumns: 10
};

