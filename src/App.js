import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import Destination from './pages/destination/Destination';
import Packages from './pages/packages/Packages';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import TravelExperience from './pages/travelexperience/TravelExperience';
import BookingForm from './components/bookingform/BookingForm';
<<<<<<< HEAD
import Landing from './pages/landing/Landing';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import CookieDeclaration from './components/footer/CookieDeclaration';
import SecurityMeasures from './components/footer/SecurityMeasures';
import TermsAndConditions from './components/footer/TermsAndConditionds';
import PressRelease from './components/footer/PressRelese';
import Careers from './components/footer/Careers';
import FAQ from './components/footer/FAQ';
import LowFareTips from './components/footer/LowFareTips';
import PressCenter from './components/footer/PressCenter';
import ResourceCenter from './components/footer/ResourceCenter';
import Blog from './components/footer/Blog';
import Testimonial from './components/footer/Testimonial';

=======
import Footer from './components/footer/Footer'
>>>>>>> 0da457a (worked on about.css)
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/experiences" element={<TravelExperience />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookieDeclaration />} />
        <Route path="/security" element={<SecurityMeasures />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/press" element={<PressRelease />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/help" element={<FAQ />} />
        <Route path="/fare" element={<LowFareTips />} />
        <Route path="/center" element={<PressCenter />} />
        <Route path="/resource" element={<ResourceCenter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonial />} />
        {/* Add a 404 route if no match is found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      
    </div>
  );
};

export default App;

