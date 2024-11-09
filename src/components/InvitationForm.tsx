import React, { useState } from 'react';
import { Upload } from 'lucide-react';

// Add this interface at the top of InvitationForm.tsx
interface InvitationFormProps {
  t: {
    // Add the specific translation keys you use in InvitationForm
    requestInvitation: string;
    // ... other translation keys used in the component
  };
}

// Update your component definition
const InvitationForm: React.FC<InvitationFormProps> = () => {
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

    // Create form data object to send
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('nationality', africanCountries.find(c => c.code === formData.nationality)?.name || '');
    formDataToSend.append('countryOfResidence', africanCountries.find(c => c.code === formData.countryOfResidence)?.name || '');
    formDataToSend.append('profession', formData.profession);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', `${formData.countryCode}${formData.phone}`);
    formDataToSend.append('investmentAmount', formData.investmentAmount);
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

      // Reset form
      setFormData(initialFormData);
      setShowForm(false);
      alert('Your request has been submitted successfully!');

    } catch (error) {
      console.error('Error sending request:', error);
      alert('There was an error submitting your request. Please try again.');
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
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const selectedCountry = africanCountries.find(country => country.phoneCode === formData.countryCode);
    if (selectedCountry) {
      // Limit the phone number to the country's digit requirement
      const limitedValue = value.slice(0, selectedCountry.digits);
      setFormData({ ...formData, phone: limitedValue });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Request an Invitation
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              >
                <option value="">Select a country</option>
                {africanCountries.map((country) => (
                  <option key={country.code} value={country.code} className="flex items-center">
                    <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country of Residence</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.countryOfResidence}
                onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
              >
                <option value="">Select a country</option>
                {africanCountries.map((country) => (
                  <option key={country.code} value={country.code} className="flex items-center">
                    <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Activity</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="flex gap-2">
                <select
                  required
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value, phone: '' })}
                >
                  <option value="">Code</option>
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
                  placeholder={`${formData.countryCode ? africanCountries.find(c => c.phoneCode === formData.countryCode)?.digits + ' digits' : 'Select country code'}`}
                  className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  disabled={!formData.countryCode}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount ($)</label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.investmentAmount}
                onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Proof of Funds</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InvitationForm;