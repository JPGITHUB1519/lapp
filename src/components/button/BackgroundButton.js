import PropTypes from 'prop-types';

function BackgroundButton(props) {
  return (
    <button
      className={props.className}
      style={{
        background: `url(${props.image}) 0 0 no-repeat`,
        border: "0",
        width: `${props.width}px`,
        height: `${props.height}px`,    
        cursor: 'pointer'  
      }}
      onClick={props.onClick}
    >
      
    </button>                        
  );
}

BackgroundButton.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func
};

BackgroundButton.defaultProps = {
  width: 65,
  height: 65
};

export default BackgroundButton;

