import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Users, Building2, Wallet, BadgeDollarSign, HelpCircle, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import InvitationForm from './components/InvitationForm';
import FAQ from './components/FAQ';
import BusinessAngels from './components/BusinessAngels';
import Partners from './components/Partners';
import logo from './contents/images/logo2.png';
import platform from './contents/images/our_platform.jpg';
import prospectus from './contents/document/document.pdf';

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(' ');

  return (
    <p className="text-gray-300" style={{ fontSize: '1.5rem' }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0"
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
            marginRight: '0.3em'
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      allRightsReserved: 'All rights reserved.',
      firstName: 'First Name',
      lastName: 'Last Name',
      nationality: 'Nationality',
      countryOfResidence: 'Country of Residence',
      profession: 'Profession',
      email: 'Email',
      phone: 'Phone',
      investmentAmount: 'Investment Amount',
      submit: 'Submit',
      error: 'Error',
      platformOffers: 'Platform Offers',
      goldenInvestment: 'Golden Investment',
      goldenDesc: 'Guaranteed annual returns of 18% to 21%',
      rockInvestment: 'Rock Investment',
      rockDesc: 'Opportunity to hold shares in large-scale projects in developing African countries',
      smeInvestment: 'SME Investment',
      smeDesc: 'Access to the most successful SMEs with a minimum valuation of five (5) million Swiss francs, equivalent to 3.5 billion CFA francs',
      primeInvestment: 'Prime Investment',
      primeDesc: 'Option to secure the purchase of a property worth more than the investment using guaranteed interest',
      quickLinks: 'Quick Links',
      joinPlatform: 'Join Our Platform',
      readyToRevolutionize: 'Ready to revolutionize your investment journey?',
      offers: 'Offers'
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
      allRightsReserved: 'Tous droits réservés.',
      firstName: 'Prénom',
      lastName: 'Nom',
      nationality: 'Nationalité',
      countryOfResidence: 'Pays de Résidence',
      profession: 'Profession',
      email: 'Email',
      phone: 'Téléphone',
      investmentAmount: 'Montant d\'investissement',
      submit: 'Soumettre',
      error: 'Erreur',
      platformOffers: 'Offres de la Plateforme',
      goldenInvestment: 'Golden Investment',
      goldenDesc: 'Rendements annuels garantis de 18% à 21%',
      rockInvestment: 'Rock Investment',
      rockDesc: 'Opportunité de détenir des parts dans des projets d\'envergure dans les pays africains en développement',
      smeInvestment: 'SME Investment',
      smeDesc: 'Accès aux PME les plus performantes avec une valorisation minimale de cinq (5) millions de francs suisses, soit 3,5 milliards de francs CFA',
      primeInvestment: 'Prime Investment',
      primeDesc: 'Option de garantir l\'achat d\'un bien immobilier d\'une valeur supérieure à l\'investissement grâce aux intérêts garantis',
      quickLinks: 'Liens Rapides',
      joinPlatform: 'Rejoignez Notre Plateforme',
      readyToRevolutionize: 'Prêt à révolutionner votre voyage d\'investissement ?',
      offers: 'Offres'
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
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img src={logo} alt="ISIC Platform Logo" className="h-12 w-auto sm:h-20" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-white">ISIC</span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Toggle */}
              <button
                className="nav-item text-sm sm:text-base px-2 sm:px-4"
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                style={{
                  animation: `slideIn 0.5s ease-out 0.7s forwards`
                }}
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>

              {/* Prospectus Download */}
              <a
                href={prospectus}
                download="ISIC_Prospectus.pdf"
                className="nav-item download-btn hidden sm:flex text-sm sm:text-base"
                style={{
                  animation: `slideIn 0.5s ease-out 0.8s forwards`
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                <span>{t.downloadProspectus}</span>
              </a>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-gray-300 hover:text-[#FFD700] transition-all duration-300 ml-2"
              >
                <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Vertical Navigation Menu */}
          <div
            className={`vertical-nav ${isNavOpen ? 'open' : ''} text-sm sm:text-base`}
          >
            {[
              { name: t.platform, id: 'platform' },
              { name: t.platformOffers, id: 'offers' },
              { name: t.economicSystem, id: 'system' },
              { name: t.partners, id: 'partners' },
              { name: t.businessAngels, id: 'angels' },
              { name: t.getInvited, id: 'invitation' }
            ].map((item, i) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsNavOpen(false);
                }}
                className="nav-item py-2 px-4"
                style={{
                  animation: isNavOpen ? `slideIn 0.5s ease-out ${i * 0.1}s forwards` : 'none'
                }}
              >
                {item.name}
              </button>
            ))}
            {/* Mobile-only download button */}
            <a
              href={prospectus}
              download="ISIC_Prospectus.pdf"
              className="nav-item download-btn sm:hidden mt-2"
            >
              <Download className="h-4 w-4 mr-2" />
              <span>{t.downloadProspectus}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center" style={{ background: 'linear-gradient(to bottom right, #1f2937, #111827, #FFD700)' }}>
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
              style={{ backgroundColor: '#FFD700' }}
            >
              {t.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section
        id="platform"
        className="py-20 bg-gray-800 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${platform})` }}
      >
        {/* Add an overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gray-800/75"></div>

        {/* Content with relative positioning to appear above the overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.ourPlatform}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 col-span-3">
              <AnimatedText
                text={language === 'fr'
                  ? "En tant que gestionnaire mondial d'actifs, notre objectif chez ISIC est d'aider chacun à améliorer son avenir financier, en faisant preuve de vigilance, de prudence vis-à-vis de nos membres. Grâce à notre système de placement alternatif et de couverture des risques (Mutan), nous présentons la meilleure offre en placements financiers sans risques."
                  : "As a global asset manager, our goal at ISIC is to help everyone improve their financial future, showing vigilance and prudence towards our members. Thanks to our alternative investment and risk hedging system (Mutan), we present the best offer in risk-free financial investments."
                }
              />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.platformOffers}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t.goldenInvestment,
                description: t.goldenDesc
              },
              {
                title: t.rockInvestment,
                description: t.rockDesc
              },
              {
                title: t.smeInvestment,
                description: t.smeDesc
              },
              {
                title: t.primeInvestment,
                description: t.primeDesc
              }
            ].map((offer, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700]">{offer.title}</h3>
                <p className="text-gray-300">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic System Section */}
      <section id="system" className="py-20 bg-gray-800">
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
                    <Building2 className="h-4 w-4" style={{ color: '#FFD700' }} />
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
      <section id="partners" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.financialPartners}</h2>
          <Partners language={language} t={t} />
        </div>
      </section>

      {/* Business Angels Section */}
      <section id="angels" className="py-20 bg-gray-800">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="flex items-center justify-center">
              <Users className="h-8 w-8 mr-2" style={{ color: '#FFD700' }} />
              {t.ourBusinessAngels}
            </span>
          </h2>
          <BusinessAngels language={language} t={t} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="flex items-center justify-center">
              <HelpCircle className="h-8 w-8 mr-2" style={{ color: '#FFD700' }} />
              {t.faq}
            </span>
          </h2>
          <FAQ language={language} t={t} />
        </div>
      </section>

      {/* Invitation Form Section */}
      <section id="invitation" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.requestInvitation}</h2>
          <InvitationForm language={language} t={t} />
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
              <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('platform')} className="text-gray-400 hover:text-white">{t.platform}</button></li>
                <li><button onClick={() => scrollToSection('offers')} className="text-gray-400 hover:text-white">{t.offers}</button></li>
                <li><button onClick={() => scrollToSection('partners')} className="text-gray-400 hover:text-white">{t.partners}</button></li>
                <li><button onClick={() => scrollToSection('angels')} className="text-gray-400 hover:text-white">{t.businessAngels}</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white">{t.faq}</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">{t.joinPlatform}</h3>
              <p className="text-gray-400 mb-4">{t.readyToRevolutionize}</p>
              <button onClick={() => scrollToSection('invitation')} className="inline-flex items-center px-6 py-3 bg-[#FFBF00] text-white rounded-lg hover:bg-[#E6AC00] transition-colors">
                {t.requestInvitation}
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hamburger-menu {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          cursor: pointer;
          padding: 0.25rem;
        }

        .bar {
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transition: all 0.3s;
        }

        .hamburger-menu.open .bar:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .hamburger-menu.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger-menu.open .bar:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        .vertical-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #1f2937;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(-1rem);
          pointer-events: none;
          transition: all 0.3s ease-in-out;
        }

        .vertical-nav.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .nav-item {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          color: #9ca3af;
          transition: all 0.3s;
          border-radius: 0.5rem;
          opacity: 0;
          transform: translateX(-1rem);
        }

        .nav-item:hover {
          color: #FFD700;
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateX(0.5rem);
        }

        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          background-color: #FFD700;
          color: #1f2937;
          text-decoration: none;
          border-radius: 0.5rem;
          transition: all 0.3s;
        }

        .download-btn:hover {
          background-color: #E6AC00;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default App;