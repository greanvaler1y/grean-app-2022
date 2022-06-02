import algoliasearch from 'algoliasearch';
import sanityClient from '@sanity/client';
import { VercelRequest, VercelResponse } from '@next/node'
import indexer from 'sanity-algolia';
import { logger, formatObjectKeys } from './_logger';

// TODO: im[plement 2 language search

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY
);

const clientConfig =  {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: false
}

const sanity = sanityClient(clientConfig);

export default function handler(request, _) {
  const passphrase = request.query.get('passphrase');
  if (passphrase !== process.env['ALGOLIA_SEARCH_ADMIN_KEY']) {
    return {
      status: 401
    };
  }
  // if (req.headers['content-type'] !== 'application/json') {
  //   res.status(400);
  //   res.json({ message: 'Bad request' });
  //   return;
  // }
  const projection = `"objectID": _id,
                      "title": title.ru,
                      "slug": slug.current,
                      "tags": tags[] -> title.ru`

  const indexName ='addict-ru'
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex(indexName),
        projection
      },
    },
    (document) =>  document
  );

  return sanityAlgolia
    .webhookSync(sanity, request.body as any)
    .then(() => ({
      status: 200,
      body: 'Success!',
    }))
    .catch((error) => {
      logger.error(
        {
          request: {
            headers: formatObjectKeys(request.headers),
            url: request.url,
            method: request.method
          },
          response: {
            statusCode: request.statusCode
          }
        },
        error.message
      );
    })
}
