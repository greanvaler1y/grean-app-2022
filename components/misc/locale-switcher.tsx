import { useRouter } from 'next/router';
export default function LocaleSwitcher() {
  const router = useRouter();
  const handleLocale = (locale) =>
    router.push(router.asPath, router.asPath, { locale: locale });
  return (
    <button
      aria-label="Toggle Site Language"
      type="button"
      className="flex items-center "
      onClick={() => handleLocale(router.locale === 'ru' ? 'pl' : 'ru')}
    >
      <span className="font-semibold transition-all duration-100 text-base md:text-xl hover:text-teal-600 dark:hover:text-teal-400">
        {router.locale === 'ru' ? 'ru' : 'pl'}
      </span>
    </button>
  );
}
