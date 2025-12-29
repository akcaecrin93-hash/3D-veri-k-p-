
import React from 'react';
import { X, Maximize2, RotateCcw, Info } from 'lucide-react';

interface UIOverlayProps {
  activeFace: string | null;
  setActiveFace: (face: string | null) => void;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({ activeFace, setActiveFace }) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
      {/* Header */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="bg-slate-900/80 backdrop-blur border-l-4 border-sky-500 p-4 shadow-2xl">
          <h1 className="text-2xl font-black tracking-tighter text-white">DATA CUBE <span className="text-sky-400">V.2.0</span></h1>
          <p className="text-xs text-sky-300/60 uppercase tracking-widest mt-1">Multi-Dimensional Analysis Engine</p>
        </div>

        <div className="flex gap-2">
           <button className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all">
             <Info size={18} />
           </button>
           <button 
            onClick={() => window.location.reload()}
            className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
          >
             <RotateCcw size={18} />
           </button>
        </div>
      </div>

      {/* Center Detail Modal (Visible when a face is clicked) */}
      {activeFace && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm pointer-events-auto">
          <div className="bg-slate-900 border-2 border-sky-500 p-8 w-full max-w-lg relative animate-in fade-in zoom-in duration-300">
             <button 
                onClick={() => setActiveFace(null)}
                className="absolute -top-4 -right-4 bg-sky-500 p-2 text-white hover:bg-sky-600 transition-colors rounded-none"
             >
               <X size={20} />
             </button>
             
             <div className="mb-6">
                <h2 className="text-3xl font-black text-sky-400 uppercase tracking-widest">{activeFace} ANALİZİ</h2>
                <div className="h-1 w-20 bg-orange-500 mt-2"></div>
             </div>

             <div className="text-slate-300 space-y-4">
                <p>Bu boyut için detaylı veriler yükleniyor. Gerçek zamanlı API entegrasyonu aktif.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 border-l-2 border-sky-500">
                    <div className="text-[10px] text-sky-400">STATUS</div>
                    <div className="font-bold text-white">SYNCING</div>
                  </div>
                  <div className="bg-slate-800 p-4 border-l-2 border-orange-500">
                    <div className="text-[10px] text-orange-400">LATENCY</div>
                    <div className="font-bold text-white">12ms</div>
                  </div>
                </div>
                <button className="w-full py-4 bg-sky-600 text-white font-bold tracking-widest hover:bg-sky-500 transition-colors">
                  DETAYLI RAPORU AÇ
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Footer / Stats Bar */}
      <div className="flex justify-center pointer-events-auto">
        <div className="bg-slate-900/90 backdrop-blur border-b-4 border-orange-500 px-8 py-3 flex gap-12 text-sm">
           <div className="flex flex-col">
              <span className="text-[10px] text-orange-400 font-bold uppercase">Total Volume</span>
              <span className="text-white font-mono">1.2M Units</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] text-sky-400 font-bold uppercase">Active Nodes</span>
              <span className="text-white font-mono">248 Online</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] text-sky-400 font-bold uppercase">Drill-Down Depth</span>
              <span className="text-white font-mono">Level 4</span>
           </div>
        </div>
      </div>

      {/* Subtle Side Decors */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-40">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-sky-500 to-transparent"></div>
        <div className="text-sky-500 [writing-mode:vertical-lr] tracking-[0.5em] text-[10px] font-bold">DIMENSION SELECTOR</div>
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-sky-500 to-transparent"></div>
      </div>
    </div>
  );
};
