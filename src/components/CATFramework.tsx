import Section from './ui/Section';

export default function CATFramework() {
  const steps = [
    {
      letter: "C",
      title: "Customization",
      desc: "Learning solutions tailored to your unique business needs.",
      className: "lg:col-start-1 lg:row-start-1"
    },
    {
      letter: "A",
      title: "Application",
      desc: "Focus on practical, real-world skills for immediate impact.",
      className: "lg:col-start-3 lg:row-start-1"
    },
    {
      letter: "T",
      title: "Transformation",
      desc: "Driving long-term growth and organizational success.",
      className: "lg:col-start-2 lg:row-start-2 lg:-mt-24"
    }
  ];

  return (
    <Section id="cat" className="bg-white py-24">
      <div className="text-center space-y-4 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          The <span className="text-[#1e6ef2]">CAT Framework</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium">
          A <span className="text-[#1e6ef2]">Strategic Approach</span> to Learning and Development
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central "CAT" Branding Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-50 border-4 border-dashed border-blue-200 hidden lg:flex items-center justify-center opacity-50">
          <span className="text-6xl font-black text-blue-200">CAT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col items-center group ${step.className}`}>
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white border-[12px] border-[#f0f7ff] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-6 md:p-10 text-center transition-all duration-500 hover:border-[#1e6ef2] hover:shadow-2xl hover:-translate-y-2">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1e6ef2] text-white flex items-center justify-center text-2xl md:text-3xl font-black mb-4 md:mb-6 shadow-lg">
                  {step.letter}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-xs md:text-base px-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
