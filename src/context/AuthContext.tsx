"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  handleLogin: (credentials: any) => Promise<void>;
  handleRegister: (credentials: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  
  // FIX: Call the hook correctly at the top level of the function component body
  const { data: sessionData, isPending } = authClient.useSession();

  // Keep state synchronized when the sessionData hook values change
  useEffect(() => {
    if (sessionData) {
      setUser(sessionData.user);
    } else {
      setUser(null);
    }
  }, [sessionData]);

  const handleLogin = async (credentials: any) => {
    const { data, error } = await authClient.signIn.email({
      email: credentials.email,
      password: credentials.password,
    });
    if (error) throw new Error(error.message);
    setUser(data?.user);
  };

  const handleRegister = async (credentials: any) => {
    const { data, error } = await authClient.signUp.email({
      email: credentials.email,
      password: credentials.password,
      name: credentials.name || credentials.email.split('@')[0],
    });
    if (error) throw new Error(error.message);
    setUser(data?.user);
  };

  const logout = async () => {
    await authClient.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading: isPending, handleLogin, handleRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};