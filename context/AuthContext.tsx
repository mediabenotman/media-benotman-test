
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, SubscriptionStatus } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string) => void;
  logout: () => void;
  subscribe: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage/session
    const savedUser = localStorage.getItem('wp_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string) => {
    const isMockAdmin = email.includes('admin');
    const newUser: User = {
      id: '1',
      name: isMockAdmin ? 'Admin User' : 'Valued Member',
      email: email,
      role: isMockAdmin ? 'admin' : 'user',
      subscriptionStatus: isMockAdmin ? SubscriptionStatus.ACTIVE : SubscriptionStatus.NONE,
    };
    setUser(newUser);
    localStorage.setItem('wp_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('wp_user');
  };

  const subscribe = () => {
    if (user) {
      const updatedUser: User = {
        ...user,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
        subscriptionStartDate: new Date().toISOString(),
        planType: 'Monthly'
      };
      setUser(updatedUser);
      localStorage.setItem('wp_user', JSON.stringify(updatedUser));
    }
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, subscribe, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
