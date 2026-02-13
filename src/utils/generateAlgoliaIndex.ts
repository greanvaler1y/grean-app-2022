/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import algoliasearch from "algoliasearch";

import { getPosts } from "./getPosts";
import { LOCALIZED_ALGOLIA_INDICES } from "./global.config";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_SEARCH_ADMIN_KEY;

if (!appId || !apiKey) {
  console.warn("Algolia environment variables are missing. Skipping index generation.");
}

const algoliaInstance = appId && apiKey ? algoliasearch(appId, apiKey) : null;

const generateIndexPerLocale = async (indexName: string, locale: string) => {
  const data = await getPosts(locale);
  const mappedData = data.map((post) => {
    return {
      objectID: post.objectID,
      title: post.title,
      slug: post.slug,
      tags: post.tags,
    };
  });

  const index = algoliaInstance.initIndex(indexName);

  try {
    await index.saveObjects(mappedData);
    console.log(`Saving ${mappedData.length} documents to index:  ${indexName}`);
    return {
      status: 200,
      body: "Success!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: error,
    };
  }
};

export default async function generateAlgoliaIndex() {
  if (!algoliaInstance) {
    return;
  }
  // eslint-disable-next-line no-restricted-syntax
  for await (const i of LOCALIZED_ALGOLIA_INDICES) {
    generateIndexPerLocale(i.indexName, i.locale);
  }
}

generateAlgoliaIndex();
