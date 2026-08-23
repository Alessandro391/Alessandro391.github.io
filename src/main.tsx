import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Globe, ArrowUpRight, BarChart3, Bot, LineChart, 
  Workflow, Download, Play, MessageCircle, Send, 
  MapPin, Megaphone, Database, Cpu, HardDrive, FlaskConical 
} from 'lucide-react';
import './index.css';

// ==========================================
// 1. GRAFICI SVG IN-LINE
// ==========================================
const SvgHotelChart = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="transparent">
    {/* Griglia morbida */}
    <line x1="50" y1="100" x2="750" y2="100" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="8" />
    <line x1="50" y1="175" x2="750" y2="175" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="8" />
    <line x1="50" y1="250" x2="750" y2="250" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="8" />
    <line x1="50" y1="325" x2="750" y2="325" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="8" />
    <line x1="50" y1="380" x2="750" y2="380" stroke="#cbd5e1" strokeWidth="2" />
    
    <text x="750" y="365" fontFamily="Montserrat, sans-serif" fontSize="11" fontStyle="italic" fill="#94a3b8" textAnchor="end">* Dati censurati per privacy</text>
    <text x="50" y="40" fontFamily="Montserrat, sans-serif" fontSize="22" fontWeight="800" fill="#0f172a">Andamento Ricavi per Categoria</text>
    
    {/* Standard (Light Blue) */}
    <path d="M 50,350 C 80,350 80,360 110,360 C 140,360 140,310 170,310 C 200,310 200,320 230,320 C 260,320 260,280 290,280 C 320,280 320,240 350,240 C 380,240 380,250 410,250 C 440,250 440,220 470,220 C 500,220 500,290 530,290 C 560,290 560,340 590,340 C 620,340 620,270 650,270 C 680,270 680,240 710,240" fill="none" stroke="#93c5fd" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Superior (Mid Blue) */}
    <path d="M 50,320 C 80,320 80,340 110,340 C 140,340 140,290 170,290 C 200,290 200,300 230,300 C 260,300 260,250 290,250 C 320,250 320,200 350,200 C 380,200 380,210 410,210 C 440,210 440,180 470,180 C 500,180 500,250 530,250 C 560,250 560,310 590,310 C 620,310 620,240 650,240 C 680,240 680,200 710,200" fill="none" stroke="#60a5fa" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Suite Lusso (Dark Blue) */}
    <path d="M 50,290 C 80,290 80,300 110,300 C 140,300 140,250 170,250 C 200,250 200,230 230,230 C 260,230 260,160 290,160 C 320,160 320,90 350,90 C 380,90 380,120 410,120 C 440,120 440,70 470,70 C 500,70 500,150 530,150 C 560,150 560,260 590,260 C 620,260 620,160 650,160 C 680,160 680,120 710,120" fill="none" stroke="#2563eb" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    
    <circle cx="710" cy="240" r="6" fill="#93c5fd" />
    <circle cx="710" cy="200" r="6" fill="#60a5fa" />
    <circle cx="710" cy="120" r="6" fill="#2563eb" />
    
    <g fontFamily="Montserrat, sans-serif" fontSize="13" fontWeight="600" fill="#64748b" textAnchor="middle">
      <text x="50" y="415">Gen</text><text x="110" y="415">Feb</text><text x="170" y="415">Mar</text>
      <text x="230" y="415">Apr</text><text x="290" y="415">Mag</text><text x="350" y="415">Giu</text>
      <text x="410" y="415">Lug</text><text x="470" y="415">Ago</text><text x="530" y="415">Set</text>
      <text x="590" y="415">Ott</text><text x="650" y="415">Nov</text><text x="710" y="415">Dic</text>
    </g>
    
    <g fontFamily="Montserrat, sans-serif" fontSize="13" fill="#334155">
      <circle cx="50" cy="445" r="7" fill="#93c5fd" /><text x="68" y="450" fontWeight="600">Camere Standard</text>
      <circle cx="230" cy="445" r="7" fill="#60a5fa" /><text x="248" y="450" fontWeight="600">Camere Superior</text>
      <circle cx="410" cy="445" r="7" fill="#2563eb" /><text x="428" y="450" fontWeight="800" fill="#0f172a">Suite Extra-Lusso</text>
    </g>
  </svg>
);

