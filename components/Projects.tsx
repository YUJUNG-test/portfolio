import React, { useState } from 'react';
import { X, ExternalLink, Trophy, Calendar, Play } from 'lucide-react';

interface Project {
  title: string;
  tag: string;
  award?: string;
  desc: string;
  longDesc: string;
  thumbnails: string[];
  mainImage: string;
  year: string;
  category: string;
  link: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 사용자로부터 제공받은 메인 사진 URL (취업사진)
  const userMainPhoto = "https://raw.githubusercontent.com/YUJUNG-test/portfolio/b805f89e769c5339e5ea52101b7106786da11aef/%EC%B7%A8%EC%97%85%EC%82%AC%EC%A7%84.jpg";
  
  // 새로 제공받은 틱톡 메인 사진 URL
  const tiktokMainPhoto = "https://raw.githubusercontent.com/YUJUNG-test/portfolio/edc471189af4219b9c5212a8d00b7f7c57198de4/%ED%8B%B1%ED%86%A1%EC%82%AC%EC%A7%84.jpg";

  // 유튜브 썸네일 URL (영상 ID: ROnhAKqhhnw)
  const signalYoutubeThumbnail = "https://img.youtube.com/vi/ROnhAKqhhnw/maxresdefault.jpg";

  // 사용자가 제공한 복순도가 썸네일 (raw 주소로 변환)
  const boksoondogaThumbnail = "https://raw.githubusercontent.com/YUJUNG-test/portfolio/9b3aec40ba25d58d5b7c57cdfeb075bd862461f6/%EB%B3%B5%EC%88%9C%EB%8F%84%EA%B0%80%20%EC%8D%B8%EB%84%A4%EC%9D%BC.png";

  const projects: Project[] = [
    {
      title: "이십세들X틱톡 코리아",
      tag: "우수상 수상",
      award: "우수상 수상",
      desc: "틱톡 콘텐츠 자체 제작",
      longDesc: "틱톡 코리아와의 협업을 통해 '이십세들' 채널의 브랜디드 콘텐츠를 기획하고 자체 제작했습니다. 트렌디한 숏폼 형식을 활용하여 높은 조회수와 유입률을 기록하며 브랜드 홍보 효과를 극대화하였습니다.",
      thumbnails: [
        tiktokMainPhoto
      ],
      mainImage: tiktokMainPhoto,
      year: "2023",
      category: "Content Planning / Video",
      link: "https://www.tiktok.com/@whyranosaurus"
    },
    {
      title: "영상연합동아리 SIGNAL",
      tag: "운영 총괄",
      award: "KTV 선정",
      desc: "단편영화 '그세상' 제작",
      longDesc: "영상연합동아리 SIGNAL의 운영진으로서 활동하며 단편영화 '그세상'의 제작 전 과정을 매니징했습니다. 해당 작품은 독창성과 작품성을 인정받아 KTV 국민방송에 선정되어 방영되는 성과를 거두었습니다.",
      thumbnails: [
        signalYoutubeThumbnail
      ],
      mainImage: signalYoutubeThumbnail,
      year: "2022-2024",
      category: "Film Production / Management",
      link: "https://www.youtube.com/watch?v=ROnhAKqhhnw"
    },
    {
      title: "한국경제 & 네이버 합작사 아그로플러스 영상 기자",
      tag: "콘텐츠 에디터",
      award: "인턴십 수료",
      desc: "기사 작성 및 영상 기사 제작",
      longDesc: "아그로플러스(한국경제 & 네이버)에서 콘텐츠 에디터 및 기자로 활동하며 '더농부' 블로그와 '네이버 FARM TV'의 다채로운 콘텐츠를 기획하고 제작했습니다. 지역 명물 취재를 통해 누적 2만 뷰 이상의 성과를 기록하며 기획력과 제작 역량을 증명했습니다.",
      thumbnails: [
        boksoondogaThumbnail
      ],
      // 요청하신 복순도가 썸네일 이미지로 변경
      mainImage: boksoondogaThumbnail, 
      year: "2022",
      category: "Journalism / Content Strategy",
      link: "https://tv.naver.com/v/25954519"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-4">Recent Major Projects</h2>
          <h3 className="text-4xl font-bold text-[#3C3530]">성과로 증명된 <br />주요 프로젝트</h3>
        </div>
        <button className="text-sm font-bold text-[#6F645E] underline underline-offset-8 hover:text-[#3C3530] transition-colors">전체 작품 보기</button>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] mb-6 shadow-md transition-shadow hover:shadow-xl bg-[#4A3E31]">
              <div className="w-full aspect-[21/9] overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play className="text-white ml-1" size={32} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#3C3530]/60 to-transparent pointer-events-none" />
              
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold shadow-sm text-[#4A3E31]">
                  {project.award}
                </span>
                <span className="bg-[#3C3530]/90 backdrop-blur text-[#FDFCF0] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                  {project.year}
                </span>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-4 rounded-full text-[#4A3E31]">
                <ExternalLink size={20} />
              </div>
            </div>

            <div className="flex justify-between items-start px-4">
              <div>
                <h4 className="text-2xl font-bold mb-1 text-[#3C3530] group-hover:text-[#A67B5B] transition-colors">{project.title}</h4>
                <p className="text-[#6F645E]">{project.desc}</p>
              </div>
              <span className="text-base font-bold text-[#A67B5B] uppercase tracking-widest pt-2">
                {project.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#3C3530]/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          />
          <div className="relative bg-[#FCF9F2] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
            <div className="sticky top-0 right-0 p-6 flex justify-end z-10">
              <button 
                onClick={closeModal}
                className="p-3 bg-[#4A3E31]/10 hover:bg-[#4A3E31]/20 rounded-full text-[#4A3E31] transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-8 sm:px-12 pb-12">
              <div className="mb-10 rounded-3xl overflow-hidden shadow-lg aspect-video relative group border border-[#D7C9B1]/30">
                <img 
                  src={selectedProject.mainImage} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Play className="text-[#4A3E31] ml-2" size={40} fill="currentColor" />
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-[#EFE9DB] px-4 py-1.5 rounded-full text-xs font-bold text-[#A67B5B]">
                  <Trophy size={14} />
                  {selectedProject.award}
                </div>
                <div className="flex items-center gap-2 bg-[#F4EBE1] px-4 py-1.5 rounded-full text-xs font-bold text-[#6F645E]">
                  <Calendar size={14} />
                  {selectedProject.year}
                </div>
                <div className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#4A3E31] text-white">
                  {selectedProject.category}
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#3C3530] mb-4">{selectedProject.title}</h2>
              <p className="text-xl text-[#A67B5B] font-medium mb-8 leading-relaxed">{selectedProject.desc}</p>
              
              <div className="h-px bg-[#D7C9B1]/30 w-full mb-8" />
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-bold text-[#6F645E] uppercase tracking-widest mb-3">Project Overview</h5>
                  <p className="text-[#3C3530] leading-relaxed whitespace-pre-line">
                    {selectedProject.longDesc}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.thumbnails.map((thumb, idx) => (
                    <img 
                      key={idx} 
                      src={thumb} 
                      className="w-32 h-32 rounded-xl border border-[#D7C9B1]/20 shadow-sm object-cover" 
                      alt="Thumbnail detail"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#4A3E31] text-[#FDFCF0] rounded-2xl font-bold hover:bg-[#5D534A] transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  상세 문서 보기
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;