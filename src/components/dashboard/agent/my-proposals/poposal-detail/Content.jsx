import PreviewFeatureAndAmenities from '@/src/components/dashboard/preview/PreviewFeatureAndAmenities';
import Location from '@/src/components/dashboard/preview/Location';
import Amount from '@/src/components/dashboard/preview/Amount';
const Content = ({ userPropertyDetail, location, amenities }) => {
  return (
    <>
      <Location
        city={userPropertyDetail?.city}
        locationKeys={location}
        purpose={userPropertyDetail?.purpose}
        propertyType={userPropertyDetail?.propertyType}
        propertyCategory={userPropertyDetail?.propertyCategory}
        location={userPropertyDetail?.location}
        latitude={userPropertyDetail?.latitude}
        longitude={userPropertyDetail?.longitude}
        width={'70%'}
      />

      <Amount amount={userPropertyDetail?.amount} />

      <PreviewFeatureAndAmenities
        amenities={amenities}
        specificPost={userPropertyDetail}
      />
    </>
  );
};

export default Content;
