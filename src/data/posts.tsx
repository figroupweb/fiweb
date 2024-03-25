const endpointGraphQL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

async function getAllPostsByLanguage(language: string, cacheSec: number = 60) {
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

    const endpoint = endpointGraphQL;
    if (!endpoint) {
        throw new Error("No endpoint provided");
    }

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        next: {
            revalidate: cacheSec,
        },
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await res.json();

    if (responseBody && responseBody.data && responseBody.data.posts.nodes) {
        return responseBody.data.posts.nodes;
    }
}

export { getAllPostsByLanguage }; 