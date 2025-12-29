
import React from 'react';
import { Layers, Package, ShoppingBag } from 'lucide-react';

export const CategoryFace: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-white">
      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-orange-500/20 border border-orange-500 flex items-center justify-center">
            <ShoppingBag size={16} className="text-orange-400" />
          </div>
          <div>
            <div className="text-[10px] uppercase text-orange-400 opacity-60">Ana Kategori</div>
            <div className="text-lg font-bold tracking-wide">GİYİM</div>
          </div>
        </div>

        <div className="ml-4 border-l-2 border-orange-800 pl-4 py-1 space-y-3">
          <div className="flex items-center gap-3">
            <Package size={14} className="text-orange-300" />
            <div className="text-sm">Dış Giyim</div>
          </div>
          <div className="ml-4 flex items-center gap-3 bg-orange-500/10 p-2 rounded border border-orange-500/30">
            <Layers size={14} className="text-orange-400" />
            <div className="text-sm font-bold">KABAN</div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-orange-800 flex justify-between items-end">
        <div>
          <div className="text-xs text-orange-400">SATIŞ ORANI</div>
          <div className="text-3xl font-black text-white">%45</div>
        </div>
        <div className="h-2 w-24 bg-orange-950 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-[45%]"></div>
        </div>
      </div>
    </div>
  );
};
