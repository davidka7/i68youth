function Service() {
  return (
    <div className="cover ">
      {" "}
      <br />
      <br />
      <div className="big center">Services</div>
      <br />
      <div className="flex">
        <a>Youth Service on Fridays at 7:30PM </a>
        <a>General Church Service on Sundays at 11:00AM</a>
        <a>Prayer Service on Mondays at 7:00PM</a>{" "}
      </div>{" "}
      <br />
      <a className="flex">Or Join Us Live</a>
      <br />
      <a>
        <div className="iframe-container flex">
          <iframe
            width="650"
            heihgt="315"
            src="https://www.youtube.com/embed/live_stream?channel=UCObhf35DgyjT5d8Z45osQxA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </a>{" "}
      {/* <button>Click here</button> */}
      <br />
      <br />
    </div>
  );
}

export default Service;
