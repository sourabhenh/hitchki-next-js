import Image from "next/image";
import PrivateParties from "/public/images/private-parties.webp";
import PrivatePartiesIcon from "/public/images/PrivatePartiesIcon.webp";
import CorporateEventsIcon from "/public/images/CorporateEventsIcon.webp";
import CorporateEvents from "/public/images/CorporateEvents.webp";
import SpecialOccasionsIcon from "/public/images/SpecialOccasionsIcon.webp";
import SpecialOccasions from "/public/images/SpecialOccasions.webp";

const cateringData = [
  {
    title: "Private Parties",
    description: `Whether it's a birthday celebration, engagement party, or casual get-together, 
    Hitchki Global Indian Restaurant can cater for your private party with a variety of tasty menu options. 
    From appetizers and salads to main courses and desserts, browse our party packages or customize your own menu. 
    We cater to groups as small as 10 or as large as 150 people.`,
    imgSrc: PrivateParties,
    iconSrc: PrivatePartiesIcon,
    alt: "Private Parties",
  },
  {
    title: "Corporate Events",
    description: `Make your next corporate event more than just another business function with catering from Hitchki Global Indian Restaurant. 
    Impress clients or reward employees with high-quality food from our extensive menu. 
    We provide working lunches, sit-down dinners, and more for corporate events.`,
    imgSrc: CorporateEvents,
    iconSrc: CorporateEventsIcon,
    alt: "Corporate Events",
  },
  {
    title: "Special Occasions",
    description: `From wedding receptions to birthdays, anniversaries, rehearsal dinners, and beyond - 
    we want to make your special day truly memorable with remarkable cuisine and service. 
    Our team will work within your budget to ensure the perfect menu for your occasion.`,
    imgSrc: SpecialOccasions,
    iconSrc: SpecialOccasionsIcon,
    alt: "Special Occasions",
  },
];

const CateringCards = () => {
  return (
    <div className="aboutsection border-top border-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-2 fw-medium text-center mb-5">
              Exceptional Catering, Tailored for You
            </h1>

            {cateringData.map((card, index) => (
              <div key={index} className="card bg-black border border-dark mb-3 overflow-hidden">
                <div className="row g-0">
                  {index % 2 === 0 && (
                    <div className="col-lg-6 col-md-6 col-12">
                      <Image
                        alt={card.alt}
                        src={card.imgSrc}
                        loading="eager"
                        fill
                        className="w-100"
                        style={{ objectFit: "cover", position: "", }}
                      />
                    </div>
                  )}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="card-body h-100 p-5 d-flex align-content-center flex-wrap">
                      <h5 className="card-title card-icon display-4 w-100 mb-4">
                        <Image alt={card.alt} src={card.iconSrc} loading="eager" width={80} height={80} />
                        {card.title}
                      </h5>
                      <p className="card-text">{card.description}</p>
                      <a
                        href="#"
                        className="btn btn-secondary fs-3 bannerbutton mt-3 rounded-pill ps-5 pe-5 pt-3 pb-3 border-0"
                        role="button"
                        aria-disabled="true"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                  {index % 2 !== 0 && (
                    <div className="col-lg-6 col-md-6 col-12">
                      <Image
                        alt={card.alt}
                        src={card.imgSrc}
                        loading="eager"
                        fill
                        className="w-100"
                        style={{ objectFit: "cover", position: "", }}
                      />


                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringCards;
