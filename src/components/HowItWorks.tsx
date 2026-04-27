import Section from './ui/Section';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    },
    {
      number: "2",
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="3" rx="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
      )
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>
      )
    }
  ];

  return (
    <Section id="how-it-works" className="bg-white py-24">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          How We <span className="text-[#1e6ef2]">Deliver Results</span> That Matter?
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          A <span className="text-[#1e6ef2]">Structured Three-Step Approach</span> to Skill Development
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {steps.map((step, index) => (
          <div key={index} className="relative bg-[#f0f7ff] rounded-3xl p-10 shadow-lg border-l-8 border-r-8 border-[#1e6ef2] flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            {/* Step Number Badge */}
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full border-2 border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm">
              {step.number}
            </div>
            
            {/* Icon Circle */}
            <div className="w-24 h-24 rounded-full bg-[#1e6ef2] flex items-center justify-center mb-8 shadow-xl">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
