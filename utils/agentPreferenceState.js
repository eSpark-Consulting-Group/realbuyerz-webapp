import {
  PROPERTY_AREASIZE_AND_REPORT,
  AGENT_PREFERENCES,
} from '@/app/constants/Preference';

export const createInitialState = () => ({
  emailData: PROPERTY_AREASIZE_AND_REPORT.report,
  toggleData: AGENT_PREFERENCES.updates,
});
