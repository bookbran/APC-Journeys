import React, { useRef, useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Printer, Download, Loader2 } from 'lucide-react';

export default function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    if (!printRef.current) return;
    setIsGenerating(true);

    try {
      // 1. Capture the DOM element as a high-res canvas
      const canvas = await html2canvas(printRef.current, {
        scale: 2, // Higher scale for better text clarity
        useCORS: true, // Needed for external images like the logo
        logging: false,
        backgroundColor: '#f6f7fc', // Match brand bg
      });

      // 2. Initialize PDF (Landscape Letter)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [11, 8.5] // Standard Letter Landscape
      });

      // 3. Add image to PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 11, 8.5);

      // 4. Save
      pdf.save('Portland-Career-Journey-Map.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-start py-8 px-4 font-sans">
      
      {/* Control Bar */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-8 bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700">
        <div>
          <h1 className="text-xl font-bold text-white">Career Journey Generator</h1>
          <p className="text-slate-400 text-sm">Previewing 11" x 8.5" Landscape Layout</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDownloadPdf}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {isGenerating ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Download size={18} />
            )}
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* Preview Area - Scaled down to fit screen if needed, but maintains aspect ratio */}
      <div className="relative overflow-auto max-w-full p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
        <div className="scale-[0.8] md:scale-100 origin-top transition-transform duration-300">
           {/* This component is what gets printed */}
           <JourneyMap ref={printRef} />
        </div>
      </div>

      <div className="mt-8 text-slate-500 text-sm">
        <p>Recommended: Use Chrome or Edge for best PDF generation results.</p>
      </div>

    </div>
  );
}