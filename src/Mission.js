import "./App.css";
import ReactModal from "react-modal";
import { useState } from "react";
import "./App.css";
import "./Mission.css";
import m6 from "./2016.png";
import m7 from "./2017.png";
import m8 from "./2018.png";

import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
function Mission() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const object = [
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7837.jpg",
      title: "Ramill Preaching",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7863.jpg",
      title: "Dima Preaching",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7881.jpg",
      title: "Pastor of Mexican Church",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7884-1.jpg",
      title: "Dima Preaching",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7912.jpg",
      title: "Ramill Preaching",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7932-1.jpg",
      title: "Foundation of Church",
    },
    {
      imgUrl:
        "https://www.i68youth.com/wp-content/uploads/2016/12/IMG_7936.jpg",
      title: "Start of Project",
    },
  ];

  const [myMod, setmyMod] = useState(false);

  const openMod = () => {
    setmyMod(true);
  };
  const closeMod = () => {
    setmyMod(false);
  };

  return (
    <div className="newApp">
      <header>
        <nav>
          <span className="spanner right">
            &#9776;
            <Link to="/react">Back Home</Link>
          </span>
        </nav>
      </header>
      <br /> <br /> <br /> <br />
      <Carousel>
        <Carousel.Item>
          <img
            onClick={openMod}
            className="d-block w-100"
            alt="2016"
            src={m6}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="2017" src={m7} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="2018" src={m8} />
        </Carousel.Item>
      </Carousel>
      <ReactModal
        isOpen={myMod}
        contentLabel="onRequestClose Example"
        onRequestClose={closeMod}
        className="Modal"
        overlayClassName="Overlay"
      >
        {
          <div class="wrapper">
            <div class="cards">
              {object.map((object) => {
                return (
                  <figure class="card">
                    <img src={object.imgUrl} />
                    {console.log(object.imgUrl)}
                    <figcaption>{object.title}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        }

        <a className="closebtn x" onClick={closeMod}>
          &times;
        </a>
      </ReactModal>
      <br /> <br /> <br />
    </div>
  );
}

export default Mission;
