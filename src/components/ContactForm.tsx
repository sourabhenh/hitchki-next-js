import BootstrapForm from "./BootstrapForm";

const ContactForm = () => {
  return (
    <div className="contactForm border-top border-dark">
      <div className="container">
        <div className="row" id="contactform">
          {/* Contact Information Section */}
          <div className="col-md-5 bg-black border border-dark p-5 rounded-start">
            <h2 className="text-white display-6 fw-medium">Contact Information</h2>

            <p className="text-white fs-5">
              We&rsquo;d love to hear from you. Send us a message and we will get back to you ASAP.
            </p>

            <ul className="list-unstyled">
              <li className="bi bi-pin-map mb-4">
                <h3 className="fs-2">Location</h3>
                <p>
                  Hitchki, Global Indian Restaurant, Unit No-FD122, Level 1, City Centre Mirdif, United Arab Emirates
                </p>
              </li>

              <li className="bi bi-envelope-at mb-4">
                <h3 className="fs-2">Email Address</h3>
                <p>
                  <a className="text-white" href="mailto:franchise@hitchki.co">
                    franchise@hitchki.co
                  </a>
                </p>
              </li>

              <li className="bi bi-telephone-forward mb-4">
                <h3 className="fs-2">Phone Number</h3>
                <p>
                  <a className="text-white" href="tel:97145877189">
                    +971 4587 7189
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-7 border border-dark p-5 rounded-end" id="contactform">
            <h2 className="text-white display-6 fw-medium w-100">Get In Touch with us for Catering</h2>

            <p className="text-white fs-5">
              Tell us about your event, and we&rsquo;ll guide you through the rest!
            </p>

            <BootstrapForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
