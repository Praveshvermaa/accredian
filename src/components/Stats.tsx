import Section from './ui/Section';

export default function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success"
    },
    {
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence"
    },
    {
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses"
    }
  ];

  return (
    <Section id="stats" className="bg-white py-20">
      <div className="text-center space-y-2 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Our <span className="text-[#1e6ef2]">Track Record</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          The Numbers Behind <span className="text-[#1e6ef2]">Our Success</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 flex flex-col items-center text-center px-8 relative">
            {/* Pill Container */}
            <div className="bg-[#e6f0ff] px-8 py-3 rounded-full mb-6">
              <span className="text-3xl font-bold text-[#1e6ef2]">{stat.number}</span>
            </div>
            {/* Label */}
            <p className="text-gray-800 font-medium leading-relaxed max-w-[250px]">
              {stat.label}
            </p>
            
            {/* Vertical Divider (Hidden on mobile, shown on desktop between items) */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[1px] bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
