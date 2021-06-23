import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL, getChampionAbilityVideoURL } from '../../api/APIUtils';

function ChampionAbilitiesInfo(props) {
  const { championData } = props;

  return (
    <div className="champion-abilities-info">
      <h2>Abilities</h2>
      <ChampionAvatar 
        image={`${DATADRAGON_VERSIONED_IMAGES_URL}\\${championData.passive.image.group}\\${championData.passive.image.full}`} 
        alt={championData.passive.name}
      />
      <p>Passive - {championData.passive.name}</p>
      <p>{championData.passive.description}</p>

      {championData.spells.map(spell => {
        return (
          <div>
            <ChampionAvatar 
              image={`${DATADRAGON_VERSIONED_IMAGES_URL}\\${spell.image.group}\\${spell.image.full}`} 
              alt={spell.name}
            />
            <b>{spell.name}</b>
            <p>{spell.description}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default ChampionAbilitiesInfo;

ChampionAbilitiesInfo.propTypes = {
  championData: PropTypes.object
};
