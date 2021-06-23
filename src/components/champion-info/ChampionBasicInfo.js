import PropTypes from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import ChampionBuildLinks from '../ChampionBuildLinks';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL } from '../../api/APIUtils';

function ChampionBasicInfo(props) {
  const { championData } = props;

  return (
    <div className="champion-basic-info">
      <ChampionAvatar 
        image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_0.jpg`}
        alt={championData.name}
      />
      <ChampionBuildLinks championID={championData.id} />
      <p>Name: {championData.name}</p><br />
      <p>Title: {championData.title} </p><br />
      <p>Lore: {championData.lore} </p><br />
      {/* championData is not available on first render so we have to short circuit! */}
      <p>Role: {championData.tags ? championData.tags[0] : ''}</p><br />
      <p>Difficulty: {championData.info ? championData.info.difficulty : ''}</p><br />
    </div>
  )
}

export default ChampionBasicInfo;

ChampionBasicInfo.propTypes = {
  championData: PropTypes.object
};
