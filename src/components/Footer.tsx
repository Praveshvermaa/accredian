import Button from './ui/Button';

export default function Footer({ onEnquireClick }: { onEnquireClick?: () => void }) {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section with Logo, Socials and Enquire Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-[#1e6ef2] tracking-tighter">accredian</h2>
              <p className="text-[10px] text-gray-400 font-medium tracking-[0.2em] uppercase">credentials that matter</p>
            </div>
            <div className="flex gap-4">
              {[
                { 
                  name: 'facebook', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                },
                { 
                  name: 'linkedin', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                },
                { 
                  name: 'twitter', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                },
                { 
                  name: 'instagram', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                },
                { 
                  name: 'youtube', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
                }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-[#1e6ef2] hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Button 
              onClick={onEnquireClick}
              className="bg-[#1e6ef2] hover:bg-[#1a5ed9] px-8 py-3 text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Enquire Now
            </Button>
            <p className="text-sm text-gray-500 font-medium">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="border-gray-100 mb-12" />

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1a1a1a]">Accredian</h3>
            <ul className="space-y-3 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#1e6ef2] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#1e6ef2] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#1e6ef2] transition-colors">Why Accredian</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1a1a1a]">Contact Us</h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex gap-2">
                <span className="text-[#1a1a1a]">Email us:</span>
                <a href="mailto:enterprise@accredian.com" className="text-[#1e6ef2] hover:underline">enterprise@accredian.com</a>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1a1a1a] flex-shrink-0">Office Address:</span>
                <span>4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-100 mb-8" />

        {/* Bottom Copyright */}
        <div className="text-center text-sm text-gray-500 font-medium">
          © 2025 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
