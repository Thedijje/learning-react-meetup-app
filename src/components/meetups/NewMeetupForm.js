import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      address: enteredAddress,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlfor="title">Meetup title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlfor="url">Meetup image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlfor="address">Meetup Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlfor="description">Description</label>
          <textarea
            id="description"
            required
            rows="10"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
