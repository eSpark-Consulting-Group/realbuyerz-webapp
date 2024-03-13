export const maskAccountNumber = (number) => {
  if (!number) return '';
  const strNumber = String(number);
  const masked =
    '*'.repeat(Math.max(0, strNumber.length - 4)) + strNumber.slice(-4);
  return masked;
};
