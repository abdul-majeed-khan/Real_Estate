import AboutCard from "../Cards/AboutCard";
import AboutShapeImg from "./AboutShapeImg";

function About() {
  return (
    <section className="homec-about {/*homec-bg-third-color*/} pd-top-90 pd-btm-120">
      <div className="homec-shape">
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-12 mg-top-30"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {/* Homec Image Group */}
            <div className="homec-image-group homec-image-group--v2">
              <div className="homec-image-group__main">
                <img src="img/abtus1.jpg" alt="About us" />
                {/* <div className="homec-experiences">
                  <h4 className="homec-experiences__title">
                    12 Years <span>Experience</span>
                  </h4>
                </div> */}
              </div>
              <div className="homec-ceo-quote">
                <div className="homec-ceo-quote__img">
                  <div className="homec-overlay"></div>
                  <img src="img/abtus2.jpg" alt="About us" />
                </div>
                <h4 className="homec-ceo-quote__title">
                  Championing<span>Excelence since 2019</span>
                </h4>
              </div>
            </div>
            {/* End Homec Image Group */}
          </div>
          <div className="col-lg-6 col-12 mg-top-30">
            <div className="homec-about-content homec-about-content--v2">
              {/* Section Title */}
              <div className="homec-section__head">
                <div className="homec-section__shape">
                  <span
                    className="homec-section__badge homec-section__badge--shape"
                    // style={{ backgroundImage: "url('img/section-shape.svg')" }}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    About Us
                  </span>
                </div>
                <h2
                  className="homec-section__title"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  Platinum Square Real Estate Brokers
                </h2>
              </div>
              <div
                className="homec-about-content__inner mg-top-20"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <p className="homec-about-content__text">
                  Platinum Square Real Estate Services is a group of experienced real estate agents, who have established a strong foothold in Dubai's market for more than four successful years.
                </p>
                <div className="homec-focus-content homec-focus-content--v2 homec-border mg-top-20">
                  <p>
                    Over 20 years of experience in providing top quality house in Dubai. We are committed on building strong and lasting connections with our valued clients. By recognizing the complexities that can be faced in Dubai's real estate market, we partnered up with a group of professional agents with extensive experience in this market.
                  </p>
                </div>
                <div className="homec-dflex-space">
                  <AboutCard
                    text="believe in our service & Care"
                    img="img/count-icon1.svg"
                    count="1000+ Clients"
                  />
                  <AboutCard
                    text="exceeding customer expectations"
                    img="img/count-icon2.svg"
                    count="$ 8 Billion+ Deals"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
