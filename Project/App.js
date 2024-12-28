import Ads from "./components/Ads";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Ownwer from "./components/Ownwer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'

import Story from './components/Story'
import Product from './components/Product'
import FAQs from './components/FAQs'
import Contactus from './components/Contactus'


function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/product" element={<Product />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contactus" element={<Contactus />} />
        
      </Routes>
    </Router>
   <Footer/>
    </>
  );
}

export default App;
