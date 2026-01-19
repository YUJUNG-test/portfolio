
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "KBS 미디어센터",
      role: "사원 | 디지털미디어 2팀 라디오국 AOD",
      period: "2023.06 - 2025.06",
      tasks: [
        "메이저 라디오 프로그램(키스 더 라디오 등) 음원 편집",
        "KONG 앱 송출 시스템 운영",
        "총 46개 프로그램 관리 및 팟캐스트 시장 활성화 기여"
      ]
    },
    {
      company: "아그로플러스 (한국경제 & 네이버)",
      role: "인턴 | 콘텐츠 에디터 및 기자",
      period: "2022.02 - 2022.07",
      tasks: [
        "'더농부' 블로그 및 '네이버 FARM TV' 콘텐츠 기획/제작",
        "지역 명물 취재 영상 18건 제작 (누적 약 2만 뷰)",
        "취재 기사 2,000뷰 달성"
      ]
    }
  ];

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Work Experience</h2>
        <h3 className="text-4xl font-bold">실무 현장에서 <br />쌓아온 발자취</h3>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative p-10 bg-white rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-10 hover:shadow-lg transition-all">
            <div className="md:w-1/3">
              <span className="text-sm font-bold text-gray-400 block mb-2">{exp.period}</span>
              <h4 className="text-2xl font-bold mb-1">{exp.company}</h4>
              <p className="text-gray-500 text-sm font-medium">{exp.role}</p>
            </div>
            <div className="flex-1 space-y-4">
              <ul className="space-y-4">
                {exp.tasks.map((task, tidx) => (
                  <li key={tidx} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
