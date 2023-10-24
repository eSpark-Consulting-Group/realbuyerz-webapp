import React from 'react';
import Head from 'next/head';

const CustomHead = (props) => {
    const {
        title,
        description,
        ogTitle,
        ogDescription,
        ogUrl,
        ogImage,
        twitterTitle,
        twitterDescription,
        twitterImage,
    } = props;

    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>{title}</title>
            <meta name='description' content={description} />

            {/* Add links to stylesheets, favicon, or other external resources */}
            <link rel='icon' href='/favicon.ico' />

            {/* Open Graph meta tags for social media sharing */}
            <meta property='og:title' content={ogTitle} />
            <meta property='og:description' content={ogDescription} />
            <meta property='og:url' content={ogUrl} />
            <meta property='og:image' content={ogImage} />
            <meta property='og:type' content='website' />

            {/* Twitter Card meta tags for Twitter sharing */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={twitterTitle} />
            <meta name='twitter:description' content={twitterDescription} />
            <meta name='twitter:image' content={twitterImage} />
        </Head>
    );
};

export default CustomHead;
