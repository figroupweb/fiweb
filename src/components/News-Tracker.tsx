import React, { Suspense } from "react";
import { FiArrowRight } from "react-icons/fi";
import { outfit } from "../utils/fonts";
import Loading from "./Loading";

async function getNewsTracker() {
    const query = `
  {
    fICountryManager {
      acfCountryManager {
        newsTrackers {
          nodes {
            ... on Post {
              translation(language: ES) {
                uri
                title
              }
            }
          }
        }
      }
    }
  }
  `;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
            query
        )}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const { data } = await res.json();
    console.log(data);
    return data?.fICountryManager?.acfCountryManager?.newsTrackers?.nodes[0];
}

export default async function NewsTracker() {
    const news = await getNewsTracker();

    return (
        <div className="bg-green-300 w-full flex justify-center items-center py-3.5 px-6 md:px-0 mx-auto">
            <Suspense fallback={<Loading />}>
                <h3
                    className={`${outfit.className} text-white uppercase text-sm md:text-base font-semibold tracking-wide`}
                >
                    {news.translation.title}
                </h3>
                <FiArrowRight className="text-white font-bold pl-3 text-2xl md:text-4xl" />
            </Suspense>
        </div>
    );
}
