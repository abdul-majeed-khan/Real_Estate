import Title from "../Title";
import ReviewCardV2 from "../Cards/ReviewCardV2";
import LogoCard from "../Cards/LogoCard";
import Carousel from "react-multi-carousel";
import {
  responsiveCustomerReviewSlider,
  responsiveLogoSlider,
} from "../../utils/responsiveSlider";
import reviews from "../../data/reviews";

function CustomerReviews() {
  return (
    <section
      className="homec-bg-third-color pd-top-120 pd-btm-120 homec-bg-cover"
      style={{ backgroundImage: "url('img/bg-shape-three.svg'" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section TItle --> */}
            <Title
              firstText="CUSTOMER REVIEWS"
              secondText="What’s Our Customer Say"
              marginSize="60"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <!-- Testimonial Slider --> */}

            <Carousel
              responsive={responsiveCustomerReviewSlider}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              removeArrowOnDeviceType={[
                "superLargeDesktop",
                "desktop",
                "tablet",
                "mobile",
              ]}
            >
              {reviews?.map((review) => (
                <ReviewCardV2
                  key={review.id}
                  rating={review.rating}
                  text={review.text}
                  authorName={review.authorName}
                  authorPosition={review.authorPosition}
                />
              ))}
            </Carousel>

            {/* <!-- End Testimonial Slider --> */}
          </div>
        </div>

        <div className="row mg-top-50">
          <div className="col-12">
            <h4 className="homec-medium-title text-center mg-btm-30">
              Trusted by big brands
            </h4>
            {/* <!-- Clients Logo Slider --> */}
            <div className="swiper mySwiper homec-slider-client loading">
              <Carousel
                responsive={responsiveLogoSlider}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={[
                  "superLargeDesktop",
                  "desktop",
                  "tablet",
                  "mobile",
                ]}
              >
                <LogoCard link="#" img="img/brand/damac.png" />
                <LogoCard link="#" img="img/brand/emaar.png" />
                <LogoCard link="#" img="img/brand/ellington.png" />
                <LogoCard link="#" img="img/brand/binghatti.png" />
                <LogoCard link="#" img="img/brand/meraas.png" />
                <LogoCard link="#" img="img/brand/danube.png" />
              </Carousel>
            </div>
            {/* <!-- End Clients Logo Slider --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
