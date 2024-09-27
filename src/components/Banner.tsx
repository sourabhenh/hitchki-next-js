import Image from "next/image";
import SlideOne from "/public/images/banner-1.webp";
import SlideTwo from "/public/images/banner-2.webp";
import { NextPage } from "next";

// No need for Props interface if not using props
const slides = [
  {
    image: SlideOne,
    alt: "First slide",
    heading: "Global Indian Restaurant ",
    description:
      "Embark on a special culinary odyssey where every dish is a symphony of flavors and every bite is a journey.",
  },
  {
    image: SlideTwo,
    alt: "Second slide",
    heading: "Savor the exquisite flavors here",
    description:
      "Embark on a special culinary odyssey where every dish is a symphony of flavors and every bite is a journey.",
  },
];

const Banner: NextPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="bannerSlide position-relative w-100">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner h-100">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
                  >
                    <div className="overlaySlide w-100 h-100 z-1 position-relative"></div>
                    <Image
                      alt={slide.alt}
                      src={slide.image}
                      loading="lazy"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="carousel-caption d-md-block z-3">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-12 col-md-12 col-12">
                            <h5 className="fw-semibold display-1">
                              {slide.heading}
                            </h5>
                            <p className="fs-5 text-white">{slide.description}</p>
                            <a
                              href="#contactform"
                              className="btn btn-secondary fs-3 bannerbutton mt-2 rounded-pill ps-5 pe-5 pt-3 pb-3 border-0"
                              role="button"
                              aria-disabled="true"
                            >
                              Get In Touch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
