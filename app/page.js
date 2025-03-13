import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - More futuristic with animated gradient */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-black animate-gradient-x"></div>
        
        {/* Subtle grid overlay instead of circular patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-black/80 rounded-full px-4 py-1">
              <span className="text-white text-sm font-medium">{`Innovating for Zimbabwe's Future`}</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sabhuku Corporation</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Pioneering Innovation Across Multiple Sectors in Zimbabwe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Discover Our Vision
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Business Pillars Section */}
      <section className="py-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        {/* Watermark background */}
        <div className="absolute inset-0 opacity-[0.05] z-0">
          <Image
            src="/images/logo.png"
            alt="Watermark"
            fill
            className="object-contain"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-600 font-medium">OUR COMPANIES</span>
              <span className="h-1 w-10 bg-blue-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Business Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation and excellence across multiple sectors to build a stronger Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Kurapa Healthcare',
                description: 'Innovative healthcare solutions for a healthier Zimbabwe',
                href: '/companies/kurapa-healthcare',
                color: 'from-blue-500 to-blue-700',
                logo: '/images/kurapa.png'
              },
              {
                title: 'Kudyara Agriculture',
                description: 'Sustainable farming practices for food security',
                href: '/companies/kudyara-agriculture',
                color: 'from-green-500 to-green-700',
                logo: '/images/kudyara.png'
              },
              {
                title: 'Kuvhakacha Living',
                description: 'Modern living spaces for contemporary lifestyles',
                href: '/companies/kuvhakacha-living',
                color: 'from-orange-500 to-orange-700',
                logo: '/images/kuvhakacha.png'
              },
              {
                title: 'Kuenda Green',
                description: 'Eco-friendly solutions for a sustainable future',
                href: '/companies/kuenda-green',
                color: 'from-emerald-500 to-emerald-700',
                logo: '/images/kuenda.png'
              }
            ].map((pillar, index) => (
              <Link
                key={index}
                href={pillar.href}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-6 bg-white flex-grow flex flex-col">
                  <div className="mb-4 p-3 rounded-xl bg-gray-50 w-full h-32 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={pillar.logo}
                        alt={`${pillar.title} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {pillar.description}
                  </p>
                  <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center mt-2">
                    Visit
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Zebra Pattern Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Zebra pattern background with animation */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i} 
              className={`absolute h-[4vh] w-full ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`} 
              style={{ 
                top: `${i * 4}vh`,
                animation: `slideIn 1.5s ease-out ${i * 0.1}s both`,
                transform: 'skewY(-5deg)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Content overlay with improved styling */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-blue-600 rounded-full mr-2"></span>
                <span className="text-blue-600 font-medium">OUR HERITAGE</span>
                <span className="h-1 w-10 bg-blue-600 rounded-full ml-2"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our African Heritage
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Proudly Zimbabwean, we draw inspiration from our rich cultural heritage while embracing innovation and technology to build a brighter future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Local Expertise',
                  description: "Our team combines deep local knowledge with global best practices to deliver solutions tailored to Zimbabwe's unique needs.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: 'Sustainable Growth',
                  description: "We're committed to sustainable development that benefits communities while preserving our natural resources for future generations.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Innovation Focus',
                  description: "By embracing cutting-edge technologies, we're helping Zimbabwe leapfrog into a more prosperous and connected future.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        {/* Futuristic grid overlay with animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="h-1 w-10 bg-white/50 rounded-full mr-2"></span>
            <span className="text-white/80 font-medium">JOIN OUR MISSION</span>
            <span className="h-1 w-10 bg-white/50 rounded-full ml-2"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Discover opportunities to work with us, invest in our vision, or learn more about our companies. Together, we can build a stronger Zimbabwe.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/work-with-us"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-blue-500/50"
            >
              Join Our Team
            </Link>
            <Link
              href="/invest"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Investment Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
