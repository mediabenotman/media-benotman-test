
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product, SaturationLevel } from '../types';
import { Search, Filter, ExternalLink, ArrowRight, Star } from 'lucide-react';

export const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => {
  const saturationColors = {
    [SaturationLevel.LOW]: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    [SaturationLevel.MEDIUM]: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    [SaturationLevel.HIGH]: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <div
      onClick={onClick}
      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-indigo-600 text-[10px] font-bold uppercase rounded text-white shadow-lg">New</span>
          )}
          <span className={`px-2 py-1 border text-[10px] font-bold uppercase rounded ${saturationColors[product.saturation]}`}>
            {product.saturation} Saturation
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-indigo-400 font-medium">{product.niche}</span>
          <span className="text-xs text-slate-500">{product.country}</span>
        </div>
        <h3 className="text-lg font-bold mb-4 line-clamp-1">{product.name}</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-2 rounded-lg bg-slate-800/50">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Selling Price</p>
            <p className="text-sm font-bold text-slate-200">${product.sellingPrice}</p>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/50">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Margin %</p>
            <p className="text-sm font-bold text-emerald-400">{product.margin}%</p>
          </div>
        </div>
        <button className="w-full py-2.5 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 group-hover:bg-indigo-600">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export const Dashboard: React.FC<{ onSelectProduct: (p: Product) => void }> = ({ onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [nicheFilter, setNicheFilter] = useState('All');

  const niches = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.niche)))];

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = nicheFilter === 'All' || p.niche === nicheFilter;
    return matchesSearch && matchesNiche;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Winning Products</h1>
          <p className="text-slate-400">Hand-picked high-performing products for your store.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
             <select
                className="bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-8 text-sm focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer w-full"
                value={nicheFilter}
                onChange={(e) => setNicheFilter(e.target.value)}
             >
                {niches.map(n => <option key={n} value={n}>{n}</option>)}
             </select>
          </div>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onSelectProduct(product)} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
          <p className="text-slate-500">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};
