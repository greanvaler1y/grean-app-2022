import { parseISO } from "date-fns";
import Link from "next/link";
import { useIntl, useTranslations } from "next-intl";

import { AvatarImage } from "@/components/AvatarImage";
import type { TAuthorBase } from "@/typings/schema-types";

export type PostMetaProps = {
  date: string;
  author: TAuthorBase;
  readingTime: number;
};

export function PostMeta({ author, date, readingTime }: PostMetaProps) {
  const intl = useIntl();
  const t = useTranslations("Post");
  return (
    <>
      <AvatarImage url={author.authorPicture} alt={author.authorName} />
      <div className="flex-1 pl-2">
        <Link href={`/author/${author.authorSlug}`}>
          <a className="text-sm font-bold text-stone-800 transition-all delay-100 hover:text-orange-600 dark:text-stone-200 dark:hover:text-green-400">
            {author.authorName}
          </a>
        </Link>
        <p className="text-sm text-stone-800 dark:text-stone-200">
          <time>
            {intl.formatDateTime(parseISO(date), {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {" • "}
          <span>{`${readingTime} ${t("reading_time")}`}</span>
        </p>
      </div>
    </>
  );
}
