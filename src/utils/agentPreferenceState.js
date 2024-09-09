import { AGENT_PREFERENCES } from '@/src/constants/Preference';
import { USERS_DATA } from '@/src/constants/user';

export const createInitialState = () => ({
  emailData: {
    areaUnit: USERS_DATA.areaUnit || 'sq-ft',          // Default to 'sq-ft' if missing
    currencyUnit: USERS_DATA.currencyUnit || 'pkr',    // Default to 'pkr' if missing
    autoReport: USERS_DATA.autoReport ?? false,        // Default to false if missing
    verificationStatus: USERS_DATA.verificationStatus ?? true,  // Default to true if missing
    emailNotification: USERS_DATA.emailNotification ?? false,   // Default to false if missing
    newsLetters: USERS_DATA.newsLetters ?? false,      // Default to false if missing
  },
  toggleData: AGENT_PREFERENCES.updates,
});
