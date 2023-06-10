import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ProvidersWrapper from './providers/Wrapper';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>,
);
