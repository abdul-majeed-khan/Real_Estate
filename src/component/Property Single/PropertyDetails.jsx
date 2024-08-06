import { useState } from "react";
import PropertyDetailsBtn from "../Button/PropertyDetailsBtn";
import DetailsTab from "./DetailsTab";
import DetailsTabFeatures from "./DetailsTabFeatures";
import FloorDetails from "../FloorDetails";
import PropertyVideo from "../PropertyVideo/";
import PropertyLocation from "../PropertyLocation";
import PropertyReview from "../PropertyReview";
import PropertyAgents from "../Agents/PropertyAgents";

function PropertyDetails() {
  const [activeTab, setActiveTab] = useState("Property Details");
  const handleActive = (title) => {
    setActiveTab(title);
  };

  return (
    <section
      className="pd-top-0 homec-bg-third-color pd-btm-80 homec-bg-cover"
      style={{ backgroundImage: "url('img/property-single-bg.svg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ol-12">
            <div
              className="list-group homec-list-tabs homec-list-tabs--v2"
              id="list-tab"
              role="tablist"
            >
              <PropertyDetailsBtn
                title="Property Details"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Floor Plans"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Property Video"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Locations"
                active={activeTab}
                handleActive={handleActive}
              />
              {/* <PropertyDetailsBtn
                title="Review"
                active={activeTab}
                handleActive={handleActive}
              /> */}
            </div>

            <div className="homec-pdetails-tab">
              <div className="tab-content">
                <DetailsTab
                  isActive={activeTab === "Property Details"}
                  text={[
                    "Como Residences is a luxury development by Nakheel Properties. The stunning 75-storey tower, exuding unrivalled elegance and splendour, will take the shape of an organic sea shell pointing towards the sky. Highlights of the complex include a series of vertical lakes and a rooftop landscape pool, which will be located on the 71st floor. There is also a 360-degree rooftop observation deck, which has become the highest observation deck at Palm Jumeirah.",
                    'The project offers a total of 76 limited edition residences, namely 2-6 bedroom apartments, 7-bedroom duplexes and one impressive 5-bedroom duplex penthouse.',
                  ]}
                >
                  <DetailsTabFeatures
                    title="Additional Details"
                    property={[
                      { ["Building age"]: "2 Years" },
                      { Cooling: "Yes" },
                      { Gas: "Yes" },
                      { Parking: "Yes" },
                      { Sewer: "Yes" },
                      { ["Exercise Room"]: "Yes" },
                      { Heating: "Yes" },
                      { Water: "Yes" },
                      { Storage: "Yes" },
                    ]}
                  />{" "}
                  <DetailsTabFeatures
                    title="Nearest Place"
                    property={[
                      { Airport: "3 KM" },
                      { Hospital: "2 KM" },
                      { Breach: "3 KM" },
                      { School: "4 KM" },
                      { Park: "2 KM" },
                    ]}
                  />
                  <DetailsTabFeatures
                    title="Nearest Place"
                    property={[
                      "Elevator in building",
                      "Alcohol",
                      "Reservations",
                      "Free coffe and tea",
                      "Accepts Credit Cards",
                      "Air Condition",
                      "Balcony",
                    ]}
                    check={true}
                  />
                </DetailsTab>
                <FloorDetails isActive={activeTab === "Floor Plans"} />
                <PropertyVideo
                  isActive={activeTab === "Property Video"}
                  img="https://placehold.co/785x410"
                  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked."
                />
                <PropertyLocation
                  address="446W+88X Palm Jumeirah - The Palm Jumeirah - Dubai"
                  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked."
                  isActive={activeTab === "Locations"}
                />
                <PropertyReview isActive={activeTab === "Review"} />
              </div>
            </div>
          </div>
          <PropertyAgents
            image="img/agents/federico.jpg"
            name="Federico"
            position="Property Consultant"
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
