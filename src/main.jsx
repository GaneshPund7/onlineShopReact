// index.js or main.jsx

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1058441969384-pubcqga2i5ttafrlff3i6i6ef3q5fjoj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
