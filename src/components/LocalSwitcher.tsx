"use client";

import React, { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "flowbite-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales } from "./Nav/locales";

export const LocalSwitcher = () => {
    const { lang } = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const getPathname = (lng: string) => {
        const path = pathname.split("/" + lang).join("");
        return "/" + lng + path;
        // return "/" + lng;
    };

    const [isLangSelected, setIsLangSelected] = useState(lang);

    const onItemClick = (e: string) => {
        const nextLocale = e;
        setIsLangSelected(nextLocale);
        router.push(getPathname(e));
        // getPathname(e);
    };

    return (
        <div className="flex flex-row gap-x-2">
            <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                    <div>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-rose-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                )}
            >
                {locales.map((lng) => {
                    if (lng.code === lang) return null;

                    return (
                        <Dropdown.Item
                            key={lng.code}
                            value={lng.code}
                            onClick={() => onItemClick(lng.code)}
                        >
                            {lng.code}
                        </Dropdown.Item>

                        // <Link href={getPathname(lng.code)}>{lng.ico}</Link>
                    );
                })}
            </Dropdown>
            <span className="uppercase">{isLangSelected}</span>
        </div>
    );
};
