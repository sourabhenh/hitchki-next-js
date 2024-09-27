import Image from "next/image";
import CateringMenuBanner from "/public/images/menu-banner.jpg";

const CateringMenu = ({}) => {
  return (
    <div
      className="cateringbanner border-top border-dark"
      style={{ position: "relative" }}
    >
      <Image
        src={CateringMenuBanner}
        alt="Beautiful dining experience at Hitchki"
        fill
        objectFit="cover"
        quality={5}
        style={{ zIndex: -1, opacity: 0.2 }}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 text-center">
            <h1 className="display-3 fw-medium ">Catering Menu</h1>
            <p className="text-white mt-4">
            Craving authentic vegetarian goodness? Our menu brings you the vibrant flavors of Gujarat, India — famous for its mouthwatering, pure vegetarian dishes! Whether you&apos;re going all-in on a vegan or vegetarian spread for your event, we&apos;ve got you covered.
            </p>
            <p className="text-white mt-4">
Ready to check out your options? Click the link below!

            </p>

            <a
              href="#"
              className="btn btn-secondary fs-3 bannerbutton mt-3 rounded-pill ps-5 pe-5 pt-3 pb-3 border-0"
              role="button"
              aria-disabled="true"
            >
              
              View Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringMenu;
