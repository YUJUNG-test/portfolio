
import React from 'react';
import { Instagram, Play, Mail, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const keywords = ['#열정', '#책임감', '#트렌드세터', '#콘텐츠전략', '#인사이트기획'];

  const scrollToCompetencies = () => {
    const element = document.getElementById('competencies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-4">About Me</h2>
        <h3 className="text-3xl font-bold mb-6 text-[#3C3530]">시류를 선점하는 <br />전략적 콘텐츠 에디터</h3>
        <p className="text-[#6F645E] leading-relaxed mb-8">
          영상 콘텐츠와 SNS를 사랑하는 전략가입니다. 
          단순한 제작을 넘어 트렌드를 분석하고 정교한 데이터 분석을 통해 가시적인 성과를 만들어냅니다.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {keywords.map((word) => (
            <span key={word} className="px-4 py-1.5 bg-[#F4EBE1] text-[#4A3E31] rounded-full text-sm font-medium border border-[#D7C9B1]/20">
              {word}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/u_jung_gem" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#EFE9DB] rounded-full hover:bg-[#D7C9B1] transition-colors text-[#4A3E31]">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@whyranosaurus" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#EFE9DB] rounded-full hover:bg-[#D7C9B1] transition-colors text-[#4A3E31]">
            <Play size={20} />
          </a>
          <a 
            href="https://mail.naver.com/v2/folders/0/write?to=yj990107@naver.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#EFE9DB] rounded-full hover:bg-[#D7C9B1] transition-colors text-[#4A3E31]"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white/60 rounded-3xl border border-[#D7C9B1]/20 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
          <CheckCircle2 className="text-[#A67B5B] mb-6" size={32} />
          <h4 className="text-xl font-bold mb-4 text-[#3C3530]">콘텐츠 기획</h4>
          <p className="text-[#6F645E] text-sm leading-relaxed">
            매주 새로운 숏폼 콘텐츠를 기획하며 창의적인 아이디어를 유입 수치로 전환하는 최적의 프로세스를 보유하고 있습니다.
          </p>
        </div>
        <div className="p-8 bg-white/60 rounded-3xl border border-[#D7C9B1]/20 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
          <div className="flex items-center justify-center w-8 h-8 bg-[#4A3E31] text-[#FDFCF0] rounded-lg mb-6 text-xs font-bold">DATA</div>
          <h4 className="text-xl font-bold mb-4 text-[#3C3530]">성과 분석</h4>
          <p className="text-[#6F645E] text-sm leading-relaxed">
            수치 속 맥락을 읽는 퍼포먼스 마인드로 광고 효과를 극대화하는 개선안을 도출합니다.
          </p>
        </div>
        <div 
          onClick={scrollToCompetencies}
          className="md:col-span-2 p-10 bg-[#4A3E31] text-[#FDFCF0] rounded-3xl relative overflow-hidden group shadow-lg cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-4">"Think Infinite."</h4>
            <p className="text-[#D7C9B1] max-w-lg mb-6">
              제 슬로건처럼 무한한 생각의 확장은 새로운 가치를 발견하는 시작점이 됩니다. 데이터로 증명하는 마케터가 되겠습니다.
            </p>
            <div className="h-1 w-24 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#A67B5B] w-1/2 group-hover:w-full transition-all duration-1000" />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-[#D7C9B1]/40 font-bold group-hover:text-[#D7C9B1] transition-colors">Click to explore my core competencies</p>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-5 text-[#FDFCF0]">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
