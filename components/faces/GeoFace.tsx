
import React from 'react';
import { MapPin, Globe, Search } from 'lucide-react';

export const GeoFace: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col text-white">
      <div className="relative flex-1 flex items-center justify-center p-2 group">
        {/* Holographic World Map SVG */}
        <svg viewBox="0 0 200 100" className="w-full h-full text-sky-500/30">
          <g className="fill-current">
            <path d="M10,20 L40,15 L50,25 L45,45 L35,50 L20,40 Z" opacity="0.4" />
            <path d="M45,55 L60,55 L55,85 L45,85 L40,70 Z" opacity="0.4" />
            <path d="M90,40 L115,40 L125,55 L115,80 L100,85 L90,70 L85,55 Z" opacity="0.4" />
            <path d="M85,35 L100,15 L140,10 L180,20 L185,50 L160,55 L130,45 L115,50 L95,50 L85,45 Z" opacity="0.4" />
            <path d="M160,70 L180,70 L185,85 L165,90 Z" opacity="0.4" />
          </g>
          
          <g>
            <circle cx="112" cy="38" r="4" fill="#fb923c" className="animate-ping" opacity="0.6" />
            <circle cx="112" cy="38" r="1.5" fill="#fb923c" />
            <path d="M112,38 L115,30 L125,30" fill="none" stroke="#fb923c" strokeWidth="0.5" opacity="0.8" />
          </g>

          <rect x="0" y="0" width="200" height="100" fill="url(#scanline)" opacity="0.2" />
          
          <defs>
            <linearGradient id="scanline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-2 right-2 p-2 text-right bg-slate-900/60 backdrop-blur-sm border-r-2 border-orange-500">
          <div className="text-[9px] text-sky-300 font-mono tracking-tighter uppercase">Target Region</div>
          <div className="text-sm font-black tracking-widest text-white">TR - EMEA</div>
          <div className="text-[8px] text-orange-400 font-mono">39.6484 N, 27.8826 E</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1 bg-sky-950/40 p-2 rounded border border-sky-800/50 hover:border-sky-500 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase font-bold">
            <MapPin size={12} className="text-orange-400" />
            <span>HQ Location</span>
          </div>
          <span className="text-xs text-slate-200">Balıkesir, Türkiye</span>
        </div>
        
        <div className="flex flex-col gap-1 bg-sky-950/40 p-2 rounded border border-sky-800/50 hover:border-sky-500 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase font-bold">
            <Globe size={12} className="text-sky-400" />
            <span>Connectivity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-sky-500 w-[92%] animate-pulse"></div>
            </div>
            <span className="text-[10px] font-mono">92%</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-sky-900/50 pt-3">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[9px] uppercase tracking-tighter text-sky-500 font-bold">System Active</span>
        </div>
        <Search size={12} className="text-sky-700" />
      </div>
    </div>
  );
};
