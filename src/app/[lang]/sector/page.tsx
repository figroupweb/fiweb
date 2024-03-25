import ContentPost from "@/components/ContentPost";
import Loading from "@/components/Loading";
import { Locale } from "@/config/i18n.config";
import { getAllPostsByLanguage } from "@/data";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import Script from "next/script";
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
            <div data-form-id='2b67b781-b57f-ee11-8179-6045bd905432' data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/2fb5c271-8d0f-4705-9414-84152194938e/landingpageforms' data-cached-form-url='https://assets-eur.mkt.dynamics.com/2fb5c271-8d0f-4705-9414-84152194938e/digitalassets/forms/2b67b781-b57f-ee11-8179-6045bd905432' ></div>
            <Script async defer id="form1" src="https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js" />

            {news.map((post: Post) => (
                <ContentPost key={post.uri} titlePost={post.title} />
            ))
            }
        </Suspense >
    );
}