const SvgAutomotiveChart = () => (
  <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet" fill="transparent">
    <text x="40" y="40" fontFamily="Montserrat, sans-serif" fontSize="22" fontWeight="800" fill="#0f172a">Macro-Trend AI (Topic Modeling LDA)</text>
    
    <g fontFamily="Montserrat, sans-serif" fontSize="14" fontWeight="600">
      <text x="240" y="100" fill="#334155" textAnchor="end">Digital Transformation</text>
      <rect x="260" y="80" width="450" height="28" rx="14" fill="#1d4ed8" />
      <text x="725" y="100" fill="#1e40af" fontWeight="800">19.2%</text>

      <text x="240" y="150" fill="#334155" textAnchor="end">Demand Forecasting</text>
      <rect x="260" y="130" width="360" height="28" rx="14" fill="#2563eb" />
      <text x="635" y="150" fill="#2563eb" fontWeight="800">15.4%</text>

      <text x="240" y="200" fill="#334155" textAnchor="end">Innovation Management</text>
      <rect x="260" y="180" width="330" height="28" rx="14" fill="#3b82f6" />
      <text x="605" y="200" fill="#3b82f6" fontWeight="800">14.1%</text>

      <text x="240" y="250" fill="#334155" textAnchor="end">Mobility Governance</text>
      <rect x="260" y="230" width="300" height="28" rx="14" fill="#60a5fa" />
      <text x="575" y="250" fill="#2563eb" fontWeight="800">12.8%</text>

      <text x="240" y="300" fill="#334155" textAnchor="end">AI Safety Systems</text>
      <rect x="260" y="280" width="270" height="28" rx="14" fill="#93c5fd" />
      <text x="545" y="300" fill="#2563eb" fontWeight="800">11.5%</text>

      <text x="240" y="350" fill="#334155" textAnchor="end">Decision Support</text>
      <rect x="260" y="330" width="270" height="28" rx="14" fill="#bfdbfe" />
      <text x="545" y="350" fill="#2563eb" fontWeight="800">11.5%</text>
    </g>
  </svg>
);

// ==========================================
// 2. DATI STATICI & CASI STUDIO
// ==========================================
const datiContatti = [
  { icon: Mail, label: "Email", valore: "alex.carosi@hotmail.com", href: "mailto:alex.carosi@hotmail.com" },
  { icon: Phone, label: "Telefono", valore: "+39 327 685 3015", href: "tel:+393276853015" },
  { icon: Globe, label: "LinkedIn", valore: "/in/alessandro-carosi", href: "https://www.linkedin.com/in/alessandro-carosi-975423243/" },
];

