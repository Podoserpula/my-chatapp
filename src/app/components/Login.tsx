"use client";
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box component="form">
      <TextField
        fullWidth
        margin="normal"
        label="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="パスワード"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth type="submit" variant="contained">
        {isSignUp ? "サインアップ" : "ログイン"}
      </Button>
      <Button onClick={() => setIsSignUp(!isSignUp)} fullWidth variant="outlined">
        {isSignUp ? "ログインに切り替え" : "サインアップに切り替え"}
      </Button>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Googleでログイン
      </Button>
      {/* <p>{email}</p>
      <p>{password}</p> */}
    </Box >
  );
}
