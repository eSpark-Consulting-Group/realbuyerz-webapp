export const getMetadata = (data) => ({
  metadataBase: new URL('https://www.realbuyerz.com/'),
  title: data.title,
  description: data.description,
  keywords: ['Real Buyers', 'Property Real Estate', 'Sell Buy Rent Property'],
  author: 'Real Buyers',
  alternates: {
    canonical: `https://www.realbuyerz.com${data.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: 'index, follow',
  openGraph: {
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: data.title,
    description: data.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Real Buyers', 'Mehdi Raza'],
    siteName: 'Real Buyers: Descriptions',
    locale: 'en_US',
    images: [
      {
        url: data.image,
        alt: data.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: data.title,
    description: data.description,
    siteId: '@realbuyerz',
    creator: '@realbuyerz',
    images: [data.image],
  },
});

export const getBlogsMetadata = (data) => ({
  metadataBase: new URL('https://www.realbuyerz.com/'),
  title: data?.title,
  description: data?.description,
  keywords: ['Real Buyerz', 'Property Real Estate', 'Sell Buy Rent Property'],
  author: 'Real Buyerz',
  alternates: {
    canonical: `https://www.realbuyerz.com/blogs/${data?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: 'index, follow',
  openGraph: {
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: data?.title,
    description: data?.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Real Buyerz', 'Mehdi Raza'],
    siteName: 'Real Buyerz: Descriptions',
    locale: 'en_US',
    images: [
      {
        url: data?.image,
        alt: data?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: data?.title,
    description: data?.description,
    siteId: '@RealBuyerz',
    creator: '@RealBuyerz',
    images: [data?.image],
  },
});
