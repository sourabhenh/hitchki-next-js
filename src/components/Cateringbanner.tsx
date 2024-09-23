import Image from "next/image";
import BannerCatering from "/public/images/catering-banner.jpg";

const Cateringbanner = ({}) => {
  return (
    <div
      className="cateringbanner border-top border-dark"
      style={{ position: "relative" }}
    >
      <Image
        src={BannerCatering}
        alt="Beautiful dining experience at Hitchki"
        fill
        objectFit="cover"
        quality={5}
        style={{ zIndex: -1, opacity: 0.2 }}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="display-2 fw-medium ">
              Catering for Every Occasion
            </h1>
            <p className="text-white mt-4">
              At Hitchki, we bring the nostalgia of classic Bollywood to your
              events with our exceptional catering services. No matter what kind
              of occasion it is, our goal is to evoke fond memories in a
              stylish, modern setting that captivates your guests. Our catering
              menu offers a perfect blend of traditional Indian favorites and
              innovative twists, all expertly prepared to delight both the
              palate and the senses. Each dish is crafted with care, combining
              classic flavors with contemporary flair, ensuring that every bite
              transports your guests back to the golden era of Bollywood. Our
              presentations are aesthetically arranged, reflecting modern
              preferences while staying true to the essence of classic recipes.
              Let Hitchki make your event unforgettable with our catering
              services.
            </p>

            <ul className="listTick">
              <li>
                <i className="bi bi-check-lg"></i> Custom global Indian menus
              </li>
              <li>
                <i className="bi bi-check-lg"></i> Chic and stylish presentation
              </li>
              <li>
                <i className="bi bi-check-lg"></i> Fusion of traditional flavors
              </li>
              <li>
                <i className="bi bi-check-lg"></i> Signature international
                dishes
              </li>
              <li>
                <i className="bi bi-check-lg"></i> Unique, exotic beverages
              </li>
            </ul>

            <a
              href="#"
              className="btn btn-secondary fs-3 bannerbutton mt-5 rounded-pill ps-5 pe-5 pt-3 pb-3 border-0"
              role="button"
              aria-disabled="true"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cateringbanner;
