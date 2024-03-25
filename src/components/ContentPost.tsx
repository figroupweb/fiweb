'use client'

import React from 'react';
import DOMPurify from "isomorphic-dompurify";

interface Post {
    titlePost: string;
}

export default function ContentPost({
    titlePost
}: Post) {
    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(titlePost, { USE_PROFILES: { html: true } }),
                }}
            />
        </div>
    );
}