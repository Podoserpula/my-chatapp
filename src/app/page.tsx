// アプリケーションのホームページを表示するコンポーネント
// ユーザーの認証状態に応じて、Login か PostForm と PostListを表示する

"use client"

import { useState } from "react";
import Login from "./components/Login";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { Box } from "@mui/material";

// import styles from "./page.module.css";

export default function Home() {
  const [user, setUser] = useState("imai");
  return (
    <Box>
      {/* {user ? (true) : (false)} */}
      {user ? (
        <>
          <PostForm />
          {/* <PostList /> */}
        </>
      ) : (
        < Login />
      )
      }
    </Box>
  );
}
