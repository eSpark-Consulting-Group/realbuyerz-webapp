import BuyersPlatform from './BuyersPlatform';
import AdInformation from './AdInformation';
import PropertyPurpose from './PropertyPurpose';
import PropertySize from './Propertysize';
import PropertyFeatures from './PropertyFeature';
import PropertyGallery from './PropertGallery';
import SubmitButton from './SubmitButton';
import PreviewModal from './preview/PreviewModal';

const FormComponents = ({
  propertyData,
  formik,
  setSelectedAmenities,
  selectedAmenities,
  handleSeletedAmenites,
  getAmenities,
  handleClickOpen,
  isSubmitBtnDisable,
  open,
  handleClose,
  gallery = false,
  buyersProps = {},
  propertyPurposeProps = {},
  buttonProps={}
}) => {
  return (
    <>
      <BuyersPlatform propertyData={propertyData} {...buyersProps} />

      <AdInformation formik={formik} propertyData={propertyData} />

      <PropertyPurpose
        formik={formik}
        propertyData={propertyData}
        {...propertyPurposeProps}
      />

      <PropertySize formik={formik} propertyData={propertyData} />

      <PropertyFeatures
        formik={formik}
        propertyData={propertyData}
        setSelectedAmenities={setSelectedAmenities}
        selectedAmenities={selectedAmenities}
        handleSeletedAmenites={handleSeletedAmenites}
        getAmenities={getAmenities}
      />

      {gallery && (
        <PropertyGallery formik={formik} propertyData={propertyData} />
      )}

      <SubmitButton
        formik={formik}
        propertyData={propertyData}
        handleClickOpen={handleClickOpen}
        isSubmitBtnDisable={isSubmitBtnDisable}
        {...buttonProps}
      />

      <PreviewModal
        open={open}
        onClose={handleClose}
        ads={formik?.values}
        formik={formik}
      />
    </>
  );
};

export default FormComponents;
