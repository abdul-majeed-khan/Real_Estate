import { responsiveSmallAgentsSlider } from "../../utils/responsiveSlider";
import ImageCard from "../Cards/ImageCard";
import Carousel from "react-multi-carousel";

function SingleSlider() {
  return (
    <Carousel
      responsive={responsiveSmallAgentsSlider}
      infinite={true}
      autoPlay={true}
      showDots={false}
      customTransition="linear .5"
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={[
        "superLargeDesktop",
        "desktop",
        "tablet",
        "mobile",
      ]}
    >
      <ImageCard
        price="14,256,484"
        duration="Price"
        title="Como Residences"
        text="The Palm Jumeirah - Dubai"
        img="img/property/como1.jpg"
      />
      <ImageCard
        price="14,256,484"
        duration="Price"
        title="Como Residences"
        text="The Palm Jumeirah - Dubai"
        img="img/property/como2.jpg"
      />
      <ImageCard
        price="14,256,484"
        duration="Price"
        title="Como Residences"
        text="The Palm Jumeirah - Dubai"
        img="img/property/como5.jpg"
      />
      <ImageCard
        price="14,256,484"
        duration="Price"
        title="Como Residences"
        text="The Palm Jumeirah - Dubai"
        img="img/property/como6.jpg"
      />
    </Carousel>
  );
}

export default SingleSlider;
