
import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

export const TurkeyGeoFace: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col text-white">
      <div className="relative flex-1 flex items-center justify-center p-2 group">
        <svg viewBox="0 0 200 100" className="w-full h-full text-orange-500/30">
          <g className="fill-current">
            <path d="M10,35 L40,30 L55,30 L70,35 L90,32 L110,35 L130,30 L150,32 L170,35 L190,40 L195,65 L175,75 L150,75 L120,80 L80,75 L50,80 L20,75 L10,60 Z" opacity="0.4" />
            <path d="M5,15 L25,10 L35,20 L30,30 L10,30 Z" opacity="0.4" />
          </g>
          
          <g>
            <circle cx="28" cy="38" r="5" fill="#0ea5e9" className="animate-ping" opacity="0.6" />
            <circle cx="28" cy="38" r="2" fill="#0ea5e9" />
            <path d="M28,38 L20,50 L10,50" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.8" />
          </g>

          <circle cx="28" cy="38" r="40" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.2">
             <animateTransform attributeName="transform" type="rotate" from="0 28 38" to="360 28 38" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="absolute top-0 left-0 p-2 text-left bg-slate-900/80 backdrop-blur-sm border-l-2 border-sky-500 shadow-xl">
          <div className="text-[8px] text-sky-400 font-mono tracking-tighter uppercase">Local Analysis</div>
          <div className="text-xs font-black tracking-widest text-white">BALIKESİR</div>
          <div className="text-[7px] text-slate-400 font-mono">Region: Marmara - Aegean</div>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        <div className="flex justify-between items-center text-[10px] bg-orange-950/20 p-2 border-b border-orange-900/50">
           <div className="flex items-center gap-2">
             <Navigation size={10} className="text-orange-400" />
             <span className="text-orange-200">Lojistik Merkezi</span>
           </div>
           <span className="font-mono text-white">AKTİF</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
           <div className="bg-slate-900/40 p-2 border border-sky-900/30 rounded">
              <div className="text-[8px] text-sky-500 font-bold">PERSONEL</div>
              <div className="text-sm font-mono">1,240</div>
           </div>
           <div className="bg-slate-900/40 p-2 border border-sky-900/30 rounded">
              <div className="text-[8px] text-sky-500 font-bold">VERİMLİLİK</div>
              <div className="text-sm font-mono text-green-400">%94</div>
           </div>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-2 text-[9px] text-slate-500 font-mono">
        <Info size={10} />
        <span>BÖLGESEL DAĞILIM ANALİZİ V.4</span>
      </div>
    </div>
  );
};
