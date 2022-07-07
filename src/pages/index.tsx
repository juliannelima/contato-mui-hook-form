import Head from 'next/head';

import { Box, Button, Container, Paper, Typography } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Send } from '@mui/icons-material';

import Input from '../components/Input';

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
                <Input
                  label="Nome"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  fullWidth
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
                <Input
                  label="E-mail"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  fullWidth
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
                <Input
                  label="Assunto"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  fullWidth
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
                <Input
                  label="Mensagem"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  fullWidth
                  multiline
                  maxRows={7}
                  minRows={7}
                />
              )}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              startIcon={<Send />}
              sx={{ marginY: 2, textTransform: 'none' }}
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
