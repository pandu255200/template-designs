import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Prototype from './components/Prototype';
import Home from './components/Home';
import History from './components/History';

import Analytics from './components/Analytics';
// import Analyticshome from './components/Analyticshome';
import ZodhaGpt from './components/ZodhaGpt';
import Maintemplate from './components/Maintemplate';
import ProductPage from './components/ProductsZodha';
import ProAnalytics from './components/ProAnalytics';
import ProFace from './components/ProFace';
import CustomsPage from './components/CustomsPage';
import CustMain from './components/CustMain';
import ProductMain from './components/ProductMain';
import ProMain from './components/ProMain';

function App() {
  return (
    <Router>
  <Routes>
    <Route path='/' element={<Maintemplate />} />

    {/* Facegenie */}
    <Route path="/prototype" element={<Prototype />}>
      <Route path="home" element={<Home />} />
      <Route path="history" element={<History />} />
        </Route>
         <Route path="/product/facegenie" element={<ProFace />} />

    {/* AnalyticsKart */}
    <Route path="/analytics" element={<Analytics />}>
      {/* <Route path="home" element={<Analyticshome />} /> */}
    </Route>

    <Route path="/product/analytics" element={<ProAnalytics />} />

    {/* ZodhaGpt */}
    <Route path="/zodhagpt" element={<ZodhaGpt />} />
    <Route path="/product/zodhagpt" element={<ProductPage />} />
    <Route path="/customs" element={<CustomsPage />} />
    <Route path="/main" element={<CustMain />} />
    <Route path="/product/main" element={<ProductMain />} />
    <Route path="/mainproduct" element={<ProMain />} />
    
  </Routes>
</Router>

  );
}

export default App;
