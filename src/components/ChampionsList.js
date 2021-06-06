import PropTypes from 'prop-types';
import ChampionListItem from './ChampionListItem';

function ChampionsList(props) {
  return (
    <div>
      <ChampionListItem 
        championName="Aatrox" 
        championImage="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Aatrox.png"
      />
      <ChampionListItem 
        championName="Vladimir" 
        championImage="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Vladimir.png" 
      />
      <ChampionListItem 
        championName="Miss Fortune" 
        championImage="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/MissFortune.png" 
      />
      <ChampionListItem 
        championName="Kayn" 
        championImage="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Kayn.png" 
      />
      <ChampionListItem 
        championName="Viego" 
        championImage="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Viego.png" 
      />
    </div>
  );
}

ChampionsList.propTypes = {};

export default ChampionsList;
