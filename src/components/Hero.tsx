import Button from './ui/Button';

export default function Hero({ onEnquireClick }: { onEnquireClick?: () => void }) {
  return (
    <section id="home" className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#f0f7ff] rounded-[40px] px-8 md:px-16 pt-16 pb-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            <div className="flex-1 space-y-10 z-10 pb-16 lg:pb-16">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-3xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight">
                  Next-Gen <span className="text-[#1e6ef2]">Expertise</span> <br />
                  For Your <span className="text-[#1e6ef2]">Enterprise</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-xl">
                  Cultivate high-performance teams <br /> through expert learning.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm md:text-md font-medium text-gray-700">
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Button 
                  size="lg" 
                  onClick={onEnquireClick}
                  className="bg-[#1e6ef2] hover:bg-[#1a5ed9] px-12 py-5 text-xl font-bold rounded-2xl shadow-[0_10px_25px_-5px_rgba(30,110,242,0.4)] transition-transform hover:scale-105"
                >
                  Enquire Now
                </Button>
              </div>
            </div>

            <div className="flex-1 relative lg:-mt-16">
              <img
                src="/hero-people.png"
                alt="Accredian Team"
                className="w-full h-auto max-w-2xl lg:max-w-none relative z-10"
              />
              {/* Optional glow effect behind people */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-blue-400/20 blur-[120px] -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
