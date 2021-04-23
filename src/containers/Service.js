function Service() {
  return (
    <div className="cover ">
      {" "}
      <br />
      <br />
      <div className="big center">Services</div>
      <br />
      <div className="flex">
        <div className="left">
          <ul>
            <li>
              <a>Youth Service on Fridays at 7:30PM </a>
            </li>
            <li>
              <a>General Church Service on Sundays at 11:00AM</a>
            </li>{" "}
            <li></li>
            <li>
              <a>Prayer Service on Mondays at 7:00PM</a>
            </li>
            <li>
              <a>
                Or Join Us Live
                <br></br>
                <div className="iframe-container">
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
            </li>
          </ul>
        </div>{" "}
        {/* <button>Click here</button> */}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Service;
