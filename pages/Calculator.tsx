
import React, { useState } from 'react';
import { DollarSign, Percent, ArrowUpRight, Calculator as CalcIcon, RefreshCcw } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [values, setValues] = useState({
    productCost: 10,
    shippingCost: 5,
    adCost: 15,
    sellingPrice: 50,
  });

  const totalCost = values.productCost + values.shippingCost + values.adCost;
  const profit = values.sellingPrice - totalCost;
  const margin = (profit / values.sellingPrice) * 100;
  const breakEvenRoas = values.sellingPrice / (values.productCost + values.shippingCost);

  const updateValue = (key: string, val: string) => {
    const num = parseFloat(val) || 0;
    setValues(prev => ({ ...prev, [key]: num }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header>
        <h1 className="text-3xl font-extrabold mb-2">Margin & ROAS Calculator</h1>
        <p className="text-slate-400">Plan your profitability before running ads.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold flex items-center gap-2"><CalcIcon size={20} className="text-indigo-500" /> Inputs</h2>
            <button onClick={() => setValues({ productCost: 0, shippingCost: 0, adCost: 0, sellingPrice: 0 })} className="text-slate-500 hover:text-white transition-colors">
              <RefreshCcw size={18} />
            </button>
          </div>

          {[
            { id: 'productCost', label: 'Product Cost', icon: DollarSign },
            { id: 'shippingCost', label: 'Shipping Cost', icon: DollarSign },
            { id: 'adCost', label: 'Ad Cost per Purchase', icon: DollarSign },
            { id: 'sellingPrice', label: 'Recommended Selling Price', icon: DollarSign },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label className="text-sm font-bold text-slate-400">{field.label}</label>
              <div className="relative">
                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="number"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500"
                  value={values[field.id as keyof typeof values] || ''}
                  onChange={(e) => updateValue(field.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <p className="text-xs text-slate-500 font-bold uppercase mb-2">Profit per Sale</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-black ${profit > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>${profit.toFixed(2)}</span>
                  {profit > 0 && <ArrowUpRight size={20} className="text-emerald-400" />}
                </div>
             </div>
             <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <p className="text-xs text-slate-500 font-bold uppercase mb-2">Profit Margin</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-black ${margin > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{margin.toFixed(1)}%</span>
                  <Percent size={20} className={margin > 0 ? 'text-emerald-400' : 'text-rose-400'} />
                </div>
             </div>
          </div>

          <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-500/20">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white">Break-even ROAS</h3>
                <CalcIcon size={24} className="text-white/50" />
             </div>
             <p className="text-white/80 text-lg leading-relaxed mb-6">
               You need a minimum of <span className="font-bold text-white">{breakEvenRoas.toFixed(2)} ROAS</span> to be profitable after product and shipping costs.
             </p>
             <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white transition-all duration-500" style={{ width: `${Math.min(100, breakEvenRoas * 20)}%` }} />
             </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
             <h3 className="font-bold text-slate-300">Detailed Breakdown</h3>
             <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Total Costs</span>
                  <span className="text-slate-300 font-bold">${totalCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Gross Sales</span>
                  <span className="text-slate-300 font-bold">${values.sellingPrice.toFixed(2)}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
