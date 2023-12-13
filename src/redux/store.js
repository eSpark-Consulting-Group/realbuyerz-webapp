import { configureStore } from '@reduxjs/toolkit';

import propertiesSlice from './slices/properties/propertiesSlice';
import propertiesCategoriesSlice from './slices/properties/propertiesCategoriesSlice';
import propertiesAmenitiesSlice from './slices/properties/propertiesAmenitiesSlice';
import usersSlice from './slices/users/usersSlice';
import termsConditionsSlice from './slices/terms/termsConditionsSlice';
import policiesSlice from './slices/policies/policiesSlice';
import featuredPropertiesSlice from './slices/properties/featuredPropertiesSlice';
import newPropertiesSlice from './slices/properties/newPropertiesSlice';
import projectsSlice from './slices/projects/projectsSlice';
import chatsSlice from './slices/chat/chatsSlice';
import blogsSlice from './slices/blogs/blogsSlice';
import partnersSlice from './slices/global/partnersSlice';
import agentsSlice from './slices/agents/agentsSlice';
import biddingsSlice from './slices/bidding/biddingsSlice';
import proposalsSlice from './slices/proposals/proposalsSlice';
import PakageCartSlice from './slices/settings/PakageCartSlice';
import postListingSlice from './slices/postlisting/postListingSlice';
import verificationSlice from './slices/verification/verificationSlice';
import preferenceSlice from './slices/preference/preferenceSlice';
import resendEmailSlice from './slices/resendEmail/resendEmailSlice';
import loginSlice from './slices/login/loginSlice';
import signinSlice from './slices/signin/signinSlice';
import coverLetterSlice from './slices/coverletter/coverLetterSlice';
import PostRequest from '@/app/dashboard/post-request/page';
import postRequestSlice from './slices/postRequest/postRequestSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesSlice,
    propertyCategories: propertiesCategoriesSlice,
    featuredProperties: featuredPropertiesSlice,
    propertyAmenities: propertiesAmenitiesSlice,
    newProperties: newPropertiesSlice,
    proposals: proposalsSlice,
    biddings: biddingsSlice,
    agents: agentsSlice,
    users: usersSlice,
    terms: termsConditionsSlice,
    policies: policiesSlice,
    projects: projectsSlice,
    chats: chatsSlice,
    blogs: blogsSlice,
    partners: partnersSlice,
    PakageCart: PakageCartSlice,
    PostListing: postListingSlice,
    verification: verificationSlice,
    preference: preferenceSlice,
    resendEmail: resendEmailSlice,
    login: loginSlice,
    signin: signinSlice,
    coverLetter: coverLetterSlice,
    postRequest: postRequestSlice
  },
});
