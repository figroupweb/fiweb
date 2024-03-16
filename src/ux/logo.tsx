"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    hSize: number;
    mode: string;
}

const Logo = ({ hSize = 11, mode = "light" }: Props) => {
    const urlLogo = () => {
        switch (mode) {
            case "light":
                return "https://res.cloudinary.com/duzbhhs72/image/upload/v1709561477/FI_Group_zrliai.png";
            case "dark":
                return "https://res.cloudinary.com/duzbhhs72/image/upload/v1709820465/FI_Group_NEG_2_wlp5v1.png";
            default:
                return "https://res.cloudinary.com/duzbhhs72/image/upload/v1709561477/FI_Group_zrliai.png";
        }
    };

    return (
        <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
                className={`w-auto h-8 lg:h-${hSize}`}
                width="103"
                height="72"
                src={urlLogo()}
                alt="image"
            />
        </Link>
    );
};

export default Logo;
