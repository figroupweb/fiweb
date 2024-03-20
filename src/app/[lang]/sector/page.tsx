import Loading from "@/components/Loading";
import { Locale } from "@/config/i18n.config";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import React, { Suspense } from "react";

async function getPosts(language: any) {
    const query = `
        query posts($language: LanguageCodeFilterEnum) {
          posts(where: {language: $language}) {
            nodes {
              title
              uri
            }
          }
        }
    `;

    const variables = {
        language,
    };

    const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
    if (!endpoint) {
        throw new Error("No endpoint provided");
    }

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        next: {
            revalidate: 60,
        },
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await res.json();

    if (responseBody && responseBody.data && responseBody.data.posts.nodes) {
        return responseBody.data.posts.nodes;
    }
}

export default async function SectorPage({
    params,
}: {
    params: { lang: Locale };
}) {
    const { dictionary } = getDictionaryServerOnly(params.lang);
    const idioma = params.lang.toUpperCase();
    const news = await getPosts(idioma);
    return (
        <Suspense fallback={<Loading />}>
            <h3 className="text-lg font-semibold">
                {dictionary.sector.name} new
            </h3>
            {news.map((post: { uri: React.Key | null | undefined; title: string }) => (
                <div key={post.uri} className="card">
                    {post.title}
                </div>
            ))}
        </Suspense>
    );
}