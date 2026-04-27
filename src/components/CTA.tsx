import Button from './ui/Button';

export default function CTA({ onEnquireClick }: { onEnquireClick?: () => void }) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#1e6ef2] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle concentric circles background decoration as seen in image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e6ef2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Want to Learn More About Our Training Solutions?</h2>
              <p className="text-blue-100 font-medium">Get Expert Guidance For Your Team's Success!</p>
            </div>
          </div>

          <div className="z-10">
            <Button 
              variant="outline" 
              onClick={onEnquireClick}
              className="bg-white border-white text-[#1e6ef2] hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
