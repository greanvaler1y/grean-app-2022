import { SearchIndex } from 'algoliasearch';

export type LocalizedIndex = {
  indexName: SearchIndex;
  locale: string;
  querySuggestionsIndexName?: string;
};

export const globalConfig = {
  pagination: {
    pageSize: 6,
    morePostsSize: 6,
    featuredPostsSize: 6,
    allPostsSize: 50
  },
  menuLinks: [
    { href: '/', title: 'home' },
    { href: '/blog/p/1', title: 'blog' },
    { href: '/categories', title: 'categories' },
    { href: '/about', title: 'about' }
  ]
};

export const localizedAlgoliaIndices: LocalizedIndex[] = [
  {
    indexName: 'addict-ru',
    locale: 'ru',
    querySuggestionsIndexName: 'addict-ru_query_suggestions'
  },
  {
    indexName: 'addict-pl',
    locale: 'pl',
    querySuggestionsIndexName: 'addict-pl_query_suggestions'
  }
];

export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21',
  useCdn: true
};

export const seoConfig = {};
