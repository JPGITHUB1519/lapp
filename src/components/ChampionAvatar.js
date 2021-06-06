import PropTypes from 'prop-types';

function ChampionAvatar(props) {
  return (
    <img src={props.championImage} alt={props.championName} width={props.width} height={props.height} />
  );
}

ChampionAvatar.propTypes = {
  championImage: PropTypes.string,
  championName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ChampionAvatar;
