import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// Name: Comfy Store JSM
// Domain: dev-mlhu19lf.us.auth0.com
// Client ID: RFpu3y74M0mFWCaVaG6NP58xhpcjLPPD
// Client Secret: qLc-54DoWhCxyjdTUEAZt-76jAcQwsOkAvy7Ydjkwngt_Ozd19B0q0vBPd047XAo

ReactDOM.render(
  <Auth0Provider
    // domain='dev-mlhu19lf.us.auth0.com'
    // clientId='RFpu3y74M0mFWCaVaG6NP58xhpcjLPPD'
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     ReactDOM.render(
//       <NextApp />,
//       document.getElementById('root')
//     )
//   })
// }