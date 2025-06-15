import React, { useState } from 'react';
import { X, Download, Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  resourceTitle: string;
  isLoading?: boolean;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  resourceTitle,
  isLoading = false
}) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    
    setIsValidEmail(true);
    onSubmit(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isValidEmail && validateEmail(e.target.value)) {
      setIsValidEmail(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-gray">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-tech-green rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-deep-charcoal font-inter">
              Download Resource
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-light-gray rounded-lg transition-colors duration-200"
            disabled={isLoading}
          >
            <X className="w-5 h-5 text-cool-gray" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-deep-charcoal mb-2">
              {resourceTitle}
            </h4>
            <p className="text-cool-gray">
              Enter your email address to download this resource. We'll also send you 
              updates about our latest AI insights and resources.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-deep-charcoal font-medium mb-2">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  disabled={isLoading}
                  className={`w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-green focus:border-transparent transition-all duration-200 ${
                    !isValidEmail ? 'border-red-500' : 'border-light-gray'
                  } ${isLoading ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="your.email@company.com"
                />
                <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  !isValidEmail ? 'text-red-500' : 'text-cool-gray'
                }`} />
              </div>
              {!isValidEmail && (
                <div className="flex items-center space-x-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-500 text-sm">Please enter a valid email address</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 px-6 py-3 border-2 border-light-gray text-cool-gray rounded-lg hover:bg-light-gray transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || !email}
                className="flex-1 bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-soft-mint rounded-lg">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-tech-green mt-0.5 flex-shrink-0" />
              <div className="text-sm text-deep-charcoal">
                <strong>Privacy Protected:</strong> We respect your privacy and will never share 
                your email with third parties. You can unsubscribe at any time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;