import {
  Button,
 Card, CardActions, CardContent, CardMedia, Typography
} from '@mui/material';
import { ViaCepResponse } from '../../interfaces';

export default (props: ViaCepResponse) => {
  const {
    logradouro,
    complemento,
    bairro,
    uf: estado,
    localidade: cidade
  } = props;

  return (
    <Card sx={{ width: 420 }}>
      <CardMedia
        component="img"
        alt="placeholder image"
        height="200"
        // eslint-disable-next-line global-require
        image={require('../../../mocks/address-placeholder.jpg')}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {logradouro}
          ,
          {' '}
          {complemento}
        </Typography>
        <Typography variant="body2">{bairro}</Typography>
        <Typography variant="body2">
          {cidade}
          {' '}
          -
          {' '}
          {estado}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="text"
        >
          See in maps
        </Button>
      </CardActions>
    </Card>
  );
};
