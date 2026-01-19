import React, { useState } from 'react';
import { Lightbulb, BarChart3, Search, X, Play, ExternalLink, ArrowRight } from 'lucide-react';

interface CompetencyLink {
  title: string;
  url: string;
  type: 'video' | 'article' | 'social';
}

interface CompetencyData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  performance: string;
  insight: string;
  links: CompetencyLink[];
}

const Competencies: React.FC = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<CompetencyData | null>(null);

  const data: CompetencyData[] = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "아이디어 구상 및 실행력",
      subtitle: "틱톡 서포터즈 7,000 팔로워 돌파",
      performance: "3~4개월 만에 팔로워 7,000명 달성 및 틱톡 코리아 우수상 수상.",
      insight: "매주 새로운 숏폼 콘텐츠를 기획/제작하며 창의적 아이디어를 실제 유입 수치로 전환하는 최적의 프로세스를 보유하고 있습니다.",
      links: [
        { title: "틱톡 개인 채널 (@whyranosaurus)", url: "https://www.tiktok.com/@whyranosaurus", type: "social" },
        { title: "이십세들 X 틱톡 코리아 브랜디드 콘텐츠", url: "https://www.tiktok.com/@20birds_official", type: "video" }
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "데이터 분석 역량",
      subtitle: "숫자 속 맥락을 읽는 퍼포먼스 마인드",
      performance: "KBS 라디오 콘텐츠 조회수 흐름 및 차트 변화 밀착 모니터링.",
      insight: "단순 수치 변화가 아닌 편집 방식, 업로드 시점 등 복합적 변수를 분석하여 광고 효과를 극대화하는 개선안을 도출합니다.",
      links: [
        { title: "KBS 라디오 메인 홈페이지 송출 담당", url: "https://radio.kbs.co.kr/", type: "article" },
        { title: "KBS 라디오 메인 프로그램 편집 담당", url: "https://youtube.com/@kbs_coolfm?si=8L-KeHQO_e1ujT37", type: "video" }
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "시류 분석 및 트렌드 선점",
      subtitle: "흐름을 선점하는 눈",
      performance: "한국경제 영상 기자 활동, 블로그 기사 2,000뷰 및 영상 18개 제작.",
      insight: "독자의 관심사를 실시간 추적하여 트렌드를 예측하고, 브랜드의 차별화된 홍보 전략을 적시에 실행합니다.",
      links: [
        { title: "네이버 FARM TV 취재영상 (전통시장 부분)", url: "https://tv.naver.com/v/27698169?playlistNo=775935", type: "video" },
        { title: "네이버 FARM TV 취재 영상 (전통주 부분)", url: "https://tv.naver.com/v/25954519", type: "video" },
        { title: "카드뉴스 및 기사 작성", url: "https://blog.naver.com/nong-up", type: "article" }
      ]
    }
  ];

  const openModal = (item: CompetencyData) => {
    setSelectedCompetency(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCompetency(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-4">Core Competencies</h2>
        <h3 className="text-4xl font-bold text-[#3C3530]">브랜드 가치를 높여주는 <br />핵심 역량</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => openModal(item)}
            className="group relative bg-white/50 p-10 rounded-3xl border border-[#D7C9B1]/30 hover:border-[#A67B5B] transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-sm cursor-pointer hover:-translate-y-1"
          >
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

            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[#A67B5B] flex items-center justify-center text-white">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competency Modal */}
      {selectedCompetency && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#3C3530]/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          />
          <div className="relative bg-[#FCF9F2] w-full max-w-2xl overflow-hidden rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 border border-[#D7C9B1]/30">
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#4A3E31] text-[#FDFCF0] rounded-2xl">
                    {selectedCompetency.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#3C3530]">{selectedCompetency.title}</h2>
                    <p className="text-[#A67B5B] font-medium">{selectedCompetency.subtitle}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 bg-[#4A3E31]/5 hover:bg-[#4A3E31]/10 rounded-full text-[#4A3E31] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[#6F645E] text-sm leading-relaxed border-l-4 border-[#A67B5B] pl-4 italic">
                  "{selectedCompetency.insight}"
                </p>
              </div>

              <h3 className="text-xs font-bold text-[#6F645E] uppercase tracking-[0.2em] mb-4">Related Works & Links</h3>
              <div className="grid gap-3">
                {selectedCompetency.links.map((link, lidx) => (
                  <a 
                    key={lidx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white/60 hover:bg-white border border-[#D7C9B1]/20 rounded-2xl group transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#A67B5B] group-hover:bg-[#4A3E31] group-hover:text-white transition-colors">
                        {link.type === 'video' ? <Play size={18} fill="currentColor" /> : link.type === 'social' ? <ExternalLink size={18} /> : <ExternalLink size={18} />}
                      </div>
                      <span className="font-bold text-[#4A3E31] group-hover:text-[#A67B5B] transition-colors">{link.title}</span>
                    </div>
                    <ArrowRight size={18} className="text-[#D7C9B1] group-hover:text-[#A67B5B] transition-colors" />
                  </a>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button 
                  onClick={closeModal}
                  className="px-8 py-3 bg-[#4A3E31] text-[#FDFCF0] rounded-xl font-bold text-sm hover:bg-[#3C3530] transition-colors shadow-lg"
                >
                  확인 완료
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Competencies;