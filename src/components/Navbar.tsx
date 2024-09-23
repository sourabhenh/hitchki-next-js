import Image from "next/image";
import HitchkiLogo from "/public/images/logo-hitchki.png";
import { NextPage } from "next";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="HeaderNav position-fixed">
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <Image
                  alt="HitchKi Logo"
                  src={HitchkiLogo}
                  loading="eager"
                  fill
                  className="w-100 d-block"
                  style={{ objectFit: "contain", position: "" }}
                />
              </a>
              <button
                className="navbar-toggler bg-white border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="tel:971522519983"
                    >
                      <i className="bi bi-telephone-forward-fill"></i> +971 52
                      251 9983
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="mailto:franchise@hitchki.co">
                      <i className="bi bi-envelope-at-fill"></i>
                      franchise@hitchki.co
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
