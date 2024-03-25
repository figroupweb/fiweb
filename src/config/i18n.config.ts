const defaultLocale = 'es';
const langs = [defaultLocale, 'en'] as const;

const locales = langs as unknown as string[];
export const i18n = {
    defaultLocale,
    locales,
    localeDetection: true,
    // para configurar las urls dinamicas de CPT
    pathnames: {
        '/about': {
            en: '/about',
            es: '/somos'
        }
    }
};

export type Locale = (typeof langs)[number];
