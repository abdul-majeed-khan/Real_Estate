import Carousel from "react-multi-carousel";
import ThumbnilsCard from "../Cards/ThumbnilsCard";
import { responsiveLogoSlider2 } from "../../utils/responsiveSlider";
import ButtonGroup from "../CustomDot/CustomArrow";

function ThumbnailsSlider() {
  return (
    <div className="mg-top-10">
      <Carousel
        responsive={responsiveLogoSlider2}
        showDots={false}
        infinite={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        <ThumbnilsCard img="img/property-sm/como01.jpg" />
        <ThumbnilsCard img="img/property-sm/como02.jpg" />
        <ThumbnilsCard img="img/property-sm/como03.jpg" />
        <ThumbnilsCard img="img/property-sm/como04.jpg" />
        <ThumbnilsCard img="img/property-sm/como05.jpg" />
        <ThumbnilsCard img="img/property-sm/como06.jpg" />
        <ThumbnilsCard img="img/property-sm/como07.jpg" />
      </Carousel>
    </div>
  );
}

export default ThumbnailsSlider;
