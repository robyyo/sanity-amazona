import sanityClient from '@sanity/client';
import config from './config';

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2021-10-21',
  useCdn: true,
});

export default client;
