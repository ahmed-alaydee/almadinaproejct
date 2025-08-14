import AboutSection from "../About/about"
import BlogSlider from "../Blog/blog"
import HeroSection from "../Herosection/herosection"
import OurWorks from "../ourworks/ourworks"
import Services from "../Services/services"
import Testimonial from "../Testimonial/testimonial"
import FeatureCards from "../feature/feature";
import ClientsSection from "../scetionvideo/video"
import ScrollToTopButton from "../ScrollToTopButtonN"
import Counters from "../Counters/Counters"
import BlogSlidersection from "../Blog/blogsectionhome"

 
export default function HomePage(){
    return (
      <>
        <HeroSection />
        <AboutSection />
        <Services />
        <OurWorks />
        <Counters />
        <Testimonial />
        <ClientsSection />
        <FeatureCards />
        <BlogSlidersection/>
        <ScrollToTopButton />
      </>
    );
}