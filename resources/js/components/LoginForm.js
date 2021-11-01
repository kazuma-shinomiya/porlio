import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function LoginForm(props) {
    const {data, inputChange, login} = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
      <div>
        <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
          <TextField id="title" label="メールアドレス" variant="standard" name="email" value={data.email} onChange={inputChange} />
          <TextField id="description" label="パスワード" variant="standard" name="password" value={data.password} onChange={inputChange} />
          <Button color="primary" variant="contained"  onClick={login}>ログイン</Button>
        </Box>
      </div>
    );
}

export default LoginForm;