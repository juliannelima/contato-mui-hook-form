import Head from 'next/head';

import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { Send, CheckCircle } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>

      <Container
        component="main"
        maxWidth="sm"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        disableGutters
      >
        <Paper component="section" sx={{ p: 2, bgcolor: '', m: 2 }}>
          <Typography
            component="h1"
            variant="h4"
            color="grey.700"
            fontWeight="bold"
            sx={{ pb: 3 }}
          >
            Contato
          </Typography>

          <Box component="form">
            <TextField
              label="Nome"
              variant="outlined"
              margin="normal"
              size="small"
              color="success"
              fullWidth
              required
              focused
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckCircle color="success" />
                  </InputAdornment>
                ),
              }}
              value="Julianne"
            />
            <TextField
              label="E-mail"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              required
            />
            <TextField
              label="Assunto"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              required
            />
            <TextField
              label="Mensagem"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              required
              multiline
              maxRows={7}
              minRows={7}
            />
            <Button
              variant="contained"
              type="submit"
              startIcon={<Send />}
              sx={{ marginY: 2, textTransform: 'none', float: 'right' }}
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
