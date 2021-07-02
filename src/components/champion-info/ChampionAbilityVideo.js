import PropTypes from 'prop-types';
import Video from '../video/Video';

function ChampionAbilityVideo(props) {
  return (
    <div className="champion-ability-video-container">
      <Video url={props.url} className="champion-ability-video" />
    </div>
  );
}

export default ChampionAbilityVideo;

ChampionAbilityVideo.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string
};
