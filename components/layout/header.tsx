import cn from 'classnames';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LocaleSwitcher from '@/components/misc/locale-switcher';
import ThemeSwitcher from '@/components/misc/theme-switcher';
import MobileMenu from '@/components/misc/mobile-menu';
import Logo from '@/components/misc/logo';

import Config from '@/config/global-config';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-medium  text-gray-600 dark:text-gray-400',
          'hidden text-xl md:inline-block p-2 lg:py-4 items-center hover:underline transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

function Header() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Navigation');
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem] inline-flex flex items-center">
          <MobileMenu />
          {Config.menuLinks.map((link, index) => (
            <NavItem
              href={link.href}
              text={index === 0 ? '//' : t(link.title)}
              key={link.title}
            />
          ))}
        </div>
        {mounted && (
          <div className="inline-flex flex">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;