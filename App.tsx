
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardLayout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage, SignupPage } from './pages/AuthPages';
import { Dashboard } from './pages/Dashboard';
import { ProductDetail } from './pages/ProductDetail';
import { PricingPage } from './pages/PricingPage';
import { Calculator } from './pages/Calculator';
import { AiTools } from './pages/AiTools';
import { AdminPanel } from './pages/AdminPanel';
import { Product, SubscriptionStatus } from './types';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [view, setView] = useState<'landing' | 'login' | 'signup' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
           <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm" />
           </div>
           <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">Initializing AI...</p>
        </div>
      </div>
    );
  }

  // Marketing & Auth Flow
  if (!user) {
    if (view === 'login') return <LoginPage onToggle={() => setView('signup')} />;
    if (view === 'signup') return <SignupPage onToggle={() => setView('login')} />;
    return <LandingPage onStart={() => setView('login')} />;
  }

  // Subscription Paywall
  if (user.subscriptionStatus !== SubscriptionStatus.ACTIVE) {
    return <PricingPage />;
  }

  // Logged-in Dashboard Experience
  const renderContent = () => {
    if (selectedProduct) {
      return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onSelectProduct={(p) => setSelectedProduct(p)} />;
      case 'ai-tools':
        return <AiTools />;
      case 'calculator':
        return <Calculator />;
      case 'admin':
        return <AdminPanel />;
      case 'settings':
        return (
          <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-6">
               <div className="flex justify-between items-center pb-6 border-b border-slate-800">
                  <div>
                    <p className="font-bold">Email Address</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </div>
                  <button className="text-indigo-400 text-sm font-bold">Edit</button>
               </div>
               <div className="flex justify-between items-center pb-6 border-b border-slate-800">
                  <div>
                    <p className="font-bold">Subscription Status</p>
                    <p className="text-sm text-emerald-400 font-bold">Active Premium Plan</p>
                  </div>
                  <button className="text-rose-400 text-sm font-bold">Cancel Subscription</button>
               </div>
            </div>
          </div>
        );
      default:
        return <Dashboard onSelectProduct={(p) => setSelectedProduct(p)} />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={(t) => { setActiveTab(t); setSelectedProduct(null); }}>
      {renderContent()}
    </DashboardLayout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
