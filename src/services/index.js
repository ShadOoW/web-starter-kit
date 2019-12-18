import React from 'react';
import PropTypes from 'prop-types';
import { isServer } from '../utils/isServer';
import LanguageService from './language';
import GithubService from './github';
import ReadmeService from './readme';

let clientSideServices;

const getServices = (initialData = { language: '', github: {} }) => {
  if (isServer) {
    return {
      languageService: new LanguageService(initialData.language),
      githubService: new GithubService(initialData.github),
      readmeService: new ReadmeService(initialData.readme),
    };
  }
  if (!clientSideServices) {
    clientSideServices = {
      languageService: new LanguageService(initialData.language),
      githubService: new GithubService(initialData.github),
      readmeService: new ReadmeService(initialData.readme),
    };
  }

  return clientSideServices;
};

const ServiceContext = React.createContext();

const ServiceProvider = ({ value, children }) => (
  <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
);

ServiceProvider.propTypes = {
  value: PropTypes.shape({
    languageService: PropTypes.object.isRequired,
    githubService: PropTypes.object.isRequired,
    readmeService: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const useMobxServices = () => React.useContext(ServiceContext);

export { getServices, ServiceProvider, useMobxServices };
