
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, Shield, Zap, Lock } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { subscribe } = useAuth();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubscribe = () => {
    setIsProcessing(true);
    // Simulate Stripe Checkout delay
    setTimeout(() => {
      subscribe();
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl mb-6">
            <Lock className="text-indigo-500" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Membership Required</h1>
          <p className="text-slate-400">To maintain the exclusivity and quality of our data, access is limited to active subscribers.</p>
        </div>

        <div className="bg-slate-900 border border-indigo-500/50 rounded-3xl p-8 shadow-2xl shadow-indigo-500/10">
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-800">
            <div>
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-1">Elite Plan</p>
              <h2 className="text-3xl font-extrabold">Full Platform Access</h2>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black">$50</p>
              <p className="text-slate-500 text-sm">/per month</p>
            </div>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              '100+ Live Winning Products',
              '5 New Winners Every Week',
              'AI Ad Copy & UGC Script Tools',
              'Full Competitor Research Data',
              'Direct Supplier Links',
              'Cancel Anytime - No Contracts'
            ].map((feature, i) => (
              <li key={i} className="flex items-center space-x-3 text-slate-300">
                <div className="p-1 bg-emerald-500/20 rounded-full">
                  <Check className="text-emerald-500" size={14} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleSubscribe}
            disabled={isProcessing}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <Zap size={20} className="animate-pulse" />
                <span>Redirecting to Stripe...</span>
              </>
            ) : (
              <>
                <Shield size={20} />
                <span>Unlock Now – $50/mo</span>
              </>
            )}
          </button>
          
          <p className="text-center text-xs text-slate-500 mt-6">Secure 256-bit SSL Encrypted Payment</p>
        </div>
      </div>
    </div>
  );
};
