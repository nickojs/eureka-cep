import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { ViaCepResponse } from '../../interfaces';

interface DisplayAddressProps {
  data: ViaCepResponse;
  map: string;
}

export default (props: DisplayAddressProps) => {
  const { data, map } = props;
  const {
    logradouro,
    complemento,
    bairro,
    uf: estado,
    localidade: cidade
  } = data;

  const title = complemento ? `${logradouro}, ${complemento}` : logradouro;

  return (
    <Card sx={{ width: 420 }}>
      <>
        {!map && (
          <Box sx={{ minHeight: 200 }}>
            <LinearProgress />
          </Box>
        )}
        {map && (
          <CardMedia
            component="img"
            alt="map of region"
            height="200"
            image={map}
          />
        )}
      </>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body2">{bairro}</Typography>
        <Typography variant="body2">
          {cidade}
          {' '}
          -
          {' '}
          {estado}
        </Typography>
      </CardContent>
    </Card>
  );
};
