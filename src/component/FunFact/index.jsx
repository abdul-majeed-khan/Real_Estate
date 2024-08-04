import ProtoTypes from "prop-types";
import FunfactCard from "../Cards/FunfactCard";
import ButtonOne from "../Button/ButtonOne";
import FunFactList from "./FunFactList";

function FunFacts({ v2 }) {
  return (
    <section
      className={`homec-funfacts pd-btm-100 ${v2 && "pd-top-120 mg-top-30"}`}
    >
      <img src="img/bg1.jpg" alt="#" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="homec-funfact homec-border"
              style={{ backgroundImage: "url(img/bg-pattern1.png)" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                  <div className="homec-funfact__inner">
                    <div
                      className="homec-funfact__content"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h2 className="homec-section__title mg-btm-10">
                        Why Choose us
                      </h2>
                      <p>
                        With our lifestyle-attention products we lead a portfolio of properties that have pioneered a modern style in the market and top-of-the-line properties in Dubai and the world
                      </p>
                    </div>
                    {/* Homec List  */}
                    <ul
                      className="homec-iconic-list list-none mg-top-30"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <FunFactList title="Wide range of properties all over Dubai." />
                      <FunFactList title="We offer properties in best price range." />
                      <FunFactList title="We are one of the best service provider in Dubai." />
                    </ul>
                    {/* Homec Button  */}
                    <ButtonOne title="Contact Us" />
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="homec-funfacts">
                    <div className="row">
                      <FunfactCard
                        img="img/hand-icon.svg"
                        count="Trusted"
                        title="Happy Customer"
                        // standard="K"
                      />
                      <FunfactCard
                        img="img/support-icon.svg"
                        count="24/7 Support"
                        title="Any Time"
                        // standard="K"
                      />
                      <FunfactCard
                        img="img/finance-icon.svg"
                        count="Financing Easy"
                        title="Support for Mortgage"
                      />
                      <FunfactCard
                        img="img/wide-house-icon.svg"
                        count="Best Offers"
                        title="Best Price in the Market"
                        // standard="K"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FunFacts.propTypes = {
  v2: ProtoTypes.bool,
};

export default FunFacts;
