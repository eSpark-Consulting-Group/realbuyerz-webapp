import { Button, CircularProgress } from '@mui/material';

const TrashButton = ({ handleTrash, data, currentTab, isLoading }) => {
  return (
    <Button
      variant="contained"
      disableRipple={true}
      sx={{
        display: { xs: 'none', md: 'flex' },
        position: { xs: 'absolute' },
        zIndex: 10,
        width: '110px',
        height: '33px',
        right: 25,
        top: 20,
        left: 'auto',
        boxShadow: 'none',
        '&.MuiButton-contained': {
          '&:hover': {
            backgroundColor: '#fb631c',
            boxShadow: 'none',
          },
        },
      }}
      onClick={() => handleTrash(data?.id, currentTab)}
    >
      {isLoading ? (
        <CircularProgress size={24} color="inherit" />
      ) : data?.isDeleted ? (
        'Trashed'
      ) : (
        'Trash'
      )}
    </Button>
  );
};

export default TrashButton;
