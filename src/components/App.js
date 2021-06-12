import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import ChampionsPage from './ChampionsPage';
import ChampionInfo from './ChampionInfo';
import ChampionsList from './ChampionsList';
import ChampionListItem from './ChampionListItem';
import ChampionsFilters from './ChampionsFilters';

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
          {/* the child component will be rendered when the path is matched */}
          <Route path="/champions/:championID">
            <ChampionInfo />
          </Route>
          <Route path="/champions">
            <ChampionsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