const casiStudio = [
  {
    id: "hotel",
    cliente: "Boutique Hotel 5 Stelle Lusso (Roma)",
    titolo: "Previsione dei Ricavi e Analisi di Mercato",
    problema: "Necessità di stimare i flussi di cassa post-pandemia e identificare le camere a maggior margine operativo.",
    approccio: "Analisi delle serie storiche e di indici macroeconomici nazionali (PIL, inflazione, ecc.) tramite regressioni ARIMA in R.",
    tools: ["R", "ARIMA", "Demetra+", "Excel"],
    risultati: ["Modello previsionale a 12 mesi", "Identificazione camere ad alto margine", "Report trend macroeconomici"],
    valore: "Previsione dei flussi di cassa per ottimizzare i costi sui prodotti ad alta redditività.",
    link: "./Hotel Analysis.pdf",
    linkText: "Articolo",
    svgComponent: <SvgHotelChart />
  },
  {
    id: "scraper",
    cliente: "Progetto Personale / E-Commerce",
    titolo: "Estrazione Dati e Automazione",
    problema: "Estrarre in tempo reale dati di mercato da piattaforme web dinamiche protette da complessi sistemi anti-bot.",
    approccio: "Sviluppo di una pipeline automatizzata in Node.js per aggirare i blocchi e normalizzare i dati. Algoritmo usato per analizzare il mercato e ricostruire la mia moto.",
    tools: ["Node.js", "Playwright", "Puppeteer Stealth", "SheetJS"],
    risultati: ["Bypass bot-detection", "Estrazione real-time", "Export strutturato (XLSX)"],
    valore: "Raccolta automatica di dati pubblici, trasformando siti caotici in dataset per la Business Intelligence.",
    link: "./Dimostrazione + OUTPUT.mp4",
    linkText: "VIDEO DIMOSTRATIVO"
  },
  {
    id: "automotive",
    cliente: "Ricerca Accademica (LUISS)",
    titolo: "Topic Modeling e AI nell'Automotive",
    problema: "Analizzare una vasta e frammentata letteratura scientifica (78+ paper) sull'uso dell'Intelligenza Artificiale nel settore automotive.",
    approccio: "Applicazione di algoritmi NLP per il text-mining e Latent Dirichlet Allocation (LDA) per l'individuazione di macro-temi. Workflow interattivo su KNIME.",
    tools: ["Python", "KNIME", "NLP (LDA)", "Power BI"],
    risultati: ["Identificazione 9 macro-trend", "Dashboard Interattiva", "Workflow KNIME open-source"],
    valore: "Trasformazione di testi non strutturati in report visivi per decisioni strategiche aziendali.",
    link: "./AI in automotive.pdf",
    linkText: "Articolo",
    svgComponent: <SvgAutomotiveChart />
  }
];

// ==========================================
// 3. COMPONENTI SECONDARI
// ==========================================
const TimelineBox = ({ date, title, desc }: { date: string, title: string, desc: string }) => (
  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col text-left transition-transform hover:-translate-y-2 duration-300">
    <span className="text-blue-600 font-extrabold text-sm tracking-wide mb-3">
      {date}
    </span>
    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
      {title}
    </h4>
    <p className="text-slate-600 leading-relaxed md:text-sm font-medium">
      {desc}
    </p>
  </div>
);

// COMPONENTE ADATTIVO PER LE CARD FLUTTUANTI (OTTIMIZZATO MOBILE)
const FloatingCard = ({ children, delay, className, onClick, isHidden }: any) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-20 will-change-transform ${className} ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}
  >
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="p-4 md:p-6 w-[150px] sm:w-[200px] md:w-72 cursor-pointer rounded-2xl md:rounded-[2rem] bg-white/95 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] hover:shadow-[0_25px_60px_-10px_rgba(37,99,235,0.25)] group text-left flex flex-col transition-shadow"
    >
      {children}
    </motion.div>
  </motion.div>
);

