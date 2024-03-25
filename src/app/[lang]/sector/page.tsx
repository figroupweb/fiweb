import ContentPost from "@/components/ContentPost";
import Loading from "@/components/Loading";
import { Locale } from "@/config/i18n.config";
import { getAllPostsByLanguage } from "@/data";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import React, { Suspense } from "react";

interface Post {
    uri: React.Key | null | undefined | string;
    title: string;
}

export default async function SectorPage({
    params,
}: {
    params: { lang: Locale };
}) {
    const { dictionary } = getDictionaryServerOnly(params.lang);
    const idioma = params.lang.toUpperCase();
    const news = await getAllPostsByLanguage(idioma);
    return (
        <Suspense fallback={<Loading />}>
            <h3 className="text-lg font-semibold">
                {dictionary.sector.name} new
            </h3>
            {news.map((post: Post) => (
                <ContentPost key={post.uri} titlePost={post.title} />
            ))
            }
        </Suspense >
    );
}