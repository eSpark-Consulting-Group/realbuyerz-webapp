const routes = {
  general: [
    '/properties',
    '/properties/:id',
    '/agent/1',
    '/privacy-policy',
    '/terms-conditions',
  ],
  agent: [
    '/dashboard/live-bidding',
    '/dashboard/add-bidding',
    '/dashboard/add-bidding/:id',
    '/inbox',
    '/profile',
    '/dashboard/prop-shop/buy-product',
    '/dashboard/prop-shop/order-history',
    '/dashboard/property-managment/all-listings',
    '/dashboard/property-post/all-listings',
    '/dashboard/proposals',
    '/dashboard/proposals/:id',
  ],
  user: [
    '/dashboard',
    '/all-postings',
    '/all-postings/add-posting',
    '/all-postings/add-posting/:id',
    '/inbox',
    '/user-setting',
    '/user-setting-preferences',
  ],
};

export default routes;
