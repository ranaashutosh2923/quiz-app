import React, { useState, useRef } from 'react';
import Button from '../Common/Button';
import { generatePDFFromElement } from '../../utils/pdfExport';
import './ExportPDFButton.css';

const ExportPDFButton = ({ userEmail }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const reportRef = useRef(null);
  
  const handleExportPDF = async () => {
    setIsGenerating(true);
    
    try {
      // Find the report container element
      const reportElement = document.querySelector('.report-container');
      
      if (!reportElement) {
        throw new Error('Report element not found');
      }
      
      // Generate filename
      const timestamp = new Date().getTime();
      const emailPrefix = userEmail.split('@')[0];
      const fileName = `Quiz_Results_${emailPrefix}_${timestamp}.pdf`;
      
      // Generate PDF
      await generatePDFFromElement(reportElement, fileName);
      
      // Success - brief delay for UX
      setTimeout(() => {
        setIsGenerating(false);
      }, 500);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="export-pdf-container">
      <Button
        onClick={handleExportPDF}
        variant="secondary"
        disabled={isGenerating}
        className="export-pdf-btn"
      >
        {isGenerating ? (
          <>
            <span className="pdf-spinner"></span>
            Generating PDF...
          </>
        ) : (
          <>
            <span className="pdf-icon">📄</span>
            Download PDF Report
          </>
        )}
      </Button>
      <p className="export-hint">Save your results for future reference</p>
    </div>
  );
};

export default ExportPDFButton;