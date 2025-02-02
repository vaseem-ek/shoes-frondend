import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ResponseProvider } from './ContextApi/responseContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ResponseProvider> {/* Use the correct provider here */}
        <App />
      </ResponseProvider>
    </BrowserRouter>
  </StrictMode>
);
