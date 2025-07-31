import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <main className="container mt-5 pt-5">
        <h1 className="text-center mb-4">Welcome to our website</h1>
        <p className="lead text-center">My first React project</p>

        <div className="row mt-5">
          <div className="col-md-6 mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK3EMQIe1UOA_eygnHDu0oDwJaevU4kRNEg&s"
              alt="Main"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center mb-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              fugiat commodi iusto at incidunt facere provident nostrum
              assumenda. Dolore amet aut, temporibus magnam ab corrupti deserunt
              dolorum ullam aliquam. Cum aut quos consectetur ratione earum
              aliquid debitis! Veniam ea facilis id. Nostrum architecto
              consectetur, reprehenderit iste quo eaque est repudiandae?
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU5WtpCzAMlI2-7oEaSaMw5Q-Os4l1x7Klg&s"
              alt="Flower 1"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZrkAJ-W5Psb3etwrpQe-CK44jf04Xp2pNg&s"
              alt="Flower 2"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU5WtpCzAMlI2-7oEaSaMw5Q-Os4l1x7Klg&s"
              alt="Flower 3"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
