'use client';

import Section from './ui/Section';

export default function Clients() {
  const clients = [
    { name: "Reliance", logo: "https://media.licdn.com/dms/image/v2/D4E12AQGC7Ow4HWZYDQ/article-cover_image-shrink_720_1280/B4EZfFeihAHYAI-/0/1751364808209?e=2147483647&v=beta&t=87W9R8IznlEADJBeMKaDlU7e2cVg_2o1BsTWjgTHYMM" },
    { name: "HCL", logo: "https://static.brandfinance.com/wp-content/uploads/2016/01/HCL-Logo.png" },
    { name: "IBM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVisdeUOYAkTRDk_4L4K-x2g4rhE64P3WpcA&s" },
    { name: "CRIF", logo: "https://www.greatplacetowork.in/great/api/assets/uploads/8680/logo/logo.png" },
    { name: "ADP", logo: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F512%2Fadp_logo_icon_170616.png&id=170616&pack_or_individual=pack" },
    { name: "Bayer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1280px-Logo_Bayer.svg.png" }
  ];

  return (
    <Section id="clients" className="bg-white py-20 border-b border-gray-100">
      <div className="text-center space-y-2 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          Our Proven <span className="text-[#1e6ef2]">Partnerships</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          Successful Collaborations With the <span className="text-[#1e6ef2]">Industry's Best</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="w-full flex items-center justify-center h-24 hover:scale-110 transition-all duration-300">
              <div className="relative group">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-20 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${client.name}&background=f0f7ff&color=1e6ef2&bold=true&length=2`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
