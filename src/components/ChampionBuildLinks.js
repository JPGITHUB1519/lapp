import PropTypes from 'prop-types';
import * as Utils from '../Utils';

function ChampionBuildLinks(props) {
  const championsBuildLinks = Utils.generateChampionBuildLinks(props.championID);
  
  return (
    <div class="champion-build-links">
      {Object.keys(championsBuildLinks).map(pageKey => {
        return <a href={championsBuildLinks[pageKey]} className="champion-build-links__link" target="_blank">{pageKey}</a>
      })}
    </div>
  );
}

ChampionBuildLinks.propTypes = {
  championID: PropTypes.string
};

export default ChampionBuildLinks;
