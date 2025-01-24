"use client";
import { Box, Button, Fab, Modal, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useAuth } from '../contexts/AuthContext';


export default function PostForm() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("投稿処理：", content);
    if (!content.trim() || !user) return;
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        content,
        createdAt: serverTimestamp(),
        auther: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      })
      console.log("Success ! with ID：", docRef.id);
      setContent("");
    } catch (error) {
      console.log("投稿エラー", error);
      alert("投稿に失敗しました！");
    }
    handleClose();
  };
  return (
    <>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="投稿"
        sx={{
          position: "fixed",
          bottom: 66,
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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Let's Tweet!!!"
              sx={{ mb: 2 }}
              onChange={(e) => setContent(e.target.value)}
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
