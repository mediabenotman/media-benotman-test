
import React, { useState } from 'react';
import { generateAdAngles, generateUGCScript, generateProductDescription } from '../services/gemini';
import { Sparkles, Copy, Check, Loader2, Wand2, Type as FontIcon, Video } from 'lucide-react';

export const AiTools: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    angles?: string[];
    script?: string;
    description?: string;
  }>({});
  const [activeTool, setActiveTool] = useState<'angles' | 'ugc' | 'description'>('angles');
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!productName) return;
    setLoading(true);
    try {
      if (activeTool === 'angles') {
        const angles = await generateAdAngles(productName);
        setResults(prev => ({ ...prev, angles }));
      } else if (activeTool === 'ugc') {
        const script = await generateUGCScript(productName);
        setResults(prev => ({ ...prev, script }));
      } else if (activeTool === 'description') {
        const description = await generateProductDescription(productName);
        setResults(prev => ({ ...prev, description }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold mb-2">AI Marketing Lab</h1>
        <p className="text-slate-400">Powered by Gemini 3 Flash to create high-converting ad assets in seconds.</p>
      </header>

      <div className="flex p-1 bg-slate-900 rounded-2xl border border-slate-800">
        {[
          { id: 'angles', label: 'Ad Angles', icon: Wand2 },
          { id: 'ugc', label: 'UGC Script', icon: Video },
          { id: 'description', label: 'Description', icon: FontIcon },
        ].map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
              activeTool === tool.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <tool.icon size={18} />
            <span className="hidden sm:inline">{tool.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-300">Product Name</label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="e.g. Bladeless Neck Fan"
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !productName}
              className="px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold flex items-center space-x-2 transition-all"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
              <span>Generate</span>
            </button>
          </div>
        </div>

        <div className="mt-10 min-h-[300px]">
          {loading ? (
             <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-4">
                <Loader2 size={40} className="animate-spin text-indigo-500" />
                <p>Gemini AI is crafting your content...</p>
             </div>
          ) : (
            <>
              {activeTool === 'angles' && results.angles && (
                <div className="space-y-4">
                  {results.angles.map((angle, i) => (
                    <div key={i} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center group">
                      <p className="text-slate-300">{angle}</p>
                      <button onClick={() => copyToClipboard(angle, `angle-${i}`)} className="p-2 text-slate-500 hover:text-white transition-colors">
                        {copied === `angle-${i}` ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {activeTool === 'ugc' && results.script && (
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl relative">
                   <button onClick={() => copyToClipboard(results.script!, 'script')} className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors">
                      {copied === 'script' ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                   </button>
                   <pre className="whitespace-pre-wrap font-sans text-slate-300 leading-relaxed pt-4">{results.script}</pre>
                </div>
              )}
              {activeTool === 'description' && results.description && (
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl relative">
                   <button onClick={() => copyToClipboard(results.description!, 'desc')} className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors">
                      {copied === 'desc' ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                   </button>
                   <div className="prose prose-invert max-w-none text-slate-300">
                      {results.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                   </div>
                </div>
              )}
              {!results[activeTool] && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                   <Wand2 size={40} className="mb-4 opacity-20" />
                   <p>Your AI-generated results will appear here.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
