import React, { useState } from 'react';
import { Upload, CircleDollarSign, Wallet, CreditCard, BadgeDollarSign, DollarSign, Banknote, Coins } from 'lucide-react';
import InvestorStatus from './InvestorStatus';

interface InvitationFormProps {
  language: 'en' | 'fr';

  t: {
    requestInvitation: string;
    [key: string]: string;
  };
}

const translations = {
  en: {
    requestInvitation: 'Request an Invitation',
    firstName: 'First Name',
    lastName: 'Last Name',
    nationality: 'Nationality',
    countryOfResidence: 'Country of Residence',
    profession: 'Professional Activity',
    email: 'Email Address',
    phone: 'Phone Number',
    investmentAmount: 'Investment Amount ($)',
    proofOfFunds: 'Proof of Funds',
    selectCountry: 'Select a country',
    professionalActivity: 'Professional Activity',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    countryCode: 'Code',
    uploadFile: 'Upload a file',
    dragAndDrop: 'or drag and drop',
    fileTypes: 'PDF, DOC, DOCX, JPG up to 10MB',
    cancel: 'Cancel',
    submit: 'Submit Request',
    success: 'Your request has been submitted successfully!',
    error: 'There was an error submitting your request. Please try again.',
    investorStatus: 'Investor Status',
    selectStatus: 'Select Status',
    categoryA: 'Category A ($50k - $100k)',
    categoryB: 'Category B ($100k - $250k)',
    categoryC: 'Category C ($250k - $500k)',
    categoryD: 'Category D ($500k - $750k)',
    categoryE: 'Category E ($750k - $1M)',
    categoryF: 'Category F ($1M - $3M)',
    categoryG: 'Category G ($3M - $5M)',
  },
  fr: {
    requestInvitation: 'Demander une invitation',
    firstName: 'Prénom',
    lastName: 'Nom',
    nationality: 'Nationalité',
    countryOfResidence: 'Pays de résidence',
    profession: 'Activité professionnelle',
    email: 'Adresse email',
    phone: 'Numéro de téléphone',
    investmentAmount: 'Montant de l\'investissement ($)',
    proofOfFunds: 'Preuve de fonds',
    selectCountry: 'Sélectionnez un pays',
    professionalActivity: 'Activité professionnelle',
    emailAddress: 'Adresse email',
    phoneNumber: 'Numéro de téléphone',
    countryCode: 'Code',
    uploadFile: 'Télécharger un fichier',
    dragAndDrop: 'ou glisser-déposer',
    fileTypes: 'PDF, DOC, DOCX, JPG jusqu\'à 10MB',
    cancel: 'Annuler',
    submit: 'Envoyer la demande',
    success: 'Votre demande a été soumise avec succès !',
    error: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.',
    investorStatus: 'Statut d\'investisseur',
    selectStatus: 'Sélectionner le statut',
    categoryA: 'Catégorie A (50k$ - 100k$)',
    categoryB: 'Catégorie B (100k$ - 250k$)',
    categoryC: 'Catégorie C (250k$ - 500k$)',
    categoryD: 'Catégorie D (500k$ - 750k$)',
    categoryE: 'Catégorie E (750k$ - 1M$)',
    categoryF: 'Catégorie F (1M$ - 3M$)',
    categoryG: 'Catégorie G (3M$ - 5M$)',
  }
};

const investorStatusOptions = [
  {
    category: 'A',
    icon: <CircleDollarSign className="h-8 w-8 text-bronze" />,
    range: '$50k - $100k',
    rangeFr: '50k$ - 100k$',
    mrp: '$10k',
    membership: '$5k'
  },
  {
    category: 'B',
    icon: <Wallet className="h-8 w-8 text-silver" />,
    range: '$100k - $250k',
    rangeFr: '100k$ - 250k$',
    mrp: '$20k',
    membership: '$10k'
  },
  {
    category: 'C',
    icon: <CreditCard className="h-8 w-8 text-gold" />,
    range: '$250k - $500k',
    rangeFr: '250k$ - 500k$',
    mrp: '$30k',
    membership: '$20k'
  },
  {
    category: 'D',
    icon: <BadgeDollarSign className="h-8 w-8 text-platinum" />,
    range: '$500k - $750k',
    rangeFr: '500k$ - 750k$',
    mrp: '$40k',
    membership: '$25k'
  },
  {
    category: 'E',
    icon: <DollarSign className="h-8 w-8 text-diamond" />,
    range: '$750k - $1M',
    rangeFr: '750k$ - 1M$',
    mrp: '$50k',
    membership: '$30k'
  },
  {
    category: 'F',
    icon: <Banknote className="h-8 w-8 text-elite" />,
    range: '$1M - $3M',
    rangeFr: '1M$ - 3M$',
    mrp: '$150k',
    membership: '$30k'
  },
  {
    category: 'G',
    icon: <Coins className="h-8 w-8 text-premium" />,
    range: '$3M - $5M',
    rangeFr: '3M$ - 5M$',
    mrp: '$300k',
    membership: '$30k'
  }
];

