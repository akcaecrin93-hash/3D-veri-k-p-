
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Oca', val: 400 },
  { name: 'Şub', val: 300 },
  { name: 'Mar', val: 600 },
  { name: 'Nis', val: 800 },
  { name: 'May', val: 500 },
  { name: 'Haz', val: 700 },
];

export const TimeFace: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-white">
      <div className="grid grid-cols-2 gap-2 text-xs opacity-80">
        <div className="border border-sky-800 p-2 bg-sky-900/20">Şubat: 300</div>
        <div className="border border-sky-800 p-2 bg-sky-900/20">Hafta: 42</div>
        <div className="border border-sky-800 p-2 bg-sky-900/20">Mar: 600</div>
        <div className="border border-sky-800 p-2 bg-sky-900/20">Nis: 800</div>
      </div>
      
      <div className="flex-1 min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#0c4a6e" vertical={false} />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#082f49', border: '1px solid #0ea5e9' }} 
              itemStyle={{ color: '#38bdf8' }}
            />
            <Line 
              type="monotone" 
              dataKey="val" 
              stroke="#0ea5e9" 
              strokeWidth={3} 
              dot={{ fill: '#38bdf8', r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center text-sky-400 text-sm font-semibold tracking-tighter">
        HAFTALIK SATIŞ TRENDİ
      </div>
    </div>
  );
};
