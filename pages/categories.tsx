import Link from 'next/link';

import { AllAuthorsTagsAndTotalPosts } from '@/lib/api';

import Container from '@/components/layout/container';
import PageTitle from '@/components/misc/page-title';
import { useTranslations } from 'next-intl';

export default function GetAllAuthorsAndTags({ authors, tags }) {
  const t = useTranslations('Titles');
  const sortedAutors = authors.sort(
    (a, b) =>
      b.linkedFrom.postCollection.total - a.linkedFrom.postCollection.total
  );
  const sortedTags = tags.sort(
    (a, b) =>
      b.linkedFrom.postCollection.total - a.linkedFrom.postCollection.total
  );
  return (
    <Container title={t('categories')} type="page">
      <main className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto mb-16">
        <div className="flex flex-col items-start justify-start divide-y divide-gray-300 dark:divide-gray-500 md:mb-6 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pt-2 pb-4 md:space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight sm:leading-10 md:border-r-2 md:pr-6 md:leading-14">
              {t('authors')}
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            {sortedAutors.length === 0 && 'No tags found.'}
            {sortedAutors.map((autor) => {
              return (
                <div key={autor} className="mt-2 mb-2 mr-5">
                  <Link href={`/tag/${autor.slug}`}>
                    <a className="mr-3 text-base font-medium  hover:text-orange-600 dark:hover:text-orange-400 hover:underline transition-all delay-100">
                      {`${autor.name} (${autor.linkedFrom.postCollection.total})`}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start divide-y divide-gray-300 dark:divide-gray-500 mb-6 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pt-2 pb-4 md:space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight sm:leading-10 md:border-r-2 md:pr-6 md:leading-14">
              {t('tags')}
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            {sortedTags.length === 0 && 'No tags found.'}
            {sortedTags.map((tag) => {
              return (
                <div key={tag} className="mt-2 mb-2 mr-5">
                  <Link href={`/author/${tag.slug}`}>
                    <a className="mr-3 text-base font-medium  hover:text-orange-600 dark:hover:text-orange-400 hover:underline transition-all delay-100">
                      {`${tag.title} (${tag.linkedFrom.postCollection.total})`}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Container>
  );
}






















export async function getStaticProps({ locale }) {
  const { authors, tags } = await AllAuthorsTagsAndTotalPosts(locale);
  return {
    props: {
      authors,
      tags,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}