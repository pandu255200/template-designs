import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Product Pages
import Prototype from './components/pages/ProductPages/Facegenie';
import Analytics from './components/pages/ProductPages/Analytics';
import ZodhaGpt from './components/pages/ProductPages/ZodhaGpt';
import ProMain from './components/pages/ProductPages/ProMain';

// Template Page
import Maintemplate from './components/pages/TemplatePages/Maintemplate';

// Data Pages
import ProductPage from './components/pages/DataPages/ProductsZodha';
import ProAnalytics from './components/pages/DataPages/ProAnalytics';
import ProFace from './components/pages/DataPages/ProFace';
import ProductMain from './components/pages/DataPages/ProductMain';

// Custom Pages
import CustomsPage from './components/pages/CustomPages/CustomsPage';
import CustMain from './components/pages/CustomPages/CustMain';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Entry */}
        <Route path="/" element={<Maintemplate />} />

        {/* Product Pages */}
        <Route path="/product/facegenie" element={<ProFace />} />
        <Route path="/product/analytics" element={<ProAnalytics />} />
        <Route path="/product/zodhagpt" element={<ProductPage />} />
        <Route path="/product/main" element={<ProductMain />} />

        {/* UI Pages for Products (optional) */}
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/zodhagpt" element={<ZodhaGpt />} />
        <Route path="/mainproduct" element={<ProMain />} />

        {/* Custom Pages */}
        <Route path="/customs" element={<CustomsPage />} />
        <Route path="/main" element={<CustMain />} />
      </Routes>
    </Router>
  );
}

export default App;
