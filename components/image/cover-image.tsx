import Image from 'next/image';
import { imageBuilder } from '@/lib/sanity';

export default function CoverImage({ title, url }) {
  return (
    <div className="-mx-5 sm:mx-0">
      <Image
        width={1240}
        height={540}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
        src={imageBuilder(url).width(1240).height(540).url()}
      />
    </div>
  );
}
