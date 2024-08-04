import TitleWithBtn from "../Title/TitleWithBtn";
import AgentCard from "../Cards/AgentCard";
import Carousel from "react-multi-carousel";
import { responsiveAgentsSlider } from "../../utils/responsiveSlider";
import CustomDot from "../CustomDot/CustomDot2";
import agents from "../../data/agents";

function AgentsV2() {
  return (
    <section
      className="homec-bg-third-color homec-bg-cover pd-top-90 pd-btm-120"
      style={{ backgroundImage: "url('img/banner1.jpg')" }}
    >
      <div className="homec-overlay"></div>
      <div
        className="section-inside-bg"
        style={{ backgroundImage: "url('img/bg-shape-five.svg')" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleWithBtn
              category="View all Agent"
              title="Meet Our Team"
              link="/our-agent"
              btnText="See All Agents"
              styleCategory={{ color: "#a3a3a3" }}
              styleTitle={{ color: "#ffff" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper mySwiper homec-slider-agent loading">
              <div className="swiper-wrap">
                <Carousel
                  responsive={responsiveAgentsSlider}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  dotListClass={"dotList"}
                  autoPlaySpeed={2000}
                  removeArrowOnDeviceType={[
                    "superLargeDesktop",
                    "desktop",
                    "tablet",
                    "mobile",
                  ]}
                  customDot={<CustomDot />}
                >
                  {agents?.map((agent) => (
                    <AgentCard
                      key={agent.id}
                      img={agent.img2}
                      phone={agent.phone}
                      linkedin={agent.linkedin}
                      twitter={agent.twitter}
                      insta={agent.insta}
                      name={agent.name}
                      desc={agent.position}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentsV2;
