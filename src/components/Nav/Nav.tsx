import Link from 'next/link';
import { Lang } from './Lang';
import { DarkThemeToggle } from "flowbite-react";

export const Nav = () => {
    return (
        <nav className="flex h-20 items-center justify-between px-12 dark:bg-slate-500">
            <Link href="/">YouTube Piloto</Link>
            <Lang />
            <DarkThemeToggle />
        </nav>
    );
};
