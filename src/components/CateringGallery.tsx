import Image from "next/image";
import GalleryImage1 from "/public/images/SpecialOccasions.webp";
import GalleryImage2 from "/public/images/SpecialOccasions.webp";
import GalleryImage3 from "/public/images/SpecialOccasions.webp";
import GalleryImage4 from "/public/images/SpecialOccasions.webp";
import GalleryImage5 from "/public/images/SpecialOccasions.webp";
import GalleryImage6 from "/public/images/SpecialOccasions.webp";

const images = [
  { src: GalleryImage1, alt: "Private Parties 1" },
  { src: GalleryImage2, alt: "Private Parties 2" },
  { src: GalleryImage3, alt: "Private Parties 2" },
  { src: GalleryImage4, alt: "Private Parties 2" },
  { src: GalleryImage5, alt: "Private Parties 2" },
  { src: GalleryImage6, alt: "Private Parties 2" },
];

const CateringGallery = () => {
  return (
    <div className="gallerycatering border-top border-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-4">
            <h1 className="display-2 fw-medium">Catering Gallery</h1>
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
                  loading="eager"
                  fill
                  style={{
                    objectFit: "cover",
                    position: "",
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
