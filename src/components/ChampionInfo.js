import { useParams } from 'react-router-dom';;

function ChampionInfo(props) {
  let { champion } = useParams();
  
  return (
    <div>
      <h1>{champion}</h1>
    </div>
  );
}

export default ChampionInfo;
