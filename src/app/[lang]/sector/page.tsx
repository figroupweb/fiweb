import Loading from "@/components/Loading";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import React, { Suspense } from "react";

async function getPosts(language) {
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

    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
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
            <h3 className="text-lg font-semibold">{dictionary.sector.name}</h3>
            {news.map((post) => (
                <div key={post.uri} className="card">
                    {post.title}
                </div>
            ))}
        </Suspense>
    );
}
