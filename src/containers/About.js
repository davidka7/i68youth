import family from "./family.jpg";
function About() {
  return (
    <div id="about" className="cover ">
      {" "}
      <br />
      <br />
      <div className="big center">About</div>
      <br />
      <div className="flex">
        <div className="left">
          Life Is good at i68 Youth
          <br />
          We serve and do our best!
          <br />
          We Love God with all our hearts,
          <br />
          and find the truth in the scripture!
        </div>{" "}
        <img src={family} className="familylogo"></img>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
