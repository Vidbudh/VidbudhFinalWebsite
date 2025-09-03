import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AIStrategyPage from './pages/AIStrategyPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import GenAIPOCPage from './pages/GenAIPOCPage.tsx';
import GenAIImplementationPage from './pages/GenAIImplementationPage.tsx';
import GenAIAuditPage from './pages/GenAIAuditPage.tsx';
import AIWorkshopsPage from './pages/AIWorkshopsPage.tsx';
import GenAIServicesPage from './pages/GenAIServicesPage.tsx';
import CPOServicesPage from './pages/CPOServicesPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai-strategy" element={<AIStrategyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gen-ai-poc" element={<GenAIPOCPage />} />
        <Route path="/gen-ai-implementation" element={<GenAIImplementationPage />} />
        <Route path="/gen-ai-audit" element={<GenAIAuditPage />} />
        <Route path="/ai-workshops" element={<AIWorkshopsPage />} />
        <Route path="/gen-ai-services" element={<GenAIServicesPage />} />
        <Route path="/cpo-services" element={<CPOServicesPage />} />
      </Routes>
    </Router>
  </StrictMode>
);