export const HEADER_MENU = [
  {
    searchIcon: '/images/Live-bidding-icons/headerSearchIcon.svg',
    linkIcon: '/images/Live-bidding-icons/headerGotopageIcon.svg',
    myListingIcon: '/images/Live-bidding-icons/headerHandBell.svg',
    PostListingIcon: '/images/Live-bidding-icons/postListing.svg',
    profileIcon: '/images/Live-bidding-icons/headerProfileIcon.svg',
  },
];

export const LINK_NAME = 'Go to Rb.com';
export const SEARCH = 'Search';

export const AGENT_MENU_ITEM = [
  {
    id: 1,
    icon: '/images/Live-bidding-icons/liveBidding.svg',
    iconActive: '/images/Live-bidding-icons/liveBiddingActive.svg',
    title: 'Live Bidding',
    link: '/dashboard/live-bidding',
  },
  {
    id: 2,
    icon: '/images/Live-bidding-icons/propertyManagement.svg',
    title: 'Property Management',
    link: '#',
    subItem: [
      {
        subTitle: 'Post Listing',
        link: '/dashboard/property-managment/proposals/all-listings',
      },
      {
        subTitle: 'All Listing',
        link: '/dashboard/property-managment/proposals/post-listing',
      },
    ],
  },
  {
    id: 3,
    icon: '/images/Live-bidding-icons/Inbox.svg',
    iconActive: '/images/Live-bidding-icons/InboxActive.svg',
    title: 'Inbox',
    link: '/dashboard/inbox',
  },
  {
    id: 4,
    icon: '/images/Live-bidding-icons/agentSettings.svg',
    title: 'Agent Settings',
    link: '#',
    subItem: [
      {
        subTitle: 'Agent Profile',
        link: '/dashboard/agent-settings/agent-profile',
      },
      {
        subTitle: 'Preferences',
        link: '/dashboard/agent-settings/preferences',
      },
    ],
  },
  {
    id: 5,
    icon: '/images/Live-bidding-icons/propShop.svg',
    title: 'Prop Shop',
    link: '#',
    subItem: [
      {
        subTitle: 'Buy Product',
        link: '/dashboard/prop-shop/buy-product',
      },
      {
        subTitle: 'Order History',
        link: '/dashboard/prop-shop/order-history',
      },
    ],
  },
];
export const USER_MENU_ITEM = [
  {
    id: 1,
    icon: '/images/dashboard-icon/dashboard.svg',
    iconActive: '/images/dashboard-icon/dashboardActive.svg',
    title: 'Dashboard',
    link: '/dashboard/',
  },
  {
    id: 2,
    icon: '/images/Live-bidding-icons/propertyManagement.svg',
    title: 'Post Request',
    link: '/dashboard/post-listing',
  },
  {
    id: 3,
    icon: '/images/Live-bidding-icons/Inbox.svg',
    iconActive: '/images/Live-bidding-icons/InboxActive.svg',
    title: 'Inbox',
    link: '/dashboard/inbox',
  },
  {
    id: 4,
    icon: '/images/Live-bidding-icons/agentSettings.svg',
    title: 'User Settings',
    link: '#',
    subItem: [
      {
        subTitle: 'User Profile',
        link: '/dashboard/agent-settings/agent-profile',
      },
      {
        subTitle: 'Preferences',
        link: '/dashboard/agent-settings/preferences',
      },
    ],
  },
];
