import { Link, link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/favourite-context";
import { useContext } from "react";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourite}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
