import { formatDistanceToNow } from 'date-fns';

import { Box, Grid, Typography } from '@mui/material';

import ViewProposalLinkBox from './ViewProposalLinkBox';
import DescriptionBox from './DescriptionBox';
import TextLinkBox from './TextLinkBox';
import PostBox from './PostBox';

import { ESTIMATE_RANGE } from '@/src/constants/agent/Live_Bidding';

const PostCard = ({
  index,
  minHeight,
  xl,
  name,
  createdAt,
  md,
  lg,
  amount,
  postListing = false,
  id,
  description,
  children,
}) => {
  return (
    <Grid item container xs={12} key={index}>
      <Box
        sx={{
          width: '100%',
          minHeight: minHeight,
          height: 'auto',
          backgroundColor: '#EDF7FF',
          border: '1px solid #AAD9FF',
          borderRadius: '16px',
          position: 'relative',
          mb: 2.8,
          zIndex: 1,
        }}
      >
        <PostBox
          borderRadius={'40px 500px 500px 40px'}
          queryStyle={{
            borderRadius: '40px 40px 100% 100%',
          }}
        />

        <Grid
          container
          spacing={2}
          sx={{
            padding: { xs: 4, sm: 6 },
            '@media(min-width: 280px) and (max-width: 445px)': {
              textAlign: 'center',
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            lg={6.5}
            xl={xl}
            sx={{
              color: '#333',
              textWrap: 'wrap',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                maxWidth: { xs: '400px', sm: '650px' },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                ml: 0.4,
                fontSize: { xs: '21px' },
              }}
            >
              {name}
            </Typography>

            <Typography variant="body1" sx={{ ml: 0.5, mt: 1 }}>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            md={md}
            lg={lg}
            xl={2}
            sx={{
              color: '#333',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              ml: { xs: '4px', sm: '0px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {
                  xs: 'start',
                  sm: 'end',
                },
                '@media(min-width: 280px) and (max-width: 445px)': {
                  justifyContent: 'center',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {ESTIMATE_RANGE || ''}
              </Typography>

              <Typography
                sx={{
                  ml: 1,
                  fontWeight: 700,
                  color: '#333333',
                  fontSize: { xs: '18px', sm: '20px' },
                  maxWidth: { xs: '50px', sm: '50px' },
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
                component={'span'}
              >
                {`${amount}`}
              </Typography>
            </Box>
          </Grid>

          {postListing && (
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <TextLinkBox id={id} />
            </Grid>
          )}

          <DescriptionBox description={description} />

          {children}

          {!postListing && (
            <Grid item xs={12}>
              <ViewProposalLinkBox id={id} />
            </Grid>
          )}
        </Grid>

        <PostBox
          borderRadius={'500px 40px 40px 500px'}
          queryStyle={{
            top: 'auto',
            bottom: 0,
            borderRadius: '100% 100% 30px 30px',
          }}
        />
      </Box>
    </Grid>
  );
};

export default PostCard;
