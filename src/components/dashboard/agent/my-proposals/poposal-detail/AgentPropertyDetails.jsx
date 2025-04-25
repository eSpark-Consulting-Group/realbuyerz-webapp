import { Box, Typography } from '@mui/material';

import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import BidMedia from '@/src/components/dashboard/BidMedia';

import { VIEWPROPOSAL } from '@/src/constants/Preview_Data';
import { PROPOSAL } from '@/src/constants/agent/Proposal';

const AgentPropertyDetails = ({
  agentPropertyDetail,
  location,
  areaAndAmount,
  images,
  videos,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRight: '1px solid #E4E4E4',
        pt: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 600,
          textAlign: 'center',
          mt: 4,
        }}
      >
        {VIEWPROPOSAL?.proposalDetails}
      </Typography>

      <PropertyDetail
        heading={PROPOSAL?.propertyDetails}
        subTitle={agentPropertyDetail?.title}
        description={agentPropertyDetail?.description}
        mb={'-15px'}
      />

      <Location
        city={agentPropertyDetail?.city}
        locationKeys={location}
        purpose={agentPropertyDetail?.purpose}
        propertyType={agentPropertyDetail?.propertyType}
        propertyCategory={agentPropertyDetail?.propertyCategory}
        location={agentPropertyDetail?.location}
        longitude={agentPropertyDetail?.longitude}
        latitude={agentPropertyDetail?.latitude}
        width={'70%'}
      />

      <PreviewAmountAndFeature
        area={agentPropertyDetail?.area}
        amount={agentPropertyDetail?.amount}
        areaUnit={agentPropertyDetail?.areaUnit}
        areaAndAmount={areaAndAmount}
        amountCurrency={agentPropertyDetail?.amountCurrency}
        instalmentAvailable={agentPropertyDetail?.instalmentAvailable}
        readyPossession={agentPropertyDetail?.readyPossession}
      />

      <BidMedia
        title={images?.title}
        media={agentPropertyDetail?.PropertyData?.filter(
          (pd) => pd.type === 'image'
        )}
        mediaType={images?.type}
      />

      <BidMedia
        title={videos?.title}
        media={agentPropertyDetail?.PropertyData?.filter(
          (pd) => pd.type === 'video'
        )}
        mediaType={videos?.type}
      />
    </Box>
  );
};

export default AgentPropertyDetails;
