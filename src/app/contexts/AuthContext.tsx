// 認証状態、通知、メッセージなどのアプリケーション全体の状態を管理するコンテンツプロバイダー

"use client";
import type React from "react";

import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext, useState, createContext, useEffect } from "react";


interface AuthContextType {
  user: User | null;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: async () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Logout error", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
