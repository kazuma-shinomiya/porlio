import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

function PostEditForm(props) {
    const {data, inputChange, updatePost} = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
          <Button onClick={handleOpen}>編集</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <TextField id="title" label="タイトル" variant="outlined" name="title" value={data.title} onChange={inputChange} />
                <TextField id="description" label="概要" variant="outlined" name="description" value={data.description} onChange={inputChange} />
                <Button color="primary" variant="contained" href="/" onClick={updatePost}>登録</Button>
            　</form>
            </Box>
          </Modal>
        </div>
    );
}

export default PostEditForm;