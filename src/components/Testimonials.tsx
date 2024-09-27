const testimonialsData = [
  {
    text: `While we do have certain dishes that we cherish and enjoy recommending occasionally, 
    each menu we create uniquely mirrors the client's vision for their event. With a rich variety of exquisite Indian preparations, 
    the choices are limitless. Select from an extensive array of soups, appetizers, main courses, desserts, and beverages to craft 
    the ideal menu for your special occasion.`,
    customerName: "Customer Name 1",
  },
  {
    text: `Hitchki exceeded our expectations with their fantastic vegetarian catering. 
    The flavors were authentic, and their service was impeccable. Our guests were thoroughly impressed.`,
    customerName: "Customer Name 2",
  },
  {
    text: `We highly recommend Hitchki for any event. Their attention to detail and variety of options made our event unforgettable.`,
    customerName: "Customer Name 3",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonialSlide border-top border-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-3 fw-medium">Customer Testimonials</h1>
            <p>
            Hear what our satisfied clients say! From flawless events to mouthwatering menus, our catering leaves a lasting impression. Your guests deserve the best; we’re here to deliver unforgettable experiences!
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-4 text-center">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""} justify-content-center`}
                  >
                    <div className="container">
                      <p className="w-100 fs-4">{testimonial.text}</p>
                      <h5 className="fs-1">{testimonial.customerName}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
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

export default Testimonials;
