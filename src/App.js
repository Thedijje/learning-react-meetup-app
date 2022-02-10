import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritePage from "./pages/Favourite";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/favourites">
          <FavouritePage />
        </Route>

        <Route path="/New">
          <NewMeetupsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
