export const boxStyles = (height = 'auto', xs) => {
  return {
    width: '100%',
    height: height,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'center', sm: 'start' },
    justifyContent: 'center', 
    gap: 2,
    pb: { xs: xs ? xs : 1, sm: 2 },
  };
};
