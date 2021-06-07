import PropTypes from 'prop-types';
import ChampionListItem from './ChampionListItem';
import { DATADRAGON_IMAGES_URL } from '../api/APIUtils';

function ChampionsList(props) {

  return (
    <div className="champions-list">
      {Object.keys(props.champions).map(key => {
        const champion = props.champions[key];

        return <ChampionListItem 
                championName={champion.name}
                championImage={`${DATADRAGON_IMAGES_URL}\\${champion.image.group}\\${champion.image.full}`} 
              />;
      })}
    </div>
  );
}

ChampionsList.propTypes = {
  champions: PropTypes.object
};

export default ChampionsList;
