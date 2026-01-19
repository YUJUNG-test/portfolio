
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs with cozy warm colors */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#EFE9DB] rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#F4EBE1] rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#EFE9DB] px-3 py-1 rounded-full text-xs font-semibold mb-6">
              <span className="w-2 h-2 bg-[#A67B5B] rounded-full animate-pulse" />
              <span className="text-[#6F645E] uppercase tracking-widest">Available for Collaborations</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-[#3C3530]">
              전략적인 콘텐츠로 <br />
              <span className="text-[#A67B5B]">브랜드 가치</span>를 <br />
              높입니다.
            </h1>
            <p className="text-xl text-[#6F645E] mb-10 max-w-2xl">
              무한한 생각으로 가치를 전달하고, 정교한 데이터 분석을 통해 결과의 차이를 만드는 콘텐츠 기획자 이유정입니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              {/* Contact Information replacing the button */}
              <div className="text-left bg-white/40 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#D7C9B1]/30 shadow-sm">
                <p className="text-[10px] font-bold text-[#A67B5B] uppercase tracking-[0.2em] mb-2">Contact</p>
                <div className="space-y-1">
                  <a 
                    href="https://mail.naver.com/v2/folders/0/write?to=yj990107@naver.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#4A3E31] flex items-center gap-2 hover:text-[#A67B5B] transition-colors"
                  >
                    <span className="font-semibold opacity-60">email.</span> yj990107@naver.com
                  </a>
                  <p className="text-xs text-[#4A3E31] flex items-center gap-2">
                    <span className="font-semibold opacity-60">tel.</span> 010.8726.3885
                  </p>
                </div>
              </div>

              <div className="flex items-center -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#FCF9F2] overflow-hidden shadow-sm">
                  <img src="https://picsum.photos/seed/face1/100/100" alt="Avatar" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#FCF9F2] overflow-hidden bg-[#D7C9B1] flex items-center justify-center text-[10px] font-bold text-[#4A3E31]">
                  7K+
                </div>
                <span className="ml-4 text-sm text-[#6F645E]">틱톡 팔로워 달성 및 다수 수상</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] lg:max-w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white/30">
              <img 
                src="https://picsum.photos/800/1000?sepia=0.5" 
                alt="Lee Yu-jeong Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E31]/20 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 lg:-left-12 bg-white/90 p-5 rounded-2xl shadow-xl glass-card hidden sm:block border border-[#D7C9B1]/30">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#4A3E31] text-[#FDFCF0] rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A67B5B]">TikTok Reach</p>
                  <p className="text-sm font-bold text-[#3C3530]">7,000+ Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
