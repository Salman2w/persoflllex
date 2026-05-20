import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Eye, 
  Shield, 
  Award, 
  Building2, 
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  X,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface Document {
  id: string;
  title: string;
  description: string;
  category: 'legal' | 'certificate' | 'privacy';
  icon: React.ElementType;
  filePath: string;
  fileSize: string;
  lastUpdated: string;
}

const documents: Document[] = [
  {
    id: 'datenschutz',
    title: 'Datenschutzerklarung',
    description: 'Unsere vollstandige Datenschutzerklarung gemas DSGVO. Hier erfahren Sie, wie wir Ihre personenbezogenen Daten verarbeiten und schutzen.',
    category: 'privacy',
    icon: Shield,
    filePath: '/downloads/datenschutzerklaerung.pdf',
    fileSize: '245 KB',
    lastUpdated: 'März 2025'
  },
  {
    id: 'finanzamt',
    title: 'Bescheinigung in Steuersachen',
    description: 'Offizielle Bescheinigung des Finanzamts Pforzheim über die steuerliche Führung der PersoFlex GmbH. Nachweis über ordnungsgemäß abgeführte Steuern.',
    category: 'certificate',
    icon: Building2,
    filePath: '/downloads/finanzamt-bescheinigung.pdf',
    fileSize: '156 KB',
    lastUpdated: 'Dezember 2025'
  },
  {
    id: 'vbg',
    title: 'Unbedenklichkeitsbescheinigung VBG',
    description: 'Bescheinigung der Verwaltungs-Berufsgenossenschaft (VBG) über die ordnungsgemäße Beitragszahlung zur gesetzlichen Unfallversicherung.',
    category: 'certificate',
    icon: Award,
    filePath: '/downloads/unbedenklichkeitsbescheinigung-vbg.pdf',
    fileSize: '189 KB',
    lastUpdated: 'Januar 2025'
  }
];

const categoryLabels = {
  legal: { label: 'Rechtliches', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  certificate: { label: 'Zertifikat', color: 'bg-green-100 text-green-700 border-green-200' },
  privacy: { label: 'Datenschutz', color: 'bg-purple-100 text-purple-700 border-purple-200' }
};

export const Downloads: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = (doc: Document) => {
    setSelectedDocument(doc);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setSelectedDocument(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Downloads - PersoFlex GmbH Dokumente"
        description="Wichtige Dokumente: Datenschutzerklärung, Zertifikate und Bescheinigungen."
        keywords="Downloads, Datenschutzerklärung, Zertifikate"
        canonicalUrl="https://www.persoflex-gmbh.de/downloads"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-orange-500 transition-colors">Startseite</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/unternehmen" className="hover:text-orange-500 transition-colors">Fur Unternehmen</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Downloads</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <FileText className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">Dokumente & Zertifikate</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Downloads & <span className="text-orange-500">Dokumente</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hier finden Sie alle wichtigen Dokumente der PersoFlex GmbH zum Herunterladen. 
              Transparenz und Vertrauen sind uns wichtig - daher stellen wir Ihnen unsere 
              Zertifikate und rechtlichen Dokumente offentlich zur Verfugung.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">GVP Mitglied</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">AUG Erlaubnis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Tarifgebunden</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">DSGVO konform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryLabels[doc.category].color}`}>
                    {categoryLabels[doc.category].label}
                  </span>
                  <span className="text-xs text-gray-400">{doc.lastUpdated}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <doc.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{doc.description}</p>

                {/* File Info */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    PDF
                  </span>
                  <span>{doc.fileSize}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openViewer(doc)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-colors"
                  >
                    <Eye size={16} />
                    Ansehen
                  </button>
                  <a
                    href={doc.filePath}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-sm transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Warum wir transparent sind
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Als serios arbeitende Zeitarbeitsfirma in Pforzheim legen wir grosen Wert auf 
                Transparenz gegenuber unseren Kunden und Mitarbeitern. Die Veroffentlichung 
                unserer Zertifikate und Bescheinigungen zeigt, dass wir alle gesetzlichen 
                Anforderungen erfullen und vertrauenswurdig sind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Alle Dokumente werden regelmasig aktualisiert</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bescheinigungen von offiziellen Behorden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Nachweisbare Erfullung aller Auflagen</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weitere Dokumente benotigt?</h3>
              <p className="text-gray-600 mb-6">
                Sie benotigen weitere Nachweise oder haben Fragen zu unseren Zertifizierungen? 
                Kontaktieren Sie uns gerne - wir stellen Ihnen alle erforderlichen Unterlagen zur Verfugung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/kontakt"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
                >
                  Kontakt aufnehmen
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
                <a 
                  href="tel:072316039493"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 hover:border-orange-300 text-gray-700 rounded-lg font-semibold transition-colors"
                >
                  07231 60 39 493
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/unternehmen"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zuruck zu Fur Unternehmen
          </Link>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {isViewerOpen && selectedDocument && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeViewer}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center">
                  <selectedDocument.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{selectedDocument.title}</h3>
                  <p className="text-sm text-gray-500">{selectedDocument.fileSize} - PDF Dokument</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedDocument.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Neues Tab
                </a>
                <a
                  href={selectedDocument.filePath}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  onClick={closeViewer}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Schliessen"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src={`${selectedDocument.filePath}#toolbar=1&navpanes=0`}
                className="w-full h-full"
                title={selectedDocument.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Downloads;
