"use client";
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore";


interface Post {
  id: string;
  content: string;
  createdAt: Date;
  author: {
    uid: string;
    displayName: string;
    photoURL: string;
  };
}
// const mockPosts = [
//   {
//     id: "1",
//     content: "こんにちは、小川（ちいかわ）です。",
//     createAt: new Date(),
//     author: {
//       uid: "1",
//       displayName: "小川（ちいかわ）",
//       photoURL: "/placeholder.svg",
//     },
//   },
//   {
//     id: "2",
//     content: "ゎぃぉぢ、は、、ちぃヵゎ、ぢゃぁぁ、、りません？",
//     createAt: new Date(),
//     author: {
//       uid: "2",
//       displayName: "いちかわ（56）",
//       photoURL: "/placeholder.svg",
//     },
//   },
//   {
//     id: "3",
//     content: "小川さん、巫山戯ないで下さい。氣は確かですか？",
//     createAt: new Date(),
//     author: {
//       uid: "3",
//       displayName: "かわいち（41）",
//       photoURL: "/placeholder.svg",
//     },
//   },

// ];

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    // setPosts(mockPosts);
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().content,
        createdAt: doc.data().createAt,
        author: {
          uid: doc.data().author?.uid,
          displayName: doc.data().author?.displayName,
          photoURL: doc.data().author?.photoURL || "placeholder.svg",
        },
      })) as Post[];
      console.log("フェッチしたデータ", fetchedPosts);
      setPosts(fetchedPosts);
    });
    return () => unsubscribe();
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