interface ExpandedSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const ExpandedSection = ({ id, eyebrow, title, children, onClose }: ExpandedSectionProps) => {
  return (
    <motion.div
      id={`section-${id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 py-16"
    >
      <div className="flex justify-between items-start mb-10 px-2 md:px-4">
        <div className="max-w-3xl">
          <p className="text-blue-600 text-sm font-black tracking-[0.25em] uppercase mb-2 text-left">
            {eyebrow}
          </p>
          <h2 className="text-slate-950 font-black tracking-tighter leading-none text-5xl md:text-[70px]">
            {title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-3 bg-white rounded-full hover:bg-slate-100 transition-colors cursor-pointer text-slate-500 hover:text-slate-900 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12)] mt-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <div className="w-full bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 md:p-14 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        {children}
      </div>
    </motion.div>
  );
};

// ==========================================
// 4. SEZIONI PRINCIPALI
// ==========================================
const Contatti = () => {
  const [datiForm, setDatiForm] = useState({ nome: '', azienda: '', email: '', messaggio: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatiForm({ ...datiForm, [e.target.name]: e.target.value });
  };

  const waText = encodeURIComponent(`Ciao Alessandro! Sono ${datiForm.nome} ${datiForm.azienda ? `di ${datiForm.azienda}` : ''}.\nEmail: ${datiForm.email}\n\n${datiForm.messaggio}`);
  const mailBody = encodeURIComponent(`Ciao Alessandro,\n\nSono ${datiForm.nome} ${datiForm.azienda ? `di ${datiForm.azienda}` : ''}.\n\nMessaggio:\n${datiForm.messaggio}`);

  return (
    <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_1fr] text-left">
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-8 md:p-12 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block relative">
            <span className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Nome</span>
            <input 
              data-lpignore="true" 
              data-1p-ignore="true"
              data-form-type="other"
              autoComplete="off" 
              name="nome" 
              value={datiForm.nome} 
              onChange={handleInputChange} 
              type="text" 
              placeholder="Name" 
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white" 
            />
          </label>
          <label className="block relative">
            <span className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Azienda</span>
            <input 
              data-lpignore="true" 
              data-1p-ignore="true"
              data-form-type="other"
              autoComplete="off" 
              name="azienda" 
              value={datiForm.azienda} 
              onChange={handleInputChange} 
              type="text" 
              placeholder="Nome Azienda Srl" 
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white" 
            />
          </label>
        </div>
        <label className="block relative">
          <span className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Email</span>
          <input 
            data-lpignore="true" 
            data-1p-ignore="true"
            data-form-type="other"
            autoComplete="off" 
            name="email" 
            value={datiForm.email} 
            onChange={handleInputChange} 
            type="email" 
            placeholder="tua@email.com" 
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white" 
          />
        </label>
        <label className="block relative">
          <span className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Come posso aiutarti?</span>
          <textarea 
            data-lpignore="true" 
            data-1p-ignore="true"
            data-form-type="other"
            autoComplete="off" 
            name="messaggio" 
            value={datiForm.messaggio} 
            onChange={handleInputChange} 
            rows={5} 
            placeholder="Scrivi qui il tuo messaggio..." 
            className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white" 
          />
        </label>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href={`https://wa.me/393276853015?text=${waText}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full flex-1 gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1ebd5b] hover:-translate-y-1 shadow-lg shadow-[#25D366]/25"
          >
            <MessageCircle className="size-5" />
            Invia su WhatsApp
          </a>
          <a 
            href={`mailto:alex.carosi@hotmail.com?subject=Richiesta di contatto da ${datiForm.nome || 'Sito Web'}&body=${mailBody}`}
            className="inline-flex items-center justify-center w-full flex-1 gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-600/25"
          >
            <Send className="size-5" />
            Invia via Email
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {datiContatti.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1 group">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600">
              <c.icon className="size-6 text-blue-600 transition-colors group-hover:text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">{c.label}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{c.valore}</p>
            </div>
          </a>
        ))}
        
        <div className="p-8 mt-4 bg-slate-50/70 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col items-center text-center">
          <p className="text-sm leading-relaxed text-slate-700 font-medium mb-6">
            Rispondo entro <strong className="font-bold text-slate-900">24 ore</strong>. La prima call conoscitiva di 30 minuti è gratuita.
          </p>
          <div className="w-full h-px bg-slate-200 mb-6"></div>
          <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase mb-4">
            Scansiona per chattare
          </p>
          <img 
            src="./QrCodeWhatsapp.png" 
            alt="QR Code WhatsApp" 
            className="w-32 h-32 rounded-2xl shadow-sm border border-slate-100 object-contain bg-white p-2"
          />
        </div>
      </div>
    </div>
  );
};

