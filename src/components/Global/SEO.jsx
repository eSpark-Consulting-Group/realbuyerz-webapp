import React from 'react';

const Seo = ({ data, alter }) => {
  const metaData = data || alter;

  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="follow, index" />
      <title>{metaData?.title}</title>
      <meta name="description" content={metaData?.description} />
      <link rel="canonical" href={metaData?.canonical}></link>

      <meta property="og:local" content={metaData?.ogLocal} />
      <meta property="og:type" content={metaData?.ogType} />
      <meta property="og:title" content={metaData?.ogTitle} />
      <meta property="og:description" content={metaData?.ogDescription} />
      <meta property="og:url" content={metaData?.ogUrl} />
      <meta property="og:site_name" content={metaData?.ogSiteName} />
      <meta property="og:image" content={metaData?.ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={metaData?.description} />

      <meta name="twitter:card" content={metaData?.twitterCard} />
      <meta name="twitter:title" content={metaData?.twitterTitle} />
      <meta name="twitter:description" content={metaData?.twitterDescription} />
      <meta name="twitter:site" content={metaData?.ogSiteName} />
      <meta name="twitter:creator" content="@twitter:RealBuyerz" />
      <meta name="twitter:image" content={metaData?.ogImage} />
      <meta name="twitter:label1" content="Written by RealBuyerz" />
      <meta
        name="twitter:label2"
        content="Powered by @twitter:eSparkConsGroup"
      />

      <meta
        property="article:modified_time"
        content={metaData?.articleModifiedTime}
      />
      <meta
        property="article:published_time"
        content={metaData?.articlePublishTime}
      />
      <meta name="article:author" content={metaData?.articleAuthor} />
    </>
  );
};

export default Seo;
