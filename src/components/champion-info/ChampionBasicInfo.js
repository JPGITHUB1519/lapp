import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import ChampionBuildLinks from '../ChampionBuildLinks';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL } from '../../api/APIUtils';
import DifficultyBar from './DifficultyBar';
import RoleSVG from '../svgs/RoleSVG';
import * as Utils from '../../Utils';

function ChampionBasicInfo(props) {
  const { championData } = props;

  return (
    <div className="champion-basic-info">
      <ChampionAvatar 
        image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_0.jpg`}
        alt={championData.name}
      />
      <div className="champion-basic-info__info">
        <h2 className="champion-basic-info__champion-title">{Utils.capitalize(championData.title)}</h2>
        <h2 className="champion-basic-info__champion-name">{championData.name}</h2>
        <p className="champion-basic-info__champion-lore">{championData.lore} </p>
        {/* championData is not available on first render so we have to short circuit! */}
        <div className="champion-basic-info__champion-role">
          <RoleSVG role={championData.tags[0]} /> Role: {championData.tags ? championData.tags[0] : ''}
        </div>
        <div className="champion-basic-info__difficulty">          
          <p>Difficulty: ({championData.info.difficulty}/10)</p>
          <DifficultyBar level={championData.info.difficulty} />
          <ChampionBuildLinks championID={championData.id} />
        </div>

      </div>
    </div>
  )
}

export default ChampionBasicInfo;

ChampionBasicInfo.propTypes = {
  championData: PropTypes.object
};
