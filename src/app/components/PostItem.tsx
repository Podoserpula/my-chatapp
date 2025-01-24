import { Avatar, Box, Card, CardContent } from '@mui/material';
import React from 'react'


interface Post {
  id: string;
  content: string;
  createdAt: Date | { toDate: () => Date } | null;
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
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <Avatar src={post.author.photoURL} alt={post.author.displayName} sx={{ br: 1 }} />
          {post.author.displayName}
        </Box>
        <Box sx={{ mb: 2 }}>{post.content}</Box>
        <Box>{formatDate(post.createdAt)}</Box>
      </CardContent>
    </Card>

  );
}
