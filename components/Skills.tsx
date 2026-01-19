
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const Skills: React.FC = () => {
  const videoSkills = [
    { name: 'Premiere Pro', level: 90 },
    { name: 'Adobe Encoding', level: 90 },
    { name: 'Audacity', level: 85 },
  ];

  const designSkills = [
    { name: 'Photoshop', level: 90 },
    { name: 'Power Point', level: 85 },
    { name: 'SNS MGMT', level: 90 },
  ];

  const SkillBar: React.FC<{ data: any[] }> = ({ data }) => (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 30 }}>
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={120} 
            axisLine={false} 
            tickLine={false}
            style={{ fontWeight: 'bold', fontSize: '12px', fill: '#4A3E31' }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }} 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#4A3E31] text-[#FDFCF0] px-3 py-1 rounded-lg text-xs font-bold">
                    {payload[0].value}%
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="level" radius={[0, 10, 10, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#A67B5B' : '#D7C9B1'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-4">Tech Skills</h2>
        <h3 className="text-4xl font-bold text-[#3C3530]">생각을 현실로 만드는 <br />전문 도구</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="p-10 bg-white/40 rounded-[2.5rem] border border-[#D7C9B1]/30 shadow-sm backdrop-blur-sm">
          <h4 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#3C3530]">
            <span className="w-2 h-8 bg-[#A67B5B] rounded-full" />
            Video Production
          </h4>
          <SkillBar data={videoSkills} />
        </div>
        <div className="p-10 bg-white/40 rounded-[2.5rem] border border-[#D7C9B1]/30 shadow-sm backdrop-blur-sm">
          <h4 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#3C3530]">
            <span className="w-2 h-8 bg-[#D7C9B1] rounded-full" />
            Design & Strategy
          </h4>
          <SkillBar data={designSkills} />
        </div>
      </div>
    </div>
  );
};

export default Skills;