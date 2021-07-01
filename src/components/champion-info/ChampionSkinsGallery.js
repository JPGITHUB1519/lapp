import PropTypes, { object } from 'prop-types';
import ImageGallery from 'react-image-gallery';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL} from '../../api/APIUtils';

function ChampionSkinsGallery(props) {
  const { championData } = props;

  const images = championData.skins.map(skin => {
    return {
      original: `${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_${skin.num}.jpg`,
      thumbnail: `${DATADRAGON_IMAGES_URL}\\${championData.image.group}\\splash\\${championData.id}_${skin.num}.jpg`,
      description: skin.name,
      // thumbnailTitle: skin.name,
      // thumbnailLabel: skin.name,
      thumbnailClass: 'champions-skins-gallery__carousel-thumbnail',
     
    }
  });
  return (
    <div className="champion-skins-gallery">
      <h2 className="champions-skins-gallery__title">Available Skins ({championData.skins.length}):</h2>
      <div className="champions-skins-gallery__carousel-container">
        <ImageGallery items={images} showIndex={true} />
      </div>
    </div>
  );
}

export default ChampionSkinsGallery;

ChampionSkinsGallery.propTypes = {
  championData: PropTypes.object
};
