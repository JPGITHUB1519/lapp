import PropTypes, { object } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL} from '../../api/APIUtils';

function ChampionSkinsGallery(props) {
  const { championData } = props;

  return (
    <div className="champion-skins-gallery">
      <h2 className="champions-skins-gallery__title">Available Skins ({championData.skins.length}):</h2>
      <div className="champions-skins-gallery__carousel-container">
        <Carousel interval={null}>
          {championData.skins.map(skin => {
            return (
              <Carousel.Item>
                <img 
                  className='full-width-image'
                  src={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_${skin.num}.jpg`} 
                  alt={skin.name}
                />
                <Carousel.Caption>
                  <h3 className="carousel-caption-text">{skin.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      
        {/* {championData.skins.map(skin => {
          return (
            <>
              <p>{skin.name}</p>
              <ChampionAvatar 
                image={`${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_${skin.num}.jpg`} 
                alt={skin.name}
                width={500}
                height={300}
              />
            </>
          );
        })}   */}
    </div>
  );
}

export default ChampionSkinsGallery;

ChampionSkinsGallery.propTypes = {
  championData: PropTypes.object
};
