import { Avatar, Box, Card, CardContent } from '@mui/material';
import React from 'react'


interface Post {
  id: string;
  content: string;
  createAt: Date | { toDate: () => Date } | null;
  author: {
    uid: string;
    displayName: string;
    photoURL: string;
  };
}

export default function PostItem({ post }: { post: Post }) {
  const formatDate = (date: Date | { toDate: () => Date } | null) => {
    if (!date) return "日付情報がありません。";
    if (date instanceof Date) return date.toLocaleString();
    if (typeof date.toDate === 'function')
      return date.toDate().toLocaleString();
    return "無効な日付形式です。";
  }
  // console.log(post);
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar src={post.author.photoURL} alt={post.author.displayName} />
          {post.author.displayName}
        </Box>
        <Box>{post.content}</Box>
        <Box>{formatDate(post.createAt)}</Box>
      </CardContent>
    </Card>

  );
}
