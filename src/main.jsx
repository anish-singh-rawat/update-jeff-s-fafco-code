import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'devextreme/dist/css/dx.light.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </>,
)
