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

import { Send, CheckCircle, Cancel } from '@mui/icons-material';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { green } from '@mui/material/colors';

interface IContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  message: string;
}

const schema = yup
  .object({
    nome: yup
      .string()
      .required('Campo obrigatório')
      .max(70, 'No máximo 70 caracteres'),
    email: yup
      .string()
      .required('Campo obrigatório')
      .email('Preencha um e-mail válido'),
    assunto: yup
      .string()
      .required('Campo obrigatório')
      .max(70, 'No máximo 70 caracteres'),
    mensagem: yup.string().required('Campo obrigatório'),
  })
  .required();

export default function Home() {
  const { control, handleSubmit } = useForm<IContato>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IContato) => console.log(data);

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

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Nome"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: value && value.length > 0 ? green[800] : '',
                      borderWidth: value && value.length > 0 ? 2 : 1,
                    },
                    '& .MuiInputLabel-root': {
                      color: value && value.length > 0 ? green[800] : '',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {value && value.length > 0 && !error && (
                          <CheckCircle color="success" />
                        )}
                        {!!error && <Cancel color="error" />}
                      </InputAdornment>
                    ),
                  }}
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="E-mail"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: value && value.length > 0 ? green[800] : '',
                      borderWidth: value && value.length > 0 ? 2 : 1,
                    },
                    '& .MuiInputLabel-root': {
                      color: value && value.length > 0 ? green[800] : '',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {value && value.length > 0 && !error && (
                          <CheckCircle color="success" />
                        )}
                        {!!error && <Cancel color="error" />}
                      </InputAdornment>
                    ),
                  }}
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="assunto"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Assunto"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: value && value.length > 0 ? green[800] : '',
                      borderWidth: value && value.length > 0 ? 2 : 1,
                    },
                    '& .MuiInputLabel-root': {
                      color: value && value.length > 0 ? green[800] : '',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {value && value.length > 0 && !error && (
                          <CheckCircle color="success" />
                        )}
                        {!!error && <Cancel color="error" />}
                      </InputAdornment>
                    ),
                  }}
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="mensagem"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Mensagem"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                  required
                  multiline
                  maxRows={7}
                  minRows={7}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: value && value.length > 0 ? green[800] : '',
                      borderWidth: value && value.length > 0 ? 2 : 1,
                    },
                    '& .MuiInputLabel-root': {
                      color: value && value.length > 0 ? green[800] : '',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {value && value.length > 0 && !error && (
                          <CheckCircle color="success" />
                        )}
                        {!!error && <Cancel color="error" />}
                      </InputAdornment>
                    ),
                  }}
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
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
