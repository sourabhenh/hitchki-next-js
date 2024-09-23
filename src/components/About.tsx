import Image from "next/image";
import Aboutus from "/public/images/about-us.webp";

const About = ({}) => {
  return (
    <div className="aboutsection border-top border-dark">
      <div className="container">
        <div className="row ">
          <div className="col-md-12 text-center  d-flex  flex-column ">
            <h6 className="text-uppercase border-vertical position-relative mb-5">
              About
            </h6>

            <h2 className="text-white display-3 fw-semibold text-center mt-5 w-100 position-relative z-3">
              HITCHKI is an all-day diner serving Global Indian delicacies in a
              contemporary chic setting designed to give you an immersive luxury
              dining experience.
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-10">
            <div className="innerimageabout rounded-3 overflow-hidden ">
              <span className="w-100 d-flex bg-white">
                <Image
                  alt="Second slide"
                  src={Aboutus}
                  loading="eager"
                  fill
                  className="w-100 "
                  style={{
                    objectFit: "cover",
                    position: "",
                  }}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10 col-12 text-center  d-flex  flex-column mt-5">
            <h2 className=" display-5 border-vertical-top position-relative mt-5 mb-4 pt-5">
              Unique Philosophy
            </h2>

            <p className="text-white">
              This internationally aspiring brand focuses on an eclectic array
              of regional cuisines in a way that suits the palate and lifestyle
              of the current day, through contemporary preparation and plating
              without compromising on the traditional flavors of India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
