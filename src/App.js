import './App.css';
import React, { lazy, Suspense } from 'react'
// import Copyright from './components/Copyright';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ScrollToTop from './components/ScrollToTop';
// import Home from './pages/Home';
// import Features from './pages/Features';
// import Pricing from './pages/Pricing'
// import Services from './pages/Services';
// import Demo from './pages/Demo';
// import AboutUs from './pages/AboutUs';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import Blogs from './pages/Blogs';
// import BlogsContent from './pages/BlogsContent';
// import Calendar from './pages/Calendar';
// import TermsAndConditions from './pages/TermsAndConditions'

const Copyright = lazy(() => import('./components/Copyright'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Services = lazy(() => import('./pages/Services'));
const Demo = lazy(() => import('./pages/Demo'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogsContent = lazy(() => import('./pages/BlogsContent'));
const Calendar = lazy(() => import('./pages/Calendar'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));


function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Suspense fallback=''>
          <ScrollToTop />
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/features' component={Features} exact={true} />
            <Route path='/pricing' component={Pricing} exact={true} />
            <Route path='/services' component={Services} exact={true} />
            <Route path='/demo' component={Demo} exact={true} />
            <Route path='/about-us' component={AboutUs} exact={true} />
            <Route path='/privacy-policy' component={PrivacyPolicy} exact={true} />
            <Route path='/terms-conditions' component={TermsAndConditions} exact={true} />
            <Route path='/blogs' component={Blogs} exact={true} />
            <Route path='/blogs/:title' component={BlogsContent} exact={true} />
            <Route path='/calendar' component={Calendar} exact={true} />
          </Switch>
          <Footer />
          <Copyright />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
