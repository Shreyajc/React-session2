import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="mb-4 text-center">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK3EMQIe1UOA_eygnHDu0oDwJaevU4kRNEg&s"
              alt="About"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              tempore accusantium veritatis perspiciatis quae fugit provident,
              quia fuga molestiae reiciendis culpa cum sapiente nam nostrum nisi
              iusto. Aperiam aut possimus voluptates in cupiditate voluptas
              reiciendis eos dolore magnam illum? Voluptas dolorum, deleniti
              inventore atque sapiente culpa iure totam nobis ducimus ipsam
              similique autem magnam numquam labore quia laboriosam perferendis
              quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              placeat illum est perferendis nobis debitis unde amet ab itaque
              illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut
              nam molestiae laboriosam ad voluptatem quos, esse ipsam natus
              voluptas?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