const InvitationForm: React.FC<InvitationFormProps> = ({ language, t }) => {
  const [showForm, setShowForm] = useState(false);
  const initialFormData = {
    firstName: '',
    lastName: '',
    nationality: '',
    countryOfResidence: '',
    profession: '',
    email: '',
    countryCode: '',
    phone: '',
    investmentAmount: '',
    investorStatus: '',
    proofOfFunds: null as File | null,
  };
  const [formData, setFormData] = useState(initialFormData);

  const africanCountries = [
    { code: 'DZ', name: 'Algeria', flag: '/flags/dz.png', phoneCode: '+213', digits: 9 },
    { code: 'AO', name: 'Angola', flag: '/flags/ao.png', phoneCode: '+244', digits: 9 },
    { code: 'BJ', name: 'Benin', flag: '/flags/bj.png', phoneCode: '+229', digits: 8 },
    { code: 'BW', name: 'Botswana', flag: '/flags/bw.png', phoneCode: '+267', digits: 8 },
    { code: 'BF', name: 'Burkina Faso', flag: '/flags/bf.png', phoneCode: '+226', digits: 8 },
    { code: 'BI', name: 'Burundi', flag: '/flags/bi.png', phoneCode: '+257', digits: 8 },
    { code: 'CM', name: 'Cameroon', flag: '/flags/cm.png', phoneCode: '+237', digits: 9 },
    { code: 'CV', name: 'Cape Verde', flag: '/flags/cv.png', phoneCode: '+238', digits: 7 },
    { code: 'CF', name: 'Central African Republic', flag: '/flags/cf.png', phoneCode: '+236', digits: 8 },
    { code: 'TD', name: 'Chad', flag: '/flags/td.png', phoneCode: '+235', digits: 8 },
    { code: 'KM', name: 'Comoros', flag: '/flags/km.png', phoneCode: '+269', digits: 7 },
    { code: 'CG', name: 'Congo', flag: '/flags/cg.png', phoneCode: '+242', digits: 9 },
    { code: 'CD', name: 'DR Congo', flag: '/flags/cd.png', phoneCode: '+243', digits: 9 },
    { code: 'DJ', name: 'Djibouti', flag: '/flags/dj.png', phoneCode: '+253', digits: 8 },
    { code: 'EG', name: 'Egypt', flag: '/flags/eg.png', phoneCode: '+20', digits: 10 },
    { code: 'GQ', name: 'Equatorial Guinea', flag: '/flags/gq.png', phoneCode: '+240', digits: 9 },
    { code: 'ER', name: 'Eritrea', flag: '/flags/er.png', phoneCode: '+291', digits: 7 },
    { code: 'ET', name: 'Ethiopia', flag: '/flags/et.png', phoneCode: '+251', digits: 9 },
    { code: 'GA', name: 'Gabon', flag: '/flags/ga.png', phoneCode: '+241', digits: 8 },
    { code: 'GM', name: 'Gambia', flag: '/flags/gm.png', phoneCode: '+220', digits: 7 },
    { code: 'GH', name: 'Ghana', flag: '/flags/gh.png', phoneCode: '+233', digits: 9 },
    { code: 'GN', name: 'Guinea', flag: '/flags/gn.png', phoneCode: '+224', digits: 9 },
    { code: 'GW', name: 'Guinea-Bissau', flag: '/flags/gw.png', phoneCode: '+245', digits: 7 },
    { code: 'CI', name: 'Ivory Coast', flag: '/flags/ci.png', phoneCode: '+225', digits: 8 },
    { code: 'KE', name: 'Kenya', flag: '/flags/ke.png', phoneCode: '+254', digits: 9 },
    { code: 'LS', name: 'Lesotho', flag: '/flags/ls.png', phoneCode: '+266', digits: 8 },
    { code: 'LR', name: 'Liberia', flag: '/flags/lr.png', phoneCode: '+231', digits: 8 },
    { code: 'LY', name: 'Libya', flag: '/flags/ly.png', phoneCode: '+218', digits: 9 },
    { code: 'MG', name: 'Madagascar', flag: '/flags/mg.png', phoneCode: '+261', digits: 9 },
    { code: 'MW', name: 'Malawi', flag: '/flags/mw.png', phoneCode: '+265', digits: 9 },
    { code: 'ML', name: 'Mali', flag: '/flags/ml.png', phoneCode: '+223', digits: 8 },
    { code: 'MR', name: 'Mauritania', flag: '/flags/mr.png', phoneCode: '+222', digits: 8 },
    { code: 'MU', name: 'Mauritius', flag: '/flags/mu.png', phoneCode: '+230', digits: 8 },
    { code: 'MA', name: 'Morocco', flag: '/flags/ma.png', phoneCode: '+212', digits: 9 },
    { code: 'MZ', name: 'Mozambique', flag: '/flags/mz.png', phoneCode: '+258', digits: 9 },
    { code: 'NA', name: 'Namibia', flag: '/flags/na.png', phoneCode: '+264', digits: 9 },
    { code: 'NE', name: 'Niger', flag: '/flags/ne.png', phoneCode: '+227', digits: 8 },
    { code: 'NG', name: 'Nigeria', flag: '/flags/ng.png', phoneCode: '+234', digits: 10 },
    { code: 'RW', name: 'Rwanda', flag: '/flags/rw.png', phoneCode: '+250', digits: 9 },
    { code: 'ST', name: 'São Tomé and Príncipe', flag: '/flags/st.png', phoneCode: '+239', digits: 7 },
    { code: 'SN', name: 'Senegal', flag: '/flags/sn.png', phoneCode: '+221', digits: 9 },
    { code: 'SC', name: 'Seychelles', flag: '/flags/sc.png', phoneCode: '+248', digits: 7 },
    { code: 'SL', name: 'Sierra Leone', flag: '/flags/sl.png', phoneCode: '+232', digits: 8 },
    { code: 'SO', name: 'Somalia', flag: '/flags/so.png', phoneCode: '+252', digits: 8 },
    { code: 'ZA', name: 'South Africa', flag: '/flags/za.png', phoneCode: '+27', digits: 9 },
    { code: 'SS', name: 'South Sudan', flag: '/flags/ss.png', phoneCode: '+211', digits: 9 },
    { code: 'SD', name: 'Sudan', flag: '/flags/sd.png', phoneCode: '+249', digits: 9 },
    { code: 'SZ', name: 'Eswatini', flag: '/flags/sz.png', phoneCode: '+268', digits: 8 },
    { code: 'TZ', name: 'Tanzania', flag: '/flags/tz.png', phoneCode: '+255', digits: 9 },
    { code: 'TG', name: 'Togo', flag: '/flags/tg.png', phoneCode: '+228', digits: 8 },
    { code: 'TN', name: 'Tunisia', flag: '/flags/tn.png', phoneCode: '+216', digits: 8 },
    { code: 'UG', name: 'Uganda', flag: '/flags/ug.png', phoneCode: '+256', digits: 9 },
    { code: 'ZM', name: 'Zambia', flag: '/flags/zm.png', phoneCode: '+260', digits: 9 },
    { code: 'ZW', name: 'Zimbabwe', flag: '/flags/zw.png', phoneCode: '+263', digits: 9 }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('nationality', africanCountries.find(c => c.code === formData.nationality)?.name || '');
    formDataToSend.append('countryOfResidence', africanCountries.find(c => c.code === formData.countryOfResidence)?.name || '');
    formDataToSend.append('profession', formData.profession);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', `${formData.countryCode}${formData.phone}`);
    formDataToSend.append('investorStatus', formData.investorStatus);
    if (formData.proofOfFunds) {
      formDataToSend.append('proofOfFunds', formData.proofOfFunds);
    }

    try {
      const response = await fetch('/api/send-investment-request', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormData(initialFormData);
      setShowForm(false);
      alert(translations[language].success);

    } catch (error) {
      console.error('Error sending request:', error);
      alert(translations[language].error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, proofOfFunds: e.target.files[0] });
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const selectedCountry = africanCountries.find(country => country.phoneCode === formData.countryCode);
    if (selectedCountry) {
      const limitedValue = value.slice(0, selectedCountry.digits);
      setFormData({ ...formData, phone: limitedValue });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {translations[language].requestInvitation}
        </button>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].firstName}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].lastName}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].nationality}</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                >
                  <option value="">{translations[language].selectCountry}</option>
                  {africanCountries.map((country) => (
                    <option key={country.code} value={country.code} className="flex items-center">
                      <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].countryOfResidence}</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.countryOfResidence}
                  onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                >
                  <option value="">{translations[language].selectCountry}</option>
                  {africanCountries.map((country) => (
                    <option key={country.code} value={country.code} className="flex items-center">
                      <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].professionalActivity}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].emailAddress}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].phoneNumber}</label>
                <div className="flex gap-2">
                  <select
                    required
                    className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value, phone: '' })}
                  >
                    <option value="">{translations[language].countryCode}</option>
                    {africanCountries.map((country) => (
                      <option key={country.code} value={country.phoneCode}>
                        {country.phoneCode} ({country.name})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder={`${formData.countryCode ? africanCountries.find(c => c.phoneCode === formData.countryCode)?.digits + ' digits' : translations[language].selectCountry}`}
                    className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={!formData.countryCode}
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {translations[language].investorStatus}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {investorStatusOptions.map((status) => (
                    <div
                      key={status.category}
                      className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${formData.investorStatus === status.category
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                        }`}
                      onClick={() => setFormData({ ...formData, investorStatus: status.category })}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        {status.icon}
                        <h3 className="font-semibold">
                          {language === 'en' ? `Category ${status.category}` : `Catégorie ${status.category}`}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {language === 'en' ? status.range : status.rangeFr}
                        </p>
                        <p className="text-xs text-gray-500">
                          MRP: {status.mrp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">{translations[language].proofOfFunds}</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>{translations[language].uploadFile}</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </label>
                    <p className="pl-1">{translations[language].dragAndDrop}</p>
                  </div>
                  <p className="text-xs text-gray-500">{translations[language].fileTypes}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="w-1/2 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                {translations[language].cancel}
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {translations[language].submit}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default InvitationForm;