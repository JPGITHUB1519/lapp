import PropTypes, { object } from 'prop-types';
import ChampionAvatar from '../ChampionAvatar';
import { DATADRAGON_VERSIONED_IMAGES_URL, DATADRAGON_IMAGES_URL} from '../../api/APIUtils';

function ChampionSkinsGallery(props) {
  const { championData } = props;
  return (
    <div className="champion-skins-gallery">
      <h2>Skins:</h2>
        {championData.skins.map(skin => {
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
        })}  
    </div>
  );
}

export default ChampionSkinsGallery;

ChampionSkinsGallery.propTypes = {
  championData: PropTypes.object
};
