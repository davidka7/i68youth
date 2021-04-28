import emailjs from "emailjs-com";
function Sermon() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "youtube_template",
        e.target,
        "user_q223yXPLKVv6E3Sdq2fG2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="cover ">
      {" "}
      <br />
      <br />
      <div className="big center">Other Events</div>
      <br />
      <div className="flex">
        <div className="left">
          To signup to groups, teen services, or any other events, reach out to
          Sam Podgorniy By filling out this form.
          <form onSubmit={sendEmail} className="flex newy">
            <a>
              {" "}
              <input
                className="form-control"
                text="text"
                placeholder="Name"
                name="name"
              ></input>{" "}
            </a>{" "}
            <a>
              {" "}
              <input
                className="form-control"
                text="text"
                placeholder="Email Address"
                name="email"
              ></input>
            </a>{" "}
            <a>
              {" "}
              <input
                className="form-control"
                text="text"
                placeholder="Subject"
                name="subject"
              ></input>{" "}
            </a>{" "}
            <a>
              <textarea
                text="text"
                placeholder="Your message"
                name="message"
              ></textarea>
            </a>{" "}
            <a>
              <input type="submit" value="Submit"></input>{" "}
            </a>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}

export default Sermon;