const ChiSono = () => {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-700">
      <div className="w-full max-w-4xl h-[300px] md:h-[450px] bg-gradient-to-b from-slate-50 to-white rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] mb-16 flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </div>
        <p className="text-slate-600 text-sm z-10 font-semibold">Video di presentazione — 90 secondi</p>
      </div>

      <p 
        className="text-center text-slate-700 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto mb-10 px-4"
      >
        Sono un giovane Data Analyst e consulente di Business Intelligence.<br />
        Aiuto piccole e medie imprese a leggere i propri numeri con chiarezza: raccolgo i dati sparsi tra gestionali, fogli di calcolo e piattaforme, li unifico e li trasformo in strumenti semplici su cui prendere decisioni ogni giorno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-20 px-2 md:px-8">
        <TimelineBox date="Giugno 2024" title="Laurea in Economia & Management" desc="Primi modelli previsionali e passione per i dati come linguaggio delle imprese." />
        <TimelineBox date="Luglio 2026" title="Laurea in Marketing Analytics and Data Science cum laude" desc="Reportistica commerciale, KPI di vendita e automazione dei processi di controllo." />
        <TimelineBox date="Giugno 2026 - On going" title="Data Analyst in Bravo Finance" desc="Analisi manageriali in ogni settore dell'azienda, dal marketing al CRM." />
        <TimelineBox date="Oggi" title="Consulente indipendente" desc="Affianco PMI nel trasformare i dati in decisioni strategiche misurabili." />
      </div>

      <a 
        href="./CV_Alessandro_Carosi.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-3 bg-[#1e5adb] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_10px_40px_rgba(30,90,219,0.4)] hover:-translate-y-1"
      >
        <Download className="w-5 h-5" />
        Scarica il mio CV
      </a>
    </div>
  );
};

