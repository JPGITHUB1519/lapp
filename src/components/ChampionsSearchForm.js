import { useState } from 'react';
import PropTypes from 'prop-types';

function ChampionsSearchForm(props) {

  function handleInputChange(event) {
    props.onInputChange(event.target.value);
  }

  return (
    <form style={{display: 'flex', justifyContent: 'center'}}>
      <input 
        value={props.value}
        placeholder="Search for a champion..."
        onChange={handleInputChange}
      />
    </form>
  );
}

// function useSearchForm(props) {
//   const [search, setSearch] = useState(null);

//   return {search, setSearch};
// }


ChampionsSearchForm.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func
};

export default ChampionsSearchForm;
