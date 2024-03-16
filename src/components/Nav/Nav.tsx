import { Lang } from "./Lang";
import { DarkThemeToggle } from "flowbite-react";
import Logo from "@/ux/Logo";

export const Nav = () => {
    return (
        <nav className="flex h-20 items-center justify-between px-12 dark:bg-slate-500">
            <Logo />
            <Lang />
            <DarkThemeToggle />
        </nav>
    );
};
