'use client';
import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaveRequest } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import { saveUserProposal } from '@/src/utils/apis/bidding/saveUserProposal';
import { useMutation } from '@tanstack/react-query';

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
  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);
  console.log(specificPost, 'save_Button');
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

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
    onSuccess: (data) => {
      console.log(data);
      setIsSaved(!isSaved);
    },
    onError: (error) => {
      // Handle the error
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', lg: '100%' },
              height: '43.545px',
              backgroundColor: '#FB631C',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            width: { xs: '100%', lg: '100%' },
            height: '43.545px',
            backgroundColor: '#fff',
            border: '1px solid #FB631C',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            color: '#FB631C',
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
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          {send_Proposal}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          {`${proposals ? proposals : '6'} ${connects}`}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '5px', pb: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          {available_Connects}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            textWrap: 'wrap',
          }}
        >
          0
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSection;
