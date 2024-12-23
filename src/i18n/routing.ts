import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeCookie: {
        name: 'USER_LOCALE',
    }
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);