import { RESEND_EMAIL } from '@/app/constants/ResendEmail';

export function updateReceivedEmail(newEmail) {
  if (!RESEND_EMAIL) {
    return {};
  }
  RESEND_EMAIL.receivedEmail = newEmail;
  console.log('Updated RESEND_EMAIL:', RESEND_EMAIL);
  return RESEND_EMAIL;
}
