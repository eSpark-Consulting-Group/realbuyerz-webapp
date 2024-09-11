import { AGENT_PREFERENCES } from '@/src/constants/Preference';
import { USERS_DATA } from '@/src/constants/user';

export const createInitialState = () => ({
  emailData: {
    areaUnit: USERS_DATA.areaUnit || 'sq-ft',
    currencyUnit: USERS_DATA.currencyUnit || 'pkr',
    autoReport: USERS_DATA.autoReport ?? false,
    verificationStatus: USERS_DATA.verificationStatus ?? true,
    emailNotification: USERS_DATA.emailNotification ?? false,
    newsLetters: USERS_DATA.newsLetters ?? false,
  },
  toggleData: AGENT_PREFERENCES.updates,
});
