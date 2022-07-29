import {
 Button, Card, CardActions, CardContent, Typography
} from '@mui/material';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { Box } from '@mui/system';

interface ErrorCardProps {
  msg: string
  reset: () => void;
}

export default ({ msg, reset }: ErrorCardProps) => (
  <Card sx={{ width: 420 }}>
    <CardContent>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 320
        }}
      >
        <CrisisAlertIcon
          fontSize="large"
          color="error"
        />
        <Typography
          variant="body2"
        >
          {msg}
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      <Button
        onClick={reset}
        variant="outlined"
        color="primary"
      >
        Reiniciar aplicação
      </Button>
    </CardActions>
  </Card>
);
