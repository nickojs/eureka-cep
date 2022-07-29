import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import useAddress from '../../context/AddressContext';
import { getLonLat, staticMapURI } from '../../services/api';
import DisplayAddress from '../../components/DisplayAddress/DisplayAddress';
import ErrorCard from '../../components/ErrorCard/ErrorCard';

export default () => {
  // don't need to save this into the context, will be used locally only
  const [lonLat, setLonLat] = useState('');

  const {
    data, loading, error, staticMap, resetApp, setMap
  } = useAddress();

  useEffect(() => {
    if (data) {
      const fetchGeoCoding = async () => {
        try {
          const {
            logradouro, complemento, bairro, uf
          } = data;
          const search = `${logradouro}, ${complemento} ${bairro} ${uf}, Brazil`;

          const response = await getLonLat(`search?text=${search}`);
          const features = response.data.features as any;
          const parsedLonLat = `lonlat:${features[0].properties.lon},${features[0].properties.lat}`;
          if (parsedLonLat) setLonLat(parsedLonLat);
        } catch (err) {
          throw new Error('fetchGeoCoding error');
        }
      };
      fetchGeoCoding();
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(lonLat).length > 0) {
      const mapURI = staticMapURI(lonLat);
      setMap(mapURI);
    }
  }, [lonLat]);

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
      {error && <ErrorCard msg={error} reset={resetApp} />}
      {loading && <CircularProgress />}
      {data && <DisplayAddress data={data} map={staticMap} />}
    </Box>
  );
};
