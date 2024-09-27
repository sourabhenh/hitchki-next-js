import Image from "next/image";
import GalleryImage1 from "/public/images/1.webp";
import GalleryImage2 from "/public/images/2.webp";
import GalleryImage3 from "/public/images/3.webp";
import GalleryImage4 from "/public/images/4.webp";
import GalleryImage5 from "/public/images/5.webp";
import GalleryImage6 from "/public/images/6.webp";
import GalleryImage7 from "/public/images/7.webp";
import GalleryImage8 from "/public/images/8.webp";
import GalleryImage9 from "/public/images/9.webp";
import GalleryImage10 from "/public/images/10.webp";
import GalleryImage11 from "/public/images/11.webp";
import GalleryImage12 from "/public/images/12.webp";

const images = [
  { src: GalleryImage1, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage2, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage3, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage4, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage5, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage6, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage7, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage8, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service"},
  { src: GalleryImage9, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage10, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage11, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
  { src: GalleryImage12, alt: "Bringing culinary expertise to every event, with customized menus and impeccable service" },
];

const CateringGallery = () => {
  return (
    <div className="gallerycatering border-top border-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-4">
            <h1 className="display-3 fw-medium">Catering Gallery</h1>
            <p className="text-white mt-4">
              Bringing culinary expertise to every event, with customized menus
              and impeccable service.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {images.map((image, index) => (
            <div key={index} className="col-lg-2 col-md-2 col-4 p-0">
              <div className="imagecard w-100 position-relative">
                <Image
                  alt={image.alt}
                  src={image.src}
                  loading="lazy"
                  width={425}
                  height={425}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CateringGallery;
