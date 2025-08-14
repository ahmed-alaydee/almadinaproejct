import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Homepage/homepage';
import AboutPage from './components/Aboutpage/aboutpage';
import OurWorksPage from './components/OurworksHomepage/Ourworks';
import BlogPage from './components/BlogsPage/Blogpage';
import Services from './components/Services/services';
import DesignDevelop from './components/AllServices/DesignDevelopment/designdevelopment';
import DetailsProjectWork from './components/ourworks/detailsprojectwork';
import HomeProjectIndex from './components/Services/homeprojectindex';
import ContactPage from './components/contactpage/Contact';
import ScrollToTop from './components/ScrollToTopButtonN';
  import BlogSliderditals from './components/Blog/blog';


function App() {


  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourworks" element={<OurWorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogditals" element={<BlogSliderditals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/designdevelopment" element={<DesignDevelop />} />
        <Route path="/detailsprojectwork" element={<DetailsProjectWork />} />
        <Route path="/HomeProjectIndex" element={<HomeProjectIndex />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App
