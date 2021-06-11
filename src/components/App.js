import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import ChampionsInfo from './ChampionsInfo';
import ChampionsList from './ChampionsList';
import ChampionListItem from './ChampionListItem';
import ChampionsFilters from './ChampionsFilters';

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/champions">Champions</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/champions">
            <ChampionsInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div>
    //   {/* <h1>Lapp</h1> */}
    //   <ChampionsInfo />
      
    // </div>
  );
}

export default App;
