"use client";
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';


interface Post {
  id: string;
  content: string;
  createAt: Date;
  author: {
    uid: string;
    displayName: string;
    photoURL: string;
  };
}
const mockPosts = [
  {
    id: "1",
    content: "こんにちは、小川（ちいかわ）です。",
    createAt: new Date(),
    author: {
      uid: "1",
      displayName: "小川（ちいかわ）",
      photoURL: "/placeholder.svg",
    },
  },
  {
    id: "2",
    content: "ゎぃぉぢは、ちぃヵゎぢゃぁ、ぁりません。",
    createAt: new Date(),
    author: {
      uid: "2",
      displayName: "いちかわ（56）",
      photoURL: "/placeholder.svg",
    },
  },
  {
    id: "3",
    content: "小川さん、巫山戯ないで下さい。氣は確かですか？",
    createAt: new Date(),
    author: {
      uid: "3",
      displayName: "かわいち（41）",
      photoURL: "/placeholder.svg",
    },
  },

];

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(mockPosts);
  }, []);
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))
      }
    </>
  );
}
