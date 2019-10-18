import React from 'react';
import PropTypes from 'prop-types';
import { isServer } from '../utils/isServer';
import LanguageService from './language';

let clientSideStores;

const getServices = (initialData = { language: '' }) => {
  if (isServer) {
    return {
      languageService: new LanguageService(initialData.language),
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      languageService: new LanguageService(initialData.language),
    };
  }

  return clientSideStores;
};

const StoreContext = React.createContext();

const ServiceProvider = ({ value, children }) => (
  <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
);

ServiceProvider.propTypes = {
  value: PropTypes.shape({
    languageService: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const useMobxServices = () => React.useContext(StoreContext);

export { getServices, ServiceProvider, useMobxServices };
