'use client';

import { useParams, usePathname } from 'next/navigation';

import Link from 'next/link';
// import { FlagKey, flag, locales } from './locales';
import { locales } from "./locales";

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  const getPathname = (lng: string) => {
    const path = pathname.split('/' + lang).join('');
    return '/' + lng + path;
  };

  return (
      <div className="group flex items-center">
          <button>{lang}</button>

          <ul className="absolute top-12 flex-col gap-2 group-hover:flex">
              {locales.map((lng) => {
                  if (lng.code === lang) return null;

                  return (
                      <li key={lng.code}>
                          <Link href={getPathname(lng.code)}>{lng.code}</Link>
                      </li>
                  );
              })}
          </ul>
      </div>
  );
};
