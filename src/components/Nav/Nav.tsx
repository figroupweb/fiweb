import { Lang } from "./Lang";
import { DarkThemeToggle } from "flowbite-react";
import Logo from "@/ux/logo";

export const Nav = () => {
    return (
        <nav className="flex h-20 items-center justify-between px-12 dark:bg-slate-500">
            <Logo hSize={11} mode={"light"} />
            <Lang />
            <DarkThemeToggle />
        </nav>
    );
};
