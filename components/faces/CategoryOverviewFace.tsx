
import React from 'react';
import { Shirt, Smartphone, Briefcase, Wind, ChevronRight } from 'lucide-react';

export const CategoryOverviewFace: React.FC = () => {
  const subCats = [
    { name: 'Elektronik', Icon: Smartphone, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Çanta', Icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { name: 'Dış Giyim', Icon: Wind, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-6 text-white p-2">
      {/* Main Category Highlight */}
      <div className="bg-orange-500/20 border-2 border-orange-500 p-4 relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <Shirt size={100} />
        </div>
        <div className="relative z-10">
          <div className="text-[10px] text-orange-400 font-bold tracking-widest uppercase mb-1">Öne Çıkan</div>
          <h3 className="text-3xl font-black tracking-tighter">GİYİM</h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[68%]"></div>
            </div>
            <span className="text-xs font-mono">%68</span>
          </div>
        </div>
      </div>

      {/* Sub-Category Grid */}
      <div className="flex-1 grid grid-cols-1 gap-3">
        {subCats.map((cat, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-between p-3 ${cat.bg} border border-white/5 hover:border-white/20 transition-colors group cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded ${cat.bg} border border-current ${cat.color}`}>
                <cat.Icon size={18} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-200">{cat.name}</span>
            </div>
            <ChevronRight size={14} className="text-slate-600 group-hover:text-white transition-colors" />
          </div>
        ))}
      </div>

      {/* Bottom Status */}
      <div className="flex justify-between items-center px-1 text-[10px] font-mono text-slate-500 uppercase">
        <span>Kategori Filtresi: Aktif</span>
        <span className="text-orange-500">Veri Seti v2.1</span>
      </div>
    </div>
  );
};