const Lavori = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-20 text-left">
      {casiStudio.map((c) => (
        <article key={c.id} id={`lavoro-${c.id}`} className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 md:p-14 transition-all duration-500 hover:-translate-y-2 group overflow-hidden scroll-mt-24">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">{c.cliente}</span>
              <h3 className="mt-3 max-w-xl text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">{c.titolo}</h3>
            </div>
            {c.link ? (
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link cursor-pointer z-10 self-start md:self-auto" title="Apri documento">
                {c.linkText && <span className="text-xs md:text-sm font-bold text-slate-600 group-hover/link:text-blue-600 transition-colors uppercase tracking-wider">{c.linkText}</span>}
                <ArrowUpRight className="size-6 md:size-8 text-blue-600 transition-transform duration-500 group-hover/link:translate-x-2 group-hover/link:-translate-y-2" strokeWidth={2.5} />
              </a>
            ) : (
              <ArrowUpRight className="size-6 md:size-8 text-slate-400 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-blue-600" strokeWidth={2} />
            )}
          </div>

          {c.svgComponent && (
            <div className="w-full mb-10 h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-[2rem] bg-slate-50/50 overflow-hidden flex items-center justify-center p-2 md:p-4">
              {c.svgComponent}
            </div>
          )}

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase mb-3">Problema</h4>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 font-medium">{c.problema}</p>
            </div>
            <div>
              <h4 className="text-xs font-extrabold tracking-[0.18em] text-blue-600 uppercase mb-3">Approccio</h4>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 font-medium">{c.approccio}</p>
            </div>
          </div>

          {/* Bubble Tag con Scritta in Nero Marcato */}
          <div className="mt-10 flex flex-wrap gap-2 md:gap-2.5">
            {c.tools.map((t) => (
              <span 
                key={t} 
                className="rounded-full bg-slate-100 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-bold text-slate-900 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 md:mt-10 grid gap-3 md:gap-4 md:grid-cols-3">
            {c.risultati.map((r) => (
              <div key={r} className="rounded-xl md:rounded-2xl bg-blue-50/60 px-5 py-4 text-xs md:text-sm font-bold text-slate-900 shadow-sm">{r}</div>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-base md:text-lg leading-relaxed text-slate-800 font-medium italic bg-slate-50/70 p-5 md:p-6 rounded-xl md:rounded-2xl">
            <span className="font-bold text-slate-950 not-italic">Valore per il business: </span>{c.valore}
          </p>
        </article>
      ))}
    </div>
  );
};

const Soluzioni = () => {
  const [target, setTarget] = useState<'locale' | 'tech' | null>(null);

  const soluzioniLocale = [
    { icon: Globe, titolo: "Menu Digitali & QR Code", testo: "Addio costi di stampa. Menu interattivi scansionabili tramite QR code, facili da aggiornare ogni volta che cambi un prezzo o un piatto.", punti: ["Grafica personalizzata", "Aggiornamento in tempo reale", "Zero commissioni"] },
    { icon: MessageCircle, titolo: "Zero Chiamate Perse", testo: "Il sabato perdi ordini perché il telefono è occupato? Un assistente WhatsApp risponde per te e prende l'ordine, inviandotelo già formattato.", punti: ["Risposte H24", "Integrazione menu", "Meno stress nel weekend"] },
    { icon: Bot, titolo: "Marketing Automatico (CRM)", testo: "Migliaia di contatti salvati e mai usati. Ricontattiamo in automatico i clienti che non vedi da 30 giorni per riempire il locale il martedì o il mercoledì.", punti: ["Messaggi compleanno", "Sconti automatici", "Aumento scontrino"] },
    { icon: MapPin, titolo: "Riposizionamento Locale", testo: "Se un cliente cerca 'pizzeria vicino a me', devi essere il primo a comparire. Ottimizzo la tua scheda Google Maps e la presenza online.", punti: ["SEO Locale", "Gestione recensioni", "Visibilità immediata"] },
    { icon: Megaphone, titolo: "Programmi di Marketing", testo: "Creazione di campagne promozionali mirate su WhatsApp e Facebook per attrarre nuovi clienti e aumentare le prenotazioni nei giorni di bassa affluenza.", punti: ["Campagne WhatsApp", "Ads geolocalizzate", "Crescita clienti"] },
    { icon: Database, titolo: "Ecosistema Raccolta Dati", testo: "Implementazione di sistemi fisici e digitali (es. Wi-Fi gratuiti) per raccogliere i contatti dei clienti nel rispetto della privacy e creare un database di proprietà.", punti: ["Raccolta contatti GDPR", "Database proprietario", "Fidelizzazione"] }
  ];

  const soluzioniTech = [
    { icon: Workflow, titolo: "Data Pipeline & Web Scraping", testo: "Sviluppo architetture in Node.js/Python per l'estrazione massiva di dati da siti web dinamici, aggirando blocchi anti-bot in modo etico.", punti: ["Playwright & Puppeteer", "Pulizia dati", "Export strutturato"] },
    { icon: LineChart, titolo: "Predictive Analytics", testo: "Sfrutto modelli statistici (ARIMA, Regressioni) e Machine Learning per prevedere flussi di cassa, vendite e ottimizzare il magazzino.", punti: ["Modelli in R e Python", "Identificazione trend", "Riduzione costi operativi"] },
    { icon: BarChart3, titolo: "Business Intelligence & NLP", testo: "Trasformo dati non strutturati (testi, recensioni, paper) in dashboard interattive grazie al Topic Modeling (LDA) e software di BI.", punti: ["Power BI & Tableau", "Analisi del sentiment", "Workflow KNIME"] },
    { icon: Cpu, titolo: "Data Engineering (ETL)", testo: "Costruzione di flussi ETL automatizzati per unificare dati da diverse fonti (CRM, ERP, API) e alimentare i tuoi data warehouse aziendali senza interventi manuali.", punti: ["Integrazione API", "Data Cleaning automatizzato", "Sincronizzazione dati"] },
    { icon: HardDrive, titolo: "Ottimizzazione SQL & Big Data", testo: "Scrittura e refactoring di query complesse su database relazionali o in cloud (BigQuery, PostgreSQL) per abbattere drasticamente i tempi di esecuzione.", punti: ["Query Optimization", "Data Modeling", "Gestione Big Data"] },
    { icon: FlaskConical, titolo: "A/B Testing & CRO", testo: "Implementazione della statistica inferenziale per condurre A/B test rigorosi su nuove feature o pricing, validando le ipotesi con dati solidi invece che sensazioni.", punti: ["Test Statistici", "Analisi Significatività", "Incremento Conversioni"] }
  ];

  const soluzioniMostrate = target === 'locale' ? soluzioniLocale : (target === 'tech' ? soluzioniTech : []);

  return (
    <div className="mx-auto max-w-6xl text-center">
      
      {/* Bottoni Toggle Target e Scritta */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h3 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Chi sei?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 w-full max-w-2xl">
          <button 
            onClick={() => setTarget('locale')}
            className={`px-6 py-4 rounded-full font-bold transition-all duration-300 flex-1 sm:flex-none cursor-pointer text-sm md:text-base ${target === 'locale' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600 ring-offset-2' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
          >
            🏪 Sono un'Attività Locale / Ristorante
          </button>
          <button 
            onClick={() => setTarget('tech')}
            className={`px-6 py-4 rounded-full font-bold transition-all duration-300 flex-1 sm:flex-none cursor-pointer text-sm md:text-base ${target === 'tech' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600 ring-offset-2' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
          >
            🚀 Sono un'Azienda Tech / Corporate
          </button>
        </div>
      </div>

      {target && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          <AnimatePresence mode="wait">
            {soluzioniMostrate.map((s, idx) => (
              <motion.div 
                key={s.titolo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-500 group-hover:bg-blue-600">
                  <s.icon className="size-6 text-blue-600 transition-colors duration-500 group-hover:text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mt-8 text-xl md:text-2xl font-bold text-slate-900">{s.titolo}</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 font-medium">{s.testo}</p>
                <ul className="mt-8 space-y-3">
                  {s.punti.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-xs md:text-sm text-slate-800 font-semibold">
                      <span className="size-2 rounded-full bg-blue-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 5. RENDER DELL'APP (Root)
// ==========================================
function App() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleOpenSection = (id: string) => {
    if (!openSections.includes(id)) {
      setOpenSections((prev) => [...prev, id]);
      
      // Delay scrolling until component mounts
      setTimeout(() => {
        document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseSection = (id: string) => {
    setOpenSections((prev) => prev.filter((sectionId) => sectionId !== id));
  };

  const getSectionData = (id: string) => {
    switch (id) {
      case 'chi-sono': return { eyebrow: 'Presentazione', title: 'Chi sono', content: <ChiSono /> };
      case 'lavori': return { eyebrow: 'Case Study', title: 'Lavori fatti', content: <Lavori /> };
      case 'soluzioni': return { eyebrow: 'Soluzioni', title: 'Come posso aiutare la tua azienda', content: <Soluzioni /> };
      case 'contatti': return { eyebrow: 'Iniziamo', title: 'Contatti', content: <Contatti /> };
      default: return null;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full bg-white text-slate-900 overflow-x-hidden min-h-screen">
      
      {/* VIGNETTATURA AZZURRA SUI BORDI */}
      <motion.div
        animate={{ opacity: openSections.length === 0 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ boxShadow: 'inset 0 0 150px rgba(0, 96, 252, 0.22)' }}
      />
      
      {/* QUICK MENU FLUTTUANTE & LOGO/CONTATTI IN BASSO A DESTRA (Disabilitato su mobile tramite hidden md:flex) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-6 pointer-events-none">
        
        {/* Menu Navigazione Veloce (Visibile solo se una sezione è aperta) */}
        <AnimatePresence>
          {openSections.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="hidden md:flex flex-col items-end gap-3 pointer-events-auto"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 mr-2 drop-shadow-sm">MENÙ RAPIDO</span>
              {[
                { id: 'chi-sono', label: 'Chi sono' },
                { id: 'lavori', label: 'Lavori fatti' },
                { id: 'soluzioni', label: 'Soluzioni' },
                { id: 'contatti', label: 'Contatti' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => handleOpenSection(item.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all duration-300 ${
                    openSections.includes(item.id) 
                      ? 'bg-blue-600 text-white shadow-blue-600/30' 
                      : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blocco Logo + Icone Contatto */}
        <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
          {/* Pulsante WhatsApp */}
          <a 
            href="https://wa.me/393276853015" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300"
            title="Chatta su WhatsApp"
          >
            <MessageCircle className="size-5 md:size-6" strokeWidth={2} />
          </a>
          
          {/* Pulsante Email */}
          <a 
            href="mailto:alex.carosi@hotmail.com" 
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300"
            title="Invia un'Email"
          >
            <Mail className="size-5 md:size-6" strokeWidth={2} />
          </a>

          {/* Logo CA */}
          <img 
            src="./LogoHead.png" 
            alt="Logo AC" 
            className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* HERO PAGE */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 pt-12">
        <div className="text-center z-10 mb-6 md:mb-16">
          <h1 className="font-black tracking-tight text-slate-800 text-[55px] md:text-[80px] leading-[1.1] mb-6 md:mb-8 -mt-4 md:-mt-6">
            Data Analyst
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Consulente di Business Intelligence.<br className="hidden md:block"/>
            Scegli da dove iniziare: la pagina si apre attorno alla tua curiosità.
          </p>
        </div>

        <div className="relative w-full max-w-6xl h-[450px] md:h-[600px] flex items-center justify-center">
          <div className="relative z-10 w-[240px] sm:w-[320px] md:w-[650px] mt-8 md:mt-0 flex items-center justify-center pointer-events-none [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <img 
              src="./FotoAnalyst.png" 
              alt="Data Analyst alla scrivania"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>

          <FloatingCard delay={0} className="top-4 left-2 sm:left-4 md:top-0 md:left-10" onClick={() => handleOpenSection('chi-sono')} isHidden={openSections.includes('chi-sono')}>
            <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-slate-900 leading-tight">Chi sono?</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-medium leading-snug">Lascia che mi presenti</p>
            <div className="h-[2px] md:h-[2.5px] w-4 md:w-6 bg-blue-400 mt-2 md:mt-5 transition-all duration-300 group-hover:w-8 md:group-hover:w-12 group-hover:bg-blue-600 rounded-full"></div>
          </FloatingCard>

          <FloatingCard delay={1} className="top-20 right-2 sm:right-4 md:top-10 md:right-10" onClick={() => handleOpenSection('lavori')} isHidden={openSections.includes('lavori')}>
            <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-slate-900 leading-tight">Lavori fatti</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-medium leading-snug">Case study e risultati</p>
            <div className="h-[2px] md:h-[2.5px] w-4 md:w-6 bg-blue-400 mt-2 md:mt-5 transition-all duration-300 group-hover:w-8 md:group-hover:w-12 group-hover:bg-blue-600 rounded-full"></div>
          </FloatingCard>

          <FloatingCard delay={2} className="bottom-20 left-2 sm:left-4 md:bottom-10 md:left-10" onClick={() => handleOpenSection('soluzioni')} isHidden={openSections.includes('soluzioni')}>
            <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-slate-900 leading-tight">Come posso aiutare<br className="hidden md:block"/> la tua azienda?</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-medium leading-snug">Soluzioni, non servizi</p>
            <div className="h-[2px] md:h-[2.5px] w-4 md:w-6 bg-blue-400 mt-2 md:mt-5 transition-all duration-300 group-hover:w-8 md:group-hover:w-12 group-hover:bg-blue-600 rounded-full"></div>
          </FloatingCard>

          <FloatingCard delay={0.5} className="bottom-4 right-2 sm:right-4 md:bottom-0 md:right-10" onClick={() => handleOpenSection('contatti')} isHidden={openSections.includes('contatti')}>
            <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-slate-900 leading-tight">Contatti</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-medium leading-snug">Parliamone insieme</p>
            <div className="h-[2px] md:h-[2.5px] w-4 md:w-6 bg-blue-400 mt-2 md:mt-5 transition-all duration-300 group-hover:w-8 md:group-hover:w-12 group-hover:bg-blue-600 rounded-full"></div>
          </FloatingCard>
        </div>
      </div>

      {/* SEZIONI APERTE */}
      <div className="w-full pb-24">
        <AnimatePresence>
          {openSections.map((sectionId) => {
            const data = getSectionData(sectionId);
            if (!data) return null;
            
            return (
              <ExpandedSection 
                key={sectionId} 
                id={sectionId}
                eyebrow={data.eyebrow}
                title={data.title}
                onClose={() => handleCloseSection(sectionId)}
              >
                {data.content}
              </ExpandedSection>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);