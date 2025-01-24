"use client";
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from "../firebase/config";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("ログイン／サインアップ処理(モックアップ)：", email, password);
    try {
      if (isSignUp) {
        // await console.log("登録する");
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        // await console.log("サインインする");
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log("認証エラー：", error);
      alert("認証に失敗しました！");
    }
  };
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log("認証エラー：", error);
      alert("認証に失敗しました！");
    };
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
      >
        {isSignUp ? "サインアップ" : "ログイン"}
      </Button>
      <Button onClick={() => setIsSignUp(!isSignUp)}
        fullWidth
        variant="outlined"
        sx={{ mt: 2 }}
      >
        {isSignUp ? "ログインに切り替え" : "サインアップに切り替え"}
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{ mt: 2 }}
        onClick={handleGoogleSignIn}
      >
        Googleでログイン
      </Button>
      {/* <p>{email}</p>
      <p>{password}</p> */}
    </Box >
  );
}
