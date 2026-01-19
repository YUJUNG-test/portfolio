
import React from 'react';
import { Lightbulb, BarChart3, Search } from 'lucide-react';

const Competencies: React.FC = () => {
  const data = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "아이디어 구상 및 실행력",
      subtitle: "틱톡 서포터즈 7,000 팔로워 돌파",
      performance: "3~4개월 만에 팔로워 7,000명 달성 및 틱톡 코리아 우수상 수상.",
      insight: "매주 새로운 숏폼 콘텐츠를 기획/제작하며 창의적 아이디어를 실제 유입 수치로 전환하는 최적의 프로세스를 보유하고 있습니다."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "데이터 분석 역량",
      subtitle: "숫자 속 맥락을 읽는 퍼포먼스 마인드",
      performance: "KBS 라디오 콘텐츠 조회수 흐름 및 차트 변화 밀착 모니터링.",
      insight: "단순 수치 변화가 아닌 편집 방식, 업로드 시점 등 복합적 변수를 분석하여 광고 효과를 극대화하는 개선안을 도출합니다."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "시류 분석 및 트렌드 선점",
      subtitle: "흐름을 선점하는 눈",
      performance: "한국경제 영상 기자 활동, 블로그 기사 2,000뷰 및 영상 18개 제작.",
      insight: "독자의 관심사를 실시간 추적하여 트렌드를 예측하고, 브랜드의 차별화된 홍보 전략을 적시에 실행합니다."
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-4">Core Competencies</h2>
        <h3 className="text-4xl font-bold text-[#3C3530]">브랜드 가치를 높여주는 <br />핵심 역량</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div key={idx} className="group relative bg-white/50 p-10 rounded-3xl border border-[#D7C9B1]/30 hover:border-[#A67B5B] transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-sm">
            <div className="mb-8 p-4 bg-[#F4EBE1] text-[#A67B5B] rounded-2xl inline-block group-hover:bg-[#4A3E31] group-hover:text-[#FDFCF0] transition-all">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#3C3530]">{item.title}</h4>
            <p className="text-[#A67B5B] text-sm mb-6 font-medium">{item.subtitle}</p>
            
            <div className="space-y-6 pt-6 border-t border-[#D7C9B1]/30">
              <div>
                <span className="text-[10px] font-bold text-[#6F645E] uppercase tracking-widest block mb-2">Performance</span>
                <p className="text-sm font-semibold leading-relaxed text-[#4A3E31]">{item.performance}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#6F645E] uppercase tracking-widest block mb-2">Insight</span>
                <p className="text-sm text-[#6F645E] leading-relaxed italic">"{item.insight}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competencies;