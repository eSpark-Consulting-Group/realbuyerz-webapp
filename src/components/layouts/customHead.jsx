import React from 'react';
import { seoContent } from '@/app/constants/SEOConstant';
import { usePathname } from 'next/navigation';

const CustomHead = () => {
  const currentPath = usePathname();
  // Find the matching SEO content based on the currentPath
  const mataData = seoContent.find((item) => item.link === currentPath) || {};
  console.log('mataData', mataData);
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="robots" content="follow, index" />
      <title>{mataData?.title}</title>
      <meta name="description" content={mataData?.description} />
      <link rel="canonical" href={mataData?.canonical} />
      <meta property="og:locale" content={mataData?.ogLocal} />
      <meta property="og:type" content={mataData?.ogType} />
      <meta property="og:title" content={mataData?.ogTitle} />
      <meta property="og:description" content={mataData?.ogDescription} />
      <meta property="og:url" content={mataData?.ogUrl} />
      <meta property="og:site_name" content={mataData?.ogSiteName} />
      <meta property="og:image" content={mataData?.ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={mataData?.description} />

      <meta name="twitter:card" content={mataData?.twitterCard} />
      <meta name="twitter:title" content={mataData?.twitterTitle} />
      <meta name="twitter:description" content={mataData?.twitterDescription} />
      <meta name="twitter:site" content={mataData?.ogSiteName} />
      <meta name="twitter:creator" content="@RealBuyerz" />
      <meta name="twitter:image" content={mataData?.ogImage} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={mataData?.articleAuthor} />
      <meta
        property="article:modified_time"
        content={mataData?.articleModifiedTime}
      />
      <meta
        property="article:published_time"
        content={mataData?.articlePublishTime}
      />
      <meta name="article:author" content={mataData?.articleAuthor} />
    </>
  );
};

export default CustomHead;
