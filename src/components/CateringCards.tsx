import Image from "next/image";
import PrivateParties from "/public/images/private-parties.webp";

import CorporateEvents from "/public/images/CorporateEvents.webp";

import SpecialOccasions from "/public/images/SpecialOccasions.webp";

const cateringData = [
  {
    title: "Private Parties",
    description: "From birthdays to engagements or just a casual hangout, Hitchki has your private party covered with delicious menu options! Whether its apps, mains, or desserts, choose from our party packages or create your own. We cater from 10 to 150 guests — let's make it a feast to remember!",
    imgSrc: PrivateParties,
 
    alt: "Private Parties",
  },
  {
    title: "Corporate Events",
    description: "Turn your next corporate event into something more than just business with catering from Hitchki! Wow your clients or treat your team to top-notch food from our extensive menu. From working lunches to sit-down dinners, we've got your corporate event covered!",
    imgSrc: CorporateEvents,
   
    alt: "Corporate Events",
  },
  {
    title: "Special Occasions",
    description: "From 'I do' to 'Happy Birthday!' and everything in between, Hitchki is here to make your celebration memorable with amazing food and service. Whether it's a wedding, anniversary, or rehearsal dinner, we'll whip up the perfect menu that fits your budget and leaves everyone craving more!",
    imgSrc: SpecialOccasions,
 
    alt: "Special Occasions",
  },
];

const CateringCards = () => {
  return (
    <div className="aboutsection border-top border-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-3 fw-medium text-center mb-5">
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
                        width={500}
                        height={600}
                        className="w-100"
                        style={{ objectFit: "cover", }}
                      />
                    </div>
                  )}
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="card-body h-100 p-5 d-flex align-content-center flex-wrap">
                      <h5 className="card-title card-icon display-5 w-100 mb-4">
                     
                        {card.title}
                      </h5>
                      <p className="card-text">{card.description}</p>
                      <a
                       href="#contactform"
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
                        width={500}
                        height={600}
                        className="w-100"
                        style={{ objectFit: "cover", }}
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
