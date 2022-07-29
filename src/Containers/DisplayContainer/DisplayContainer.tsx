import { Box, CircularProgress } from '@mui/material';
import useAddress from '../../context/AddressContext';
import DisplayAddress from '../../components/DisplayAddress/DisplayAddress';

export default () => {
  const { data, loading } = useAddress();

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 420,
      minHeight: 420
      }}
    >
      {loading && <CircularProgress />}
      {data && (<DisplayAddress {...data} />)}
    </Box>
  );
};
