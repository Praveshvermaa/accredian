import Section from './ui/Section';

export default function AccredianEdge() {
  const edgeItems = [
    {
      title: "Tailored Solutions",
      desc: "Programs customized to your organization's goals and challenges.",
      position: "top",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
      )
    },
    {
      title: "Expert Guidance",
      desc: "Learn from industry leaders with real-world success.",
      position: "bottom",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Innovative Framework",
      desc: "Proprietary methods for impactful, application-driven results.",
      position: "top",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
      )
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art LMS for seamless learning experiences.",
      position: "bottom",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      )
    },
    {
      title: "Diverse Offerings",
      desc: "Courses across industries, skill levels, and emerging fields.",
      position: "top",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
      )
    },
    {
      title: "Proven Impact",
      desc: "Trusted by leading organizations for measurable ROI.",
      position: "bottom",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: "Flexible Delivery",
      desc: "Online and offline options tailored to your needs.",
      position: "top",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
      )
    }
  ];

  return (
    <Section id="edge" className="bg-[#f8fbff] py-24 overflow-hidden">
      <div className="text-center space-y-2 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          The <span className="text-[#1e6ef2]">Accredian Edge</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          Key Aspects of <span className="text-[#1e6ef2]">Our Strategic Training</span>
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Connection Line (Dashed) */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-blue-200 -translate-y-1/2 z-0 hidden lg:block"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 relative z-10">
          {edgeItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center group w-full lg:w-1/7">
              {/* Top Text */}
              <div className={`mb-8 h-24 text-center transition-all duration-500 ${item.position === 'top' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none hidden lg:block'}`}>
                {item.position === 'top' && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#1a1a1a] whitespace-nowrap">{item.title}</h4>
                    <p className="text-xs text-gray-500 max-w-[150px] mx-auto leading-relaxed">{item.desc}</p>
                    {/* Connector line to circle */}
                    <div className="w-0.5 h-6 bg-blue-300 mx-auto mt-2"></div>
                  </div>
                )}
              </div>

              {/* Central Circle */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#1e6ef2] group-hover:scale-110 transition-transform duration-300 z-10 relative">
                  <div className="text-[#1e6ef2]">
                    {item.icon}
                  </div>
                </div>
                {/* Decorative pulse */}
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Bottom Text */}
              <div className={`mt-8 h-24 text-center transition-all duration-500 ${item.position === 'bottom' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none hidden lg:block'}`}>
                {item.position === 'bottom' && (
                  <div className="space-y-2">
                    {/* Connector line to circle */}
                    <div className="w-0.5 h-6 bg-blue-300 mx-auto mb-2"></div>
                    <h4 className="font-bold text-[#1a1a1a] whitespace-nowrap">{item.title}</h4>
                    <p className="text-xs text-gray-500 max-w-[150px] mx-auto leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
