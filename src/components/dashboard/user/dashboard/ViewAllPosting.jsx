import { Box } from '@mui/material';

import DashboardTitle from './DashboardTitle';
import SeeAllPosting from './SeeAllPosting';

import { USER_DASHBOARD_PAGE } from '@/src/constants/user/Dashboard';

const ViewAllPosting = ({ isFetched }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (min-width: 280px) and (max-width:445px)': {
          flexDirection: 'column',
          gap: 1,
        },
        px: { xs: 4, sm: 6 },
        py: 3,
      }}
    >
      <Box>
        <DashboardTitle title={USER_DASHBOARD_PAGE?.sub_Title} />
      </Box>

      <Box>
        <SeeAllPosting
          title={USER_DASHBOARD_PAGE?.see_All_Posting?.title}
          link={USER_DASHBOARD_PAGE?.see_All_Posting?.link}
          subTitle={USER_DASHBOARD_PAGE?.sub_Title}
          isFetched={isFetched}
        />
      </Box>
    </Box>
  );
};

export default ViewAllPosting;
