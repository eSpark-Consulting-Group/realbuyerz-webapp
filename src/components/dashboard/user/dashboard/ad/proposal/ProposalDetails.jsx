import { Box } from '@mui/material';

import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import BidMedia from '@/src/components/dashboard/BidMedia';

import { PROPOSAL } from '@/src/constants/agent/Proposal';
import { PREVIEW_DATA } from '@/src/constants/Preview_Data';

const ProposalDetails = ({ agentProposal }) => {
  const { areaAndAmount, location, images, videos } = PREVIEW_DATA;

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '80%' },
        padding: { xs: '40px', md: '40px' },
      }}
    >
      <PropertyDetail
        heading={PROPOSAL?.propertyDetails}
        subTitle={agentProposal?.agentProperty?.title}
        description={agentProposal?.agentProperty?.description}
        width={'100%'}
        pb={'5px'}
        pt={'0px'}
        px={'0px'}
        paddingHeading={'10px'}
        subPadding={'0px'}
      />

      <Location
        city={agentProposal?.agentProperty?.city}
        locationKeys={location}
        purpose={agentProposal?.agentProperty?.purpose}
        propertyType={agentProposal?.agentProperty?.propertyType}
        proportyCategory={agentProposal?.agentProperty?.proportyCategory}
        location={agentProposal?.agentProperty?.address}
        longitude={agentProposal?.agentProperty?.longitude}
        latitude={agentProposal?.agentProperty?.latitude}
        width={'100%'}
        widthBox={'100%'}
        className={'locationWidth'}
        pb={'20px'}
        pt={'30px'}
        px={'0px'}
      />

      <PreviewAmountAndFeature
        area={agentProposal?.agentProperty?.area}
        amount={agentProposal?.agentProperty?.amount}
        areaUnit={agentProposal?.agentProperty?.areaUnit}
        areaAndAmount={areaAndAmount}
        amountCurrency={agentProposal?.agentProperty?.amountCurrency}
        instalmentAvailable={agentProposal?.agentProperty?.instalmentAvailable}
        readyPossession={agentProposal?.agentProperty?.readyPossession}
        width={'100%'}
        pb={'10px'}
        pt={'30px'}
        px={'0px'}
        subPadding={'0px'}
      />

      <BidMedia
        title={images?.title}
        media={agentProposal?.agentProperty?.PropertyData?.filter(
          (image) => image.type === 'image'
        )}
        mediaType={images?.type}
        pb={'20px'}
        pt={'30px'}
        px={'0px'}
      />

      <BidMedia
        title={videos?.title}
        media={agentProposal?.agentProperty?.PropertyData?.filter(
          (image) => image.type === 'video'
        )}
        mediaType={videos?.type}
        pb={'20px'}
        pt={'30px'}
        px={'0px'}
      />
    </Box>
  );
};

export default ProposalDetails;
