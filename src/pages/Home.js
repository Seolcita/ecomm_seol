/** @format */

import React from "react";

// Components
import Product from "../components/Product";

// CSS
import "./home.scss";

// IMAGES
import Soap from "../images/soap.png";
import Camera from "../images/camera.jpg";
import Cloths from "../images/cloths.jpg";
import Lip from "../images/lip.jpg";
import Perfume from "../images/perfume.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner"></div>
      <div className="home__container">
        <div className="home__row">
          <Product
            title="Homemade Soap"
            price={19.9}
            image={Soap}
            rating={3}
            id={1}
          />
          <Product
            title="Camera"
            price={19.9}
            image={Camera}
            rating={3}
            id={2}
          />
          {/* <div className="home__row"> */}
          <Product title="Lip" price={19.9} image={Lip} rating={3} id={6} />
          {/* </div> */}
          <Product
            title="Perfume"
            price={19.9}
            image={Perfume}
            rating={3}
            id={4}
          />
          {/* </div> */}
          {/* <div className="home__row"> */}
          <Product
            title="Cloths"
            price={19.9}
            image={Cloths}
            rating={3}
            id={3}
          />
          <Product
            title="Perfume"
            price={19.9}
            image={Perfume}
            rating={3}
            id={4}
          />
          <Product
            title="Homemade Soap 2"
            price={19.9}
            image={Soap}
            rating={3}
            id={5}
          />
          {/* </div> */}
          {/* <div className="home__row"> */}
          <Product title="Lip" price={19.9} image={Lip} rating={3} id={6} />
        </div>
      </div>
    </div>
  );
};

export default Home;
