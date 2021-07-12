import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import ChampionBuildLinks from '../ChampionBuildLinks';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL } from '../../api/APIUtils';
import RoleSVG from '../svgs/RoleSVG';

function ChampionBasicInfo(props) {
  const { championData } = props;

  return (
    <div className="champion-basic-info">
      <ChampionAvatar 
        image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_0.jpg`}
        alt={championData.name}
      />
      <ChampionBuildLinks championID={championData.id} />
      <div className="champion-basic-info__info">
        <h2 className="champion-basic-info__champion-title">{championData.title}</h2>
        <h2 className="champion-basic-info__champion-name">{championData.name}</h2>
        <p className="champion-basic-info__champion-lore">{championData.lore} </p><br />
        {/* championData is not available on first render so we have to short circuit! */}
        <p><RoleSVG role={championData.tags[0]} /> Role: {championData.tags ? championData.tags[0] : ''}</p><br />
        <p>Difficulty: {championData.info ? championData.info.difficulty : ''}</p><br />
      </div>
    </div>
  )
}

export default ChampionBasicInfo;

ChampionBasicInfo.propTypes = {
  championData: PropTypes.object
};
