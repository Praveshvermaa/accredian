import Section from './ui/Section';

export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const whoShouldJoin = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="m12 17 4 4"/><path d="m12 17-4 4"/><path d="M12 13v4"/></svg>
      )
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>
      )
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      )
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>
      )
    }
  ];

  return (
    <>
      <Section id="segmentation" className="bg-[#f8fbff] py-24">
        <div className="text-center space-y-2 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
            Tailored <span className="text-[#1e6ef2]">Course Segmentation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium">
            Explore <span className="text-[#1e6ef2]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment) => (
            <div key={segment.title} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={segment.image} 
                  alt={segment.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center space-y-3">
                <h3 className="text-xl font-bold text-[#1e6ef2]">{segment.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{segment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white py-12">
        <div className="max-w-7xl mx-auto bg-[#1e6ef2] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="lg:w-1/3 text-white space-y-6 z-10">
            <p className="text-lg font-bold opacity-80 uppercase tracking-widest">Who Should Join?</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Strategic Skill Enhancement</h2>
            <div className="pt-8 hidden lg:block">
              <img 
                src="/hero-people.png" 
                alt="Professionals" 
                className="w-full h-auto max-w-[280px] brightness-110 grayscale"
              />
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 z-10">
            {whoShouldJoin.map((item) => (
              <div key={item.title} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-[#1e6ef2] transition-all duration-300">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
