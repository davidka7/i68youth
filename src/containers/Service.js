import { useState } from "react";
function Service() {
  const [closer, setClosed] = useState("closed");
  const service = () => {
    console.log("test");
    if (closer === "closed") {
      setClosed("closezz");
    } else {
      setClosed("closed");
    }
  };
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
      <a onClick={service} className="flex">
        Or Join Us Live
      </a>
      <br />
      <a>
        <div className={`iframe-container flex ${closer}`}>
          <iframe
            className={closer}
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
