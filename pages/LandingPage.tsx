
import React from 'react';
import { Zap, CheckCircle, TrendingUp, DollarSign, Target, BarChart3, Users, Play } from 'lucide-react';

export const LandingPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-indigo-500 selection:text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-8 max-w-7xl mx-auto sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
            <Zap className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Winning Products AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a>
        </div>
        <button
          onClick={onStart}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:scale-105"
        >
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 lg:py-32 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <TrendingUp size={16} />
          <span>Used by 2,000+ Dropshippers</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Stop Wasting Money Testing.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Access Proven Winners.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Every week we add high-converting, already tested eCommerce products with ad angles, scripts, and direct supplier links. Scale faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-lg font-bold transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center space-x-2"
          >
            <span>Start Now – $50/mo</span>
            <Play size={18} fill="white" />
          </button>
          <div className="flex items-center space-x-2 text-slate-400">
            <CheckCircle className="text-emerald-500" size={20} />
            <span className="text-sm">Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Complete Scaling Toolkit</h2>
          <p className="text-slate-400">Everything you need to launch your next 7-figure store.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Proven Winners', desc: 'Hand-picked products that are currently scaling on TikTok and FB Ads.' },
            { icon: Zap, title: 'AI Ad Angle Generator', desc: 'Use our custom Gemini-powered AI to generate hooks that stop the scroll.' },
            { icon: DollarSign, title: 'Margin Calculator', desc: 'Accurately predict your profits before you spend a dime on ads.' },
            { icon: BarChart3, title: 'Competitor Insights', desc: 'See exactly what other successful stores are doing to sell the same product.' },
            { icon: Users, title: 'Supplier Network', desc: 'Direct links to verified AliExpress and CJDropshipping suppliers.' },
            { icon: TrendingUp, title: 'Saturation Data', desc: 'Know exactly when to enter a market and when it is too crowded.' },
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="p-3 bg-slate-800 rounded-xl w-fit mb-6 group-hover:bg-indigo-600 transition-colors">
                <feature.icon className="text-indigo-400 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 bg-slate-900/30 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="p-10 rounded-3xl bg-slate-900 border border-indigo-500 shadow-2xl shadow-indigo-500/10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">$50</span>
              <span className="text-slate-400 ml-2">/month</span>
            </div>
            <ul className="text-left space-y-4 mb-10 text-slate-300">
              <li className="flex items-center space-x-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                <span>Unlimited Access to 100+ Winning Products</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                <span>5 New Winners Added Every Week</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                <span>AI Ad Copy & Script Generator</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                <span>Competitor Tracking & Store Links</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                <span>24/7 Premium Support</span>
              </li>
            </ul>
            <button
              onClick={onStart}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-lg font-bold transition-all"
            >
              Get Instant Access
            </button>
            <p className="text-xs text-slate-500 mt-6">Secure payment with Stripe. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; 2024 Winning Products AI. All rights reserved.</p>
      </footer>
    </div>
  );
};
