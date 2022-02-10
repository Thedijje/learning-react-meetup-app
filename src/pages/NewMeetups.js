import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupdata) {
    // sent http request here
    const httpUrl =
      "https://react-meetup-app-6a7f7-default-rtdb.asia-southeast1.firebasedatabase.app/";
    fetch(httpUrl + "/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
