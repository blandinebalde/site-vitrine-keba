import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Users, Building2, Wallet, BadgeDollarSign, HelpCircle, ArrowRight } from 'lucide-react';
import InvitationForm from './components/InvitationForm';
import FAQ from './components/FAQ';
import BusinessAngels from './components/BusinessAngels';
import Partners from './components/Partners';
import logo from './contents/images/logo2.png';
import prospectus from './contents/document/document.pdf';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      platform: 'Platform',
      economicSystem: 'Economic System',
      partners: 'Partners',
      businessAngels: 'Business Angels',
      getInvited: 'Get Invited',
      downloadProspectus: 'Prospectus',
      heroTitle: 'Revolutionizing Investment Management',
      heroSubtitle: 'Join our exclusive platform connecting visionary investors with exceptional opportunities',
      learnMore: 'Learn More',
      ourPlatform: 'Our Platform',
      smartInvestment: 'Smart Investment',
      smartInvestmentDesc: 'Advanced algorithms and expert analysis for optimal investment decisions',
      economicSystemTitle: 'Economic System',
      fundManagement: 'Fund Management',
      fundManagementDesc: 'Our sophisticated economic system is designed to maximize returns while minimizing risks through:',
      portfolioManagement: 'Professional portfolio management',
      financialPartners: 'Financial Partners',
      ourBusinessAngels: 'Our Business Angels',
      faq: 'Frequently Asked Questions',
      requestInvitation: 'Request an Invitation',
      footerDesc: 'Transforming investment management through innovation',
      allRightsReserved: 'All rights reserved.'
    },
    fr: {
      platform: 'Plateforme',
      economicSystem: 'Système Économique',
      partners: 'Partenaires',
      businessAngels: 'Business Angels',
      getInvited: 'Obtenir une Invitation',
      downloadProspectus: 'Prospectus',
      heroTitle: 'Révolutionner la Gestion des Investissements',
      heroSubtitle: 'Rejoignez notre plateforme exclusive qui connecte les investisseurs visionnaires aux opportunités exceptionnelles',
      learnMore: 'En Savoir Plus',
      ourPlatform: 'Notre Plateforme',
      smartInvestment: 'Investissement Intelligent',
      smartInvestmentDesc: 'Algorithmes avancés et analyse d\'experts pour des décisions d\'investissement optimales',
      economicSystemTitle: 'Système Économique',
      fundManagement: 'Gestion des Fonds',
      fundManagementDesc: 'Notre système économique sophistiqué est conçu pour maximiser les rendements tout en minimisant les risques grâce à :',
      portfolioManagement: 'Gestion professionnelle de portefeuille',
      financialPartners: 'Partenaires Financiers',
      ourBusinessAngels: 'Nos Business Angels',
      faq: 'Questions Fréquentes',
      requestInvitation: 'Demander une Invitation',
      footerDesc: 'Transformer la gestion des investissements par l\'innovation',
      allRightsReserved: 'Tous droits réservés.'
    }
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav
        className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300"
        style={{
          boxShadow: `rgba(0, 0, 0, ${Math.min(scrollY / 100, 0.1)}) 0px 4px 12px`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img src={logo} alt="ISIC Platform Logo" className="h-20 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">ISIC Platform</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { name: t.platform, id: 'platform' },
                { name: t.economicSystem, id: 'system' },
                { name: t.partners, id: 'partners' },
                { name: t.businessAngels, id: 'angels' },
                { name: t.getInvited, id: 'invitation' }
              ].map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-[#FFBF00] relative transition-all duration-300 hover:scale-110"
                  style={{
                    animation: `fadeInDown 0.5s ease-out ${i * 0.1}s both`
                  }}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="text-gray-300 hover:text-[#FFBF00] relative transition-all duration-300 hover:scale-110"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>

            <a
              href={prospectus}
              download="ISIC_Prospectus.pdf"
              className="px-4 py-2 rounded-lg hidden md:flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#FFBF00' }}
            >
              <Download className="h-4 w-4 mr-2 text-white" />
              <span className="text-white">{t.downloadProspectus}</span>
            </a>

            <button
              className="md:hidden transition-transform duration-300 active:scale-90 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 w-full bg-gray-800 shadow-lg md:hidden z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 py-2 space-y-2">
          {[
            { name: t.platform, id: 'platform' },
            { name: t.economicSystem, id: 'system' },
            { name: t.partners, id: 'partners' },
            { name: t.businessAngels, id: 'angels' },
            { name: t.getInvited, id: 'invitation' }
          ].map((item, i) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300 hover:translate-x-2"
              style={{
                animation: isMenuOpen ? `slideIn 0.3s ease-out ${i * 0.1}s both` : 'none'
              }}
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300 hover:translate-x-2"
          >
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center" style={{ background: 'linear-gradient(to bottom right, #1f2937, #111827, #FFBF00)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-0 translate-y-10" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
            <h1 className="text-5xl font-bold text-white mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
            <button
              onClick={() => scrollToSection('platform')}
              className="text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center mx-auto"
              style={{ backgroundColor: '#FFBF00' }}
            >
              {t.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.ourPlatform}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF5D6' }}>
                <BadgeDollarSign className="h-6 w-6" style={{ color: '#FFBF00' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t.smartInvestment}</h3>
              <p className="text-gray-300">{t.smartInvestmentDesc}</p>
            </div>
            {/* Add more features */}
          </div>
        </div>
      </section>

      {/* Economic System Section */}
      <section id="system" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.economicSystemTitle}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{t.fundManagement}</h3>
              <p className="text-gray-300 mb-6">
                {t.fundManagementDesc}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start transition-transform duration-300 hover:translate-x-2 text-gray-300">
                  <span className="p-1 rounded mr-3 mt-1" style={{ backgroundColor: '#FFF5D6' }}>
                    <Building2 className="h-4 w-4" style={{ color: '#FFBF00' }} />
                  </span>
                  <span>{t.portfolioManagement}</span>
                </li>
                {/* Add more points */}
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              {/* Add fund manager profiles or statistics */}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.financialPartners}</h2>
          <Partners t={t} />
        </div>
      </section>

      {/* Business Angels Section */}
      <section id="angels" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.ourBusinessAngels}</h2>
          <BusinessAngels t={t} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="flex items-center justify-center">
              <HelpCircle className="h-8 w-8 mr-2" style={{ color: '#FFBF00' }} />
              {t.faq}
            </span>
          </h2>
          <FAQ language={language} t={t} />
        </div>
      </section>

      {/* Invitation Form Section */}
      <section id="invitation" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.requestInvitation}</h2>
          <InvitationForm t={t} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <img src={logo} alt="ISIC Platform Logo" className="h-20 w-auto" />
                <span className="ml-2 text-lg font-bold">ISIC Platform</span>
              </div>
              <p className="text-gray-400">{t.footerDesc}</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('platform')} className="text-gray-400 hover:text-white">Platform</button></li>
                <li><button onClick={() => scrollToSection('partners')} className="text-gray-400 hover:text-white">Partners</button></li>
                <li><button onClick={() => scrollToSection('angels')} className="text-gray-400 hover:text-white">Business Angels</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Join Our Platform</h3>
              <p className="text-gray-400 mb-4">Ready to revolutionize your investment journey?</p>
              <button onClick={() => scrollToSection('invitation')} className="inline-flex items-center px-6 py-3 bg-[#FFBF00] text-white rounded-lg hover:bg-[#E6AC00] transition-colors">
                Request Invitation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} ISIC Platform. {t.allRightsReserved}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;