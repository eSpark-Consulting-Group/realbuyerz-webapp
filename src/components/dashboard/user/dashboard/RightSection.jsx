'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { Box, CircularProgress, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';

import { saveUserProposal } from '@/src/utils/apis/bidding/saveUserProposal';

import { handleSaveRequest } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: '100%', lg: '100%' },
  height: '43.545px',
  borderRadius: '50px',
  fontSize: '14px',
  fontWeight: 500,
};

const RightSection = ({
  postId,
  specificPost,
  proposals,
  rightSectionKeys,
}) => {
  const {
    apply_Button,
    save_Button,
    send_Proposal,
    flag_Inappropiate,
    available_Connects,
    connects,
  } = rightSectionKeys;

  const dispatch = useDispatch();

  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);

  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSave = () => {
    mutate(specificPost.property_id);
    dispatch(
      handleSaveRequest({ post: specificPost, userId: current_user_id })
    );
  };

  const { mutate, isPending } = useMutation({
    mutationFn: saveUserProposal,
    onSuccess: () => {
      setIsSaved(!isSaved);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        <Link href={`${postId}${apply_Button?.link}`}>
          <Typography
            sx={{
              ...style,
              backgroundColor: '#FB631C',
              color: '#FFF',
            }}
          >
            {apply_Button?.title}
          </Typography>
        </Link>

        <Typography
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSave}
          sx={{
            ...style,
            backgroundColor: '#fff',
            color: '#FB631C',
            gap: 1,
            border: '1px solid #FB631C',
            cursor: 'pointer',
            '&:hover': { backgroundColor: '#FB631C', color: 'white' },
          }}
        >
          {isPending ? (
            <CircularProgress size={24} color="inherit" />
          ) : isSaved ? (
            'Saved'
          ) : (
            <>
              <Image
                src={
                  isHovered
                    ? save_Button?.hoverImage
                    : save_Button?.defaultImage
                }
                width={10}
                height={8}
                alt={save_Button?.title}
              />{' '}
              {save_Button?.title}
            </>
          )}
        </Typography>
      </Box>

      <Box sx={{ pt: 2, pb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
          }}
        >
          <FlagIcon fontSize={'12px'} /> {flag_Inappropiate}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: '5px', pb: 1 }}>
        <CommonTypography color={'#333'} text={send_Proposal} />

        <CommonTypography
          color={'#126FAA'}
          text={`${proposals ? proposals : '6'} ${connects}`}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: '5px', pb: 1 }}>
        <CommonTypography color={'#333'} text={available_Connects} />

        <CommonTypography color={'#126FAA'} text={0} />
      </Box>
    </Box>
  );
};

const CommonTypography = ({ color, text }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: color,
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        textWrap: 'wrap',
      }}
    >
      {text}
    </Typography>
  );
};

export default RightSection;