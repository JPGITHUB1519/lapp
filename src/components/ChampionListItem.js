import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import ChampionAvatar from './ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL } from '../api/APIUtils';

function ChampionListItem(props) {
  const champion = props.champion;
  const match = useRouteMatch();

  return (
    // do not use absoulute url to={/champions/....} it will be a headache to change it on the future
    <Link className="champions-list-item" to={`${match.url}/${champion.id}`}>
      <ChampionAvatar 
        image={`${DATADRAGON_VERSIONED_IMAGES_URL}\\${champion.image.group}\\${champion.image.full}`}
        alt={champion.name} 
        width={100}
        height={100}
      />
      <p>{champion.name}</p>
    </Link>
  );
}

ChampionListItem.propTypes = {
  champion: PropTypes.object
};

export default ChampionListItem;
