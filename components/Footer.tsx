
import React from 'react';
import { Instagram, Play, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F4EBE1] border-t border-[#D7C9B1]/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold mb-10 text-[#3C3530]">함께 성장할 <br />가치를 찾으시나요?</h2>
          <a 
            href="https://mail.naver.com/v2/folders/0/write?to=yj990107@naver.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-2xl font-bold border-b-4 border-[#4A3E31] pb-2 text-[#4A3E31] hover:text-[#A67B5B] hover:border-[#A67B5B] transition-all"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={32} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-[#D7C9B1]/30">
          <div>
            <span className="text-xl font-bold tracking-tighter gradient-text">Think Infinite.</span>
            <p className="text-sm text-[#6F645E] mt-2">© 2025 Lee Yu-jeong. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-8 text-[#6F645E]">
            <a href="https://www.instagram.com/u_jung_gem" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-[#3C3530] transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@whyranosaurus" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-[#3C3530] transition-colors">TikTok</a>
            <a href="#" className="text-sm font-bold hover:text-[#3C3530] transition-colors">YouTube</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/u_jung_gem" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/60 rounded-full text-[#4A3E31] shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="https://www.tiktok.com/@whyranosaurus" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/60 rounded-full text-[#4A3E31] shadow-sm">
              <Play size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
