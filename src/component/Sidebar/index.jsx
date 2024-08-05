import SelectiveInput from "../Form/SelectiveInput";
import CheckInput from "../Form/CheckInput";
import RangeInput from "../Form/RangeInput";
import AgentsSidebarSlider from "../Agents/AgentsSidebarSlider";

function index() {
  return (
    <div className="col-lg-4 col-12 mg-top-30">
      <div className="property-sidebar">
        {/* <SelectiveInput
          title="Country"
          options={[
            { id: 1, name: "Bangladesh" },
            { id: 2, name: "United Kingdom" },
            { id: 3, name: "United State" },
          ]}
        /> */}
        <SelectiveInput
          title="Area"
          options={[
            { id: 1, name: "Downtown" },
            { id: 2, name: "Business Bay" },
            { id: 3, name: "Dubai Marina" },
            { id: 4, name: "Palm Jumeirah" },
            { id: 5, name: "Jumeirah village circle" },
          ]}
          classes="mg-top-20"
        />
        <SelectiveInput
          title="Property Category"
          options={[
            { id: 1, name: "Apartment" },
            { id: 2, name: "Family House" },
            { id: 3, name: "Modern Villa" },
          ]}
          classes="mg-top-20"
        />
        <CheckInput
          title="Number Of Rooms"
          properties={[
            "studio",
            "1 Bedroom",
            "2 Bedroom",
            "3 Bedroom",
            "4 Bedroom",
            "5 Bedroom",
            "6 Bedroom",
            "7 Bedroom",
          ]}
          name="room"
        />
        {/* <CheckInput
          title="Bathrooms"
          properties={[
            "Room 1",
            "Room 2",
            "Room 3",
            "Room 4",
            "Room 5",
            "Room 6",
          ]}
          name="bathrooms"
        /> */}
        <RangeInput
          minRange={0}
          maxRange={7000}
          defaultMinRange={600}
          defaultMaxRange={1800}
          title="Square feet"
          standard="sq. ft."
        />
        <RangeInput
          minRange={0}
          maxRange={12000000}
          defaultMinRange={1000000}
          defaultMaxRange={5000000}
          title="Price"
          text="Range: "
          symbol="$"
        />
      </div>
      <AgentsSidebarSlider />
    </div>
  );
}

export default index;
