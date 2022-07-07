import { InputAdornment, TextField, TextFieldProps } from '@mui/material';

import { green } from '@mui/material/colors';

import { CheckCircle, Cancel } from '@mui/icons-material';

export default function Input({ value, error, ...props }: TextFieldProps) {
  return (
    <TextField
      {...props}
      error={error}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: value ? green[800] : '',
          borderWidth: value ? 2 : 1,
        },
        '& .MuiInputLabel-root': {
          color: value ? green[800] : '',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <>
              {value && !error && <CheckCircle color="success" />}
              {!!error && <Cancel color="error" />}
            </>
          </InputAdornment>
        ),
      }}
    />
  );
}
