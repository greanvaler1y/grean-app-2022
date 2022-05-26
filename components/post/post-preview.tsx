import Link from 'next/link';

import Tags from '@/components/tag/tags';
import PostDetails from '@/components/post/post-details';
import PreviewImage from '@/components/image/preview-image';

export default function PostPreview({
  title,
  previewImage,
  date,
  author,
  tags,
  slug,
  readingTime
}) {
  return (
    <div>
      <PreviewImage title={title} slug={slug} url={previewImage.url} />
      <h4 className="w-full my-4 text-base font-medium  md:text-lg hover:text-teal-600  transition-all delay-100 dark:hover:text-teal-400 ">
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h4>
      <div className="flex flex-row ">
        <PostDetails date={date} readingTime={readingTime} author={author} />
      </div>
      <div className="flex flex-row text-sm">
        <Tags tags={tags} />
      </div>
    </div>
  );
}
