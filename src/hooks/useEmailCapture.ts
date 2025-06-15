import { useState } from 'react';
import { EmailCaptureService } from '../services/emailCaptureService';

export const useEmailCapture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentResource, setCurrentResource] = useState('');
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');
  const [currentPdfName, setCurrentPdfName] = useState('');

  const openModal = (title: string, pdfUrl: string, pdfName: string) => {
    setCurrentResource(title);
    setCurrentPdfUrl(pdfUrl);
    setCurrentPdfName(pdfName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentResource('');
    setCurrentPdfUrl('');
    setCurrentPdfName('');
  };

  const handleEmailSubmit = async (email: string) => {
    setIsLoading(true);

    try {
      console.log('Starting email capture process...');
      console.log('Email:', email);
      console.log('PDF Name:', currentPdfName);
      console.log('PDF Title:', currentResource);

      // Test Supabase connection first
      const connectionTest = await EmailCaptureService.testConnection();
      console.log('Supabase connection test result:', connectionTest);

      // Store email capture in Supabase (if configured)
      const captureResult = await EmailCaptureService.captureEmail({
        email: email.trim(),
        pdf_name: currentPdfName,
        pdf_title: currentResource
      });

      console.log('Email capture result:', captureResult);

      // Start PDF download
      const link = document.createElement('a');
      link.href = currentPdfUrl;
      link.download = currentPdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('PDF download initiated');

      // Close modal after successful download
      setTimeout(() => {
        closeModal();
      }, 1000);

    } catch (error) {
      console.error('Error in email capture:', error);
      alert(`Error in email capture: ${error.message}`);
      
      // Still allow download even if capture fails
      const link = document.createElement('a');
      link.href = currentPdfUrl;
      link.download = currentPdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      closeModal();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isModalOpen,
    isLoading,
    currentResource,
    openModal,
    closeModal,
    handleEmailSubmit
  };
};