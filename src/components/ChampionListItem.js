import PropTypes from 'prop-types';
import ChampionAvatar from './ChampionAvatar';

function ChampionListItem(props) {
  return (
    <div className="champions-list-item">
      <ChampionAvatar 
        championImage={props.championImage} 
        championName={props.championName} 
        width={100}
        height={100}
      />
      <p>{props.championName}</p>
    </div>
  );
}

ChampionListItem.propTypes = {
  championImage: PropTypes.string,
  championName: PropTypes.string
};

export default ChampionListItem;
