import { Box, Container, Typography } from '@mui/material';
import DisplayContainer from './Containers/DisplayContainer/DisplayContainer';
import InputContainer from './Containers/InputContainer/InputContainer';
import bg from './assets/bg.jpg';

export default () => (
  <Container
    maxWidth={false}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat'
    }}
  >
    <Box style={{
      display: 'flex',
      width: '100%',
      paddingTop: '8rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Box
        style={{
        position: 'absolute',
        top: '2rem',
        left: 0,
        width: '100%',
        textAlign: 'center'
      }}
      >
        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
        >
          Pesquisa por CEP
        </Typography>
      </Box>
      <Box>
        <InputContainer />
        <DisplayContainer />
      </Box>

    </Box>
  </Container>
);
