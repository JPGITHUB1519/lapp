import { useState } from 'react';
import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL, getChampionAbilityVideoURL } from '../../api/APIUtils';
import BackgroundButton from '../button/BackgroundButton';
import * as Utils from '../../Utils';

function ChampionAbilitiesInfo(props) {
  const [selectedAbility, setSelectedAbility] = useState('passive');

  const { championData } = props;

  // ability selection logic
  let selectedAbilityData;
  // passive is a diferent key from spells so we have to treat it differently
  if (selectedAbility === 'passive') {
    selectedAbilityData= championData.passive;
  } else {
    selectedAbilityData = championData.spells.filter(spell => {
      return spell.id === selectedAbility
    })[0];
  }
  

  console.log(selectedAbilityData);

  return (
    <div className="champion-abilities-info">
      <h2>Abilities</h2>
      <div className="champion-abilities-info__menu">
        <BackgroundButton 
          className={'passive' === selectedAbility ? 'selected' : ''}
          image={`${DATADRAGON_VERSIONED_IMAGES_URL}/${championData.passive.image.group}/${championData.passive.image.full}`}
          width={65}
          height={65}
          onClick={() => setSelectedAbility('passive')}
        />
        {championData.spells.map(spell => {
          return (
            <BackgroundButton 
              className={spell.id === selectedAbility ? 'selected' : ''}
              image={`${DATADRAGON_VERSIONED_IMAGES_URL}/${spell.image.group}/${spell.image.full}`}
              width={65}
              height={65}
              onClick={() => setSelectedAbility(spell.id)}
            />
          );
        })}
        <div className="champion-abilities-info__description">
          <p className="champion-abilities-info__ability-type">{selectedAbility}</p>
          <p className="champion-abilities-info_ability-name">{selectedAbilityData.name}</p>
          <p className="champion-abilities-info__ability-description">{selectedAbilityData.description}</p>
        </div>
      </div>
      {/* {championData.spells.map(spell => {
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
      })} */}
    </div>
  );
}

export default ChampionAbilitiesInfo;

ChampionAbilitiesInfo.propTypes = {
  championData: PropTypes.object
};
