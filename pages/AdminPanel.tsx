
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Plus, Edit, Trash2, Users, ShoppingBag, TrendingUp, Search } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  const stats = [
    { label: 'Active Subscribers', value: '1,284', icon: Users, color: 'text-indigo-400' },
    { label: 'Total Products', value: products.length.toString(), icon: ShoppingBag, color: 'text-emerald-400' },
    { label: 'Avg Margin', value: '62%', icon: TrendingUp, color: 'text-amber-400' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Admin Dashboard</h1>
          <p className="text-slate-400">Manage your product catalog and view platform metrics.</p>
        </div>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
          <Plus size={20} /> Add Product
        </button>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <div className="flex justify-between items-start mb-4">
               <div className={`p-2 bg-slate-800 rounded-lg ${stat.color}`}>
                  <stat.icon size={20} />
               </div>
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-3xl font-black mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
           <h3 className="text-xl font-bold">Product Catalog</h3>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search catalog..."
                className="bg-slate-950 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500"
              />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Niche</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {products.map(p => (
                <tr key={p.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.image} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{p.niche}</td>
                  <td className="px-6 py-4">${p.sellingPrice}</td>
                  <td className="px-6 py-4">
                    {p.isNew ? (
                      <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase rounded">New</span>
                    ) : (
                      <span className="px-2 py-1 bg-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded">Active</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2 hover:text-indigo-400 transition-colors"><Edit size={18} /></button>
                       <button className="p-2 hover:text-rose-400 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
