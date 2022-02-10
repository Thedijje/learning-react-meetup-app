import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import meetupList from "../components/meetups/MeetupList";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

function FavouritePage() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourite === 0) {
    content = <p>You have not added favourite, add some favourite</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourite}></MeetupList>;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritePage;
