import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourite-context";
import { useContext } from "react";

function MeetupItem(props) {
  const FavouriteCtx = useContext(FavouriteContext);

  const isItemFavourite = FavouriteCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (isItemFavourite) {
      FavouriteCtx.removeFavourite(props.id);
    } else {
      FavouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {isItemFavourite ? "Remove from Favourite" : "Add To Favourite"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
