import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL } from '../../api/APIUtils';
import { championsAbilitiesKeys } from '../../config';
import * as Utils from '../../Utils';
import BackgroundButton from '../button/BackgroundButton';
import ChampionAbilityVideo from './ChampionAbilityVideo';
function ChampionAbilitiesInfo(props) {
  const [selectedAbility, setSelectedAbility] = useState();
  // using useRef hook for non state variables in functional components (like class fields)
  const championAbilitiesVideos = useRef();

  const { championData } = props;

  useEffect(() => {
    championAbilitiesVideos.current = Utils.getChampionAbilitiesVideosURLS(championData.key);
    handleSelectedAbilityChange('passive');
  }, []);

  function handleSelectedAbilityChange(id, index) {
    // passive is a diferent key from spells so we have to treat it differently
    if (id === 'passive') {
      setSelectedAbility({
        id: 'passive',
        key: 'P',
        data: championData.passive,
        videoURL: championAbilitiesVideos.current['P']
      });
    } else {
      // there is not way to get the ability key from the API so we will need to map the index to the key
      // for example: [0 => Q, 1 => W, 2 => E, 3 => R];
      const abilityKey = championsAbilitiesKeys[index];
      setSelectedAbility({
        id: id,
        key: abilityKey,
        data: championData.spells.filter(spell => {
          return spell.id === id
        })[0],
        videoURL: championAbilitiesVideos.current[abilityKey]
      })
    }
  }

  if (!selectedAbility) {
    return null;
  }

  return (
    <div className="champion-abilities-info">
      <h2>Abilities</h2>
      <div className="champion-abilities-info__menu">
        <BackgroundButton 
          className={'passive' === selectedAbility.id ? 'selected' : ''}
          image={`${DATADRAGON_VERSIONED_IMAGES_URL}/${championData.passive.image.group}/${championData.passive.image.full}`}
          width={65}
          height={65}
          onClick={() => handleSelectedAbilityChange('passive')}
        />
        {championData.spells.map((spell, index) => {
          return (
            <BackgroundButton 
              className={spell.id === selectedAbility.id ? 'selected' : ''}
              image={`${DATADRAGON_VERSIONED_IMAGES_URL}/${spell.image.group}/${spell.image.full}`}
              width={65}
              height={65}
              onClick={() => handleSelectedAbilityChange(spell.id, index)}
            />
          );
        })}
        <div className="champion-abilities-info__description">
          <ChampionAbilityVideo url={selectedAbility.videoURL} />
          <p className="champion-abilities-info__ability-type">{selectedAbility.key} - {selectedAbility.id}</p>
          <p className="champion-abilities-info_ability-name">{selectedAbility.data.name}</p>
          <p className="champion-abilities-info__ability-description">{selectedAbility.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChampionAbilitiesInfo;

ChampionAbilitiesInfo.propTypes = {
  championData: PropTypes.object
};
