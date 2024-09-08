import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import './assets/css/App.css'
import store, { persistor } from './redux/store';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StrictMode>
  </Provider>,
)
