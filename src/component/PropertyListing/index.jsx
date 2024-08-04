import HomeSearch from "../Filter/HomeSearch";
import Title from "../Title";
import SingleList from "./SingleList";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TitleBtn from "../Button/TitleBtn";

function PropertyListing() {
  return (
    <section className="pd-top-120 pd-btm-120">
      <div className="container homec-listing__container">
        <div className="row">
          <div className="col-12">
            <Title
              firstText="Areas"
              secondText="Dubai Top Areas"
              marginSize="60"
            />
            <HomeSearch />
          </div>
        </div>

        <div className="row" style={{ zIndex: "-1" }}>
          <div className="col-12" data-aos="fade-up" data-aos-delay="600">
            {/* Homec Listing  */}
            <div className=" mg-top-40 container">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
              >
                <Masonry gutter="20px">
                  <SingleList
                    listing="50"
                    place="Downtown"
                    img="img/downtown.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="45"
                    place="Business Bay"
                    img="img/businessbay.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="55"
                    place="Dubai Marina"
                    img="img/marina.jpg"
                    link="#"
                  />
                  <SingleList
                    listing="30"
                    place="Palm Jumeirah"
                    img="img/palm.jpg"
                    link="#"
                  />{" "}
                  {/* <SingleList
                    listing="60"
                    place="Jumeirah Village Circle"
                    img="img/jvc.jpg"
                    link="#"
                  /> */}
                  <div></div>
                  {/* <SingleList
                    listing="4"
                    place="New Castle"
                    img="https://placehold.co/274x322"
                    link="#"
                  /> */}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            {/* Homec listing end  */}
          </div>
        </div>
        <div className="row">
          <TitleBtn link="property" text="See all Areas" delay="700" />
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;
