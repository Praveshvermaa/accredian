import Section from './ui/Section';

export default function Testimonials() {
  const testimonials = [
    {
      company: "ADP",
      logo: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F512%2Fadp_logo_icon_170616.png&id=170616&pack_or_individual=pack",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
    },
    {
      company: "Bayer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1280px-Logo_Bayer.svg.png",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
    }
  ];

  return (
    <Section id="testimonials" className="bg-white py-24">
      <div className="text-center space-y-2 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Testimonials from <span className="text-[#1e6ef2]">Our Partners</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          What <span className="text-[#1e6ef2]">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-[32px] p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 flex flex-col h-full">
            <div className="mb-8 h-12">
              <img src={t.logo} alt={t.company} className="h-full object-contain grayscale opacity-70" />
            </div>
            <p className="text-gray-600 italic text-lg leading-relaxed flex-grow">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Pagination dots indicator as seen in image */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
      </div>
    </Section>
  );
}
