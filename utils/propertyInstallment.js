export const createInstallmentState = (
  propertyInstallmentInfo,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const installmentData = {
    sellingData: propertyBuyingDetails,
    toggleData: propertyInstallmentInfo,
  };
  return { installmentData };
};
