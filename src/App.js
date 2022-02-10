import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritePage from "./pages/Favourite";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
