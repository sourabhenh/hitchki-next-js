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
            <h1 className="display-3 fw-medium ">
            Spice Up Your Event with Hitchki's Catering!

            </h1>
            <p className="text-white mt-4">
            At Hitchki, we're bringing back the best of Bollywood to jazz up all your parties with our top-notch catering crew! Doesn't matter if it's a party or an event, we're on a mission to give your guests all the feels with some classic nostalgia in a sleek, mod setting that'll leave 'em dazzled.  </p>
            <p className="text-white mt-4">

Now I know you're wondering what's on the menu - well we've got all the traditional faves and also some next-level mashups to tantalize those taste buds and thrill the senses. Each dish is lovingly made with care, combining signature flavors from back in the day with contemporary flair to transport your people straight to the golden age of Bollywood with every bite. And you best believe these number ones look as fabulous as they taste! Our presentations are artfully arranged so they're stylish yet true to the true recipes of old. 
</p>  <p className="text-white mt-4">
So what are you waiting for - let Hitchki jazz up your event and make it absolutely unforgettable with our dynamite catering!

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
                <i className="bi bi-check-lg"></i> Signature international dishes
              </li>
              <li>
                <i className="bi bi-check-lg"></i> Unique, exotic beverages
              </li>
            </ul>

            <a
              href="#contactform"
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
