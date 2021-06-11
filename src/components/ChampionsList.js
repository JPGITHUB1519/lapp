import PropTypes from 'prop-types';
import ChampionListItem from './ChampionListItem';

function ChampionsList(props) {

  return (
    <div className="champions-list">
      {Object.keys(props.champions).map(key => {
        const champion = props.champions[key];

        return <ChampionListItem 
                key={champion.key}
                champion={champion}
              />;
      })}
    </div>
  );
}

ChampionsList.propTypes = {
  champions: PropTypes.object
};

export default ChampionsList;
