import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { QrCodeIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ShareIcon } from '@heroicons/react/24/outline';
import Button from '../layouts/Button';

const QRConnect = () => {
  const [qrValue, setQrValue] = useState('https://wa.me/918593074903');
  const [customValue, setCustomValue] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const quickConnectOptions = [
    {
      label: 'WhatsApp Contact',
      value: 'https://wa.me/918593074903',
      icon: PhoneIcon,
      description: 'Connect via WhatsApp'
    },
    {
      label: 'Email Contact',
      value: 'mailto:info@camdesign.com',
      icon: EnvelopeIcon,
      description: 'Send us an email'
    },
    {
      label: 'Website',
      value: 'https://camdesigns.netlify.app/',
      icon: MapPinIcon,
      description: 'Visit our website'
    },
    {
      label: 'Phone Call',
      value: 'tel:+918593074903',
      icon: PhoneIcon,
      description: 'Call us directly'
    }
  ];

  const handleQuickConnect = (value) => {
    setQrValue(value);
    setShowCustomInput(false);
  };

  const handleCustomQR = () => {
    if (customValue.trim()) {
      setQrValue(customValue.trim());
      setShowCustomInput(false);
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-code');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'cam-design-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Emotrans - QR Connect',
          text: 'Connect with Emotrans Interior Solutions',
          url: qrValue
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(qrValue);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen  pt-32  bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full">
              <QrCodeIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QR Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with Emotrans instantly using QR codes. Scan to get in touch, 
            visit our website, or share our contact information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* QR Code Display */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your QR Code
            </h2>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 inline-block mb-6">
              <QRCode
                id="qr-code"
                value={qrValue}
                size={256}
                level="M"
                includeMargin={true}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 break-all">
                {qrValue}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={downloadQR}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download QR
                </button>
                
                <button
                  onClick={shareQR}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ShareIcon className="w-5 h-5" />
                  Share
                </button>
                
                {/* <button
                  onClick={() => window.open(qrValue, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Test Link
                </button> */}
              </div>
            </div>
          </div>

          {/* Quick Connect Options */}
          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Quick Connect Options
              </h2>
              
              <div className="space-y-4">
                {quickConnectOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickConnect(option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      qrValue === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        qrValue === option.value ? 'bg-orange-500' : 'bg-gray-100'
                      }`}>
                        <option.icon className={`h-6 w-6 ${
                          qrValue === option.value ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          qrValue === option.value ? 'text-orange-700' : 'text-gray-900'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom QR Code */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Custom QR Code
              </h2>
              
              {!showCustomInput ? (
                <button
                  onClick={() => setShowCustomInput(true)}
                  className="w-full p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-orange-300 hover:bg-gray-50 transition-all duration-200 text-gray-600"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Custom QR Code
                  </div>
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter URL or Text
                    </label>
                    <input
                      type="text"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      placeholder="https://example.com or any text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCustomQR}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      Generate QR
                    </button>
                    <button
                      onClick={() => {
                        setShowCustomInput(false);
                        setCustomValue('');
                      }}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div 
              className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                How to Use
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Select a quick connect option or create a custom QR code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Download the QR code or share it directly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Others can scan the QR code to connect with you instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRConnect;
