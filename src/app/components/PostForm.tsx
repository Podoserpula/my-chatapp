"use client";
import { Box, Button, Fab, Modal, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';


export default function PostForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="投稿"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 1000,
        }}
      >
        <SendIcon />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <form>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Let's Tweet!!!"
              sx={{ mb: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                投稿
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}
