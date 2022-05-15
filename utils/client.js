import sanityClient from '@sanity/client';
import config from './config';

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2021-08-31',
  useCdn: true,
});

export default client;
