import Link from 'next/link';

export default function Tags({ tags }) {
  return (
    <>
      {tags &&
        tags.map((tag) => (
          <Link href={`/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-3 text-base lowercase font-medium transition-all delay-100 hover:text-teal-800 dark:hover:text-teal-400">
              <span className=" text-teal-600">#</span>
              {`${tag.title}`}
            </a>
          </Link>
        ))}
    </>
  );
}
