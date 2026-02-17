
import React from 'react';
import { Product, SaturationLevel } from '../types';
import { ChevronLeft, ExternalLink, Play, Copy, Check, MessageSquare, TrendingUp, DollarSign } from 'lucide-react';

export const ProductDetail: React.FC<{ product: Product; onBack: () => void }> = ({ product, onBack }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in slide-in-from-right duration-500 pb-20">
      <button onClick={onBack} className="flex items-center space-x-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ChevronLeft size={20} />
        <span>Back to Dashboard</span>
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Image & Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-3xl overflow-hidden border border-slate-800">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
          </div>
          <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold">Key Performance</h2>
            <div className="space-y-4">
               <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2"><DollarSign size={16} /> Margin %</span>
                  <span className="text-emerald-400 font-bold">{product.margin}%</span>
               </div>
               <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2"><TrendingUp size={16} /> Saturation</span>
                  <span className={`font-bold ${product.saturation === SaturationLevel.LOW ? 'text-emerald-400' : 'text-amber-400'}`}>{product.saturation}</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-2"><Play size={16} /> Best Platform</span>
                  <span className="text-indigo-400 font-bold">{product.platform}</span>
               </div>
            </div>
            <a
              href={product.supplierLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
            >
              Supplier Link <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Middle/Right Column - Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
               <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-bold uppercase tracking-wider">{product.niche}</span>
               <span className="text-slate-500 text-sm">{product.country} Target</span>
             </div>
             <h1 className="text-4xl font-extrabold">{product.name}</h1>
             <p className="text-slate-400 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><MessageSquare className="text-indigo-500" size={20} /> Ad Strategy</h3>
                <ul className="space-y-3">
                   {product.adAngles.map((angle, i) => (
                     <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                        {angle}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><DollarSign className="text-emerald-500" size={20} /> Pricing Suggestion</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Recommended Selling Price</p>
                    <p className="text-2xl font-extrabold text-white">${product.sellingPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Product Cost (Avg)</p>
                    <p className="text-xl font-bold text-slate-300">${product.productCost}</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold">Recommended Ad Script</h3>
               <button
                  onClick={() => copyToClipboard(product.adScript)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
               >
                 {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
               </button>
             </div>
             <div className="bg-slate-950 p-6 rounded-2xl text-slate-300 leading-relaxed italic border border-slate-800">
               "{product.adScript}"
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
