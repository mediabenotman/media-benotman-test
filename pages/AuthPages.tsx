
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Zap, Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex p-3 bg-indigo-600 rounded-2xl mb-6 shadow-xl shadow-indigo-500/20">
            <Zap className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
          <p className="text-slate-400 mt-2">Log in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                required
                type="email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
             <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-400">Password</label>
                <button type="button" className="text-xs text-indigo-400 hover:underline">Forgot password?</button>
             </div>
             <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                required
                type="password"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
          >
            Login <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Don't have an account? <button onClick={onToggle} className="text-indigo-400 font-bold hover:underline">Sign up</button>
        </p>

        <div className="mt-8 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10 text-center">
            <p className="text-xs text-indigo-400">Demo: Use any email to login. Use 'admin@wp.ai' for admin dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export const SignupPage: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) login(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex p-3 bg-indigo-600 rounded-2xl mb-6 shadow-xl shadow-indigo-500/20">
            <Zap className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Create Account</h1>
          <p className="text-slate-400 mt-2">Start your winning products journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400">Full Name</label>
            <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                required
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                required
                type="email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-bold text-slate-400">Password</label>
             <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                required
                type="password"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
          >
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Already have an account? <button onClick={onToggle} className="text-indigo-400 font-bold hover:underline">Log in</button>
        </p>
      </div>
    </div>
  );
};
