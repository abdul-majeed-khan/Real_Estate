import CustomDot from "../CustomDot/CustomDot2";
import AgentCard from "../Cards/AgentCard";
import Carousel from "react-multi-carousel";
import { responsiveSmallAgentsSlider } from "../../utils/responsiveSlider";

function AgentsSidebarSlider() {
  return (
    <div className="mg-top-30">
      <div
        className="homec-agent-card homec-bg-cover"
        style={{ backgroundImage: "url('img/vector.svg')" }}
      >
        <h4 className="homec-agent-card__title mg-btm-20 text-white">
          Our Broker List
        </h4>

        <Carousel
          responsive={responsiveSmallAgentsSlider}
          showDots={true}
          infinite={true}
          autoPlay={true}
          dotListClass={"whiteDotList"}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
          customDot={<CustomDot />}
        >
          <AgentCard
            img="img/agents/walid.jpg"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Walid Amin"
            desc="Co-Founder & CEO"
            fullWidth={true}
          />
          <AgentCard
            img="img/agents/marwan.jpg"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Marwan Younes"
            fullWidth={true}
            desc="Managing Partner"
          />
          <AgentCard
            img="img/agents/david.jpg"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Dávid Lehotský"
            fullWidth={true}
            desc="Sales Manager"
          />
          <AgentCard
            img="img/agents/bogdan.jpg"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Bogdan Spiru"
            fullWidth={true}
            desc="Sales Manager"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default AgentsSidebarSlider;
