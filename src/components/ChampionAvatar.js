import PropTypes from 'prop-types';

function ChampionAvatar(props) {
  return (
    <img className='responsive-image' src={props.image} alt={props.alt} width={props.width} height={props.height} />
  );
}

ChampionAvatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ChampionAvatar;
