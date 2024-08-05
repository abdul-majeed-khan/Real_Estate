import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import HomecHero from "../HomecHero/HomecHeroV2";
import Features from "../Features/FeaturesV2";
import About from "../About/About";
import LatestPropertyV2 from "../LatestProperty/LatestPropertyV2";
import PropertyListing from "../PropertyListing";
import AgentsV2 from "../Agents/AgentsV2";
import FunFacts from "../FunFact";
import CustomerReviews from "../CustomerReviews";
// import DownloadApp from "../DownloadApp";
import Blog from "../Blog";
import Preloader from "../Loader";

function Home2() {
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Header />
        <HomecHero />
        <Features />
        <About />
        <LatestPropertyV2 />
        <PropertyListing />
        <AgentsV2 />
        <FunFacts />
        <CustomerReviews />
        {/* <DownloadApp /> */}
        <Blog />
        <Footer />
        <GoTopBtn />
      </>
    );
  }

  return component;
}

export default Home2;
