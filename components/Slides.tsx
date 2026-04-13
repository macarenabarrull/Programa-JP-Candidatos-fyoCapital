
import React from 'react';
import { SlideData } from '../constants';
import { 
  Users, GraduationCap, 
  Rocket, Briefcase,
  Mail, RotateCcw,
  Search, Download, Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";

interface SlideProps {
  data: SlideData;
  onPrint?: () => void;
  onDownloadPPTX?: () => void;
  onJumpToSlide?: (index: number) => void;
}

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
};

const GlowIcon: React.FC<{ icon: any, color: string, bg: string, size?: number }> = ({ icon: Icon, color, bg, size = 20 }) => (
    <div className={`relative flex items-center justify-center ${bg} ${color} rounded-xl p-2.5 shadow-sm transition-all duration-500 group-hover:scale-105`}>
        <Icon size={size} />
    </div>
);

// --- Reusable "Deep Glass" Card Component ---
const GlassCard: React.FC<{ children?: React.ReactNode, className?: string, hover?: boolean }> = ({ children, className = "", hover = false }) => (
    <div className={`
        bg-white/40 backdrop-blur-2xl backdrop-saturate-150 
        border border-white/60 rounded-2xl md:rounded-3xl
        shadow-[0_8px_32px_0_rgba(99,102,241,0.03)]
        relative overflow-hidden
        before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-br before:from-white/80 before:to-transparent before:-z-10
        ${hover ? 'transition-all duration-500 hover:bg-white/60 hover:scale-[1.01] hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.15)] hover:border-white/80' : ''}
        ${className}
    `}>
        {children}
    </div>
);

export const CandidateAvatar: React.FC<{ name: string, size?: string }> = ({ name, size = "w-full h-full" }) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const colors = [
        'bg-indigo-500', 'bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 
        'bg-rose-500', 'bg-amber-500', 'bg-cyan-500', 'bg-slate-500'
    ];
    // Simple hash to pick a color
    const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    const bgColor = colors[colorIndex];

    return (
        <div className={`${size} ${bgColor} flex items-center justify-center text-white font-black tracking-tighter relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            <span className="text-5xl md:text-7xl lg:text-8xl drop-shadow-xl relative z-10">{initials}</span>
            <div className="absolute bottom-4 right-4 opacity-20 transform rotate-12">
                <Users size={120} />
            </div>
        </div>
    );
};

// 1. Cover Slide - Executive & Dynamic Redesign
export const CoverSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div 
        className="flex flex-col justify-center items-center h-full text-center relative z-10"
        initial="hidden" animate="show" variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="w-full max-w-5xl relative">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <GlassCard className="p-4 md:p-8 flex flex-col items-center border-white/80 shadow-2xl relative overflow-visible">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-b-full shadow-lg shadow-indigo-200" />
            
            <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-indigo-100 bg-indigo-50/50 text-indigo-700 text-[10px] font-black tracking-[0.3em] uppercase mb-4 shadow-sm backdrop-blur-md"
            >
                <Sparkles size={12} className="animate-pulse" />
                FYO | PROGRAMA JP
            </motion.div>
            
            <div className="relative mb-4">
                <motion.h1 
                    variants={itemVariants} 
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[0.85] font-display uppercase"
                >
                    {(data.title || '').split(' ')[0]}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
                        {(data.title || '').split(' ').slice(1).join(' ')}
                    </span>
                </motion.h1>
                <div className="absolute -right-6 -top-6 opacity-10 rotate-12 hidden lg:block">
                    <Rocket size={80} className="text-indigo-600" />
                </div>
            </div>
            
            <motion.div variants={itemVariants} className="h-px w-16 bg-slate-200 mb-4" />
            
            <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-slate-500 font-bold max-w-2xl leading-tight tracking-tight mb-8">
                {data.subtitle}
            </motion.p>
            
            <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-2 w-full">
                {data.content.tags.map((tag: string, idx: number) => (
                <motion.div 
                    variants={itemVariants} 
                    key={idx} 
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all cursor-default group"
                >
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-700 font-black text-[10px] tracking-tight uppercase">{tag}</span>
                </motion.div>
                ))}
            </motion.div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

// 11. Closing Slide - Premium Finish
// 12. Candidate Slide - Professional Profile
export const CandidateSlide: React.FC<SlideProps> = ({ data }) => {
    const candidate = data.content;
    
    return (
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center py-2" 
            initial="hidden" 
            animate="show" 
            variants={containerVariants}
        >
            {/* Left Column: Photo and Basic Info */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">
                <GlassCard className="p-1.5 border-white/80 shadow-xl overflow-hidden group">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                {candidate.image ? (
                    <img 
                        src={candidate.image} 
                        alt={candidate.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <CandidateAvatar name={candidate.name} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-3 left-3 right-3 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            <h2 className="text-sm font-black text-white tracking-tight font-display leading-tight">{candidate.name}</h2>
                            <p className="text-indigo-200 font-black text-[10px] uppercase tracking-widest">{candidate.age} años</p>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Right Column: Details */}
            <motion.div variants={containerVariants} className="lg:col-span-9 flex flex-col gap-4">
                {/* Academic Background - Moved to Top Right */}
                <GlassCard className="p-4 border-slate-100/50">
                    <div className="flex items-center gap-3">
                        <GlowIcon icon={GraduationCap} color="text-indigo-600" bg="bg-indigo-50" size={16} />
                        <div>
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Formación Académica</h3>
                            <p className="text-sm font-bold text-slate-700 leading-relaxed tracking-tight">
                                {candidate.study}
                            </p>
                        </div>
                    </div>
                </GlassCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Experience */}
                    <GlassCard className="p-5 border-indigo-100/50 flex flex-col gap-3 h-full">
                        <div className="flex items-center gap-3 mb-1">
                            <GlowIcon icon={Briefcase} color="text-indigo-600" bg="bg-indigo-50" size={16} />
                            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Experiencia Laboral</h3>
                        </div>
                        <ul className="space-y-2">
                            {candidate.experience.map((exp: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-slate-600 leading-snug">
                                    <div className="mt-1.5 h-1 w-1 rounded-full bg-indigo-400 shrink-0" />
                                    {exp}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    {/* Courses */}
                    <GlassCard className="p-5 border-emerald-100/50 flex flex-col gap-3 h-full">
                        <div className="flex items-center gap-3 mb-1">
                            <GlowIcon icon={GraduationCap} color="text-emerald-600" bg="bg-emerald-50" size={16} />
                            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Capacitaciones</h3>
                        </div>
                        <ul className="space-y-2">
                            {candidate.courses.map((course: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-slate-600 leading-snug">
                                    <div className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>

                {/* Notable and To Consider */}
                <div className="grid grid-cols-1 gap-3">
                    <motion.div variants={itemVariants}>
                        <div className="p-4 rounded-2xl border border-indigo-100 bg-white/60 backdrop-blur-sm shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <Sparkles size={16} className="text-indigo-500" />
                                <h3 className="font-black text-[10px] text-indigo-900 uppercase tracking-widest">Fortalezas Destacadas</h3>
                            </div>
                            <p className="font-bold text-slate-700 text-xs leading-relaxed">
                                {candidate.notable}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="p-4 rounded-2xl border border-amber-100 bg-white/60 backdrop-blur-sm shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <Search size={16} className="text-amber-500" />
                                <h3 className="font-black text-[10px] text-amber-900 uppercase tracking-widest">Oportunidades de Mejora</h3>
                            </div>
                            <p className="font-bold text-slate-700 text-xs leading-relaxed">
                                {candidate.toConsider}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// 11. Closing Slide - Premium Finish
export const ClosingSlide: React.FC<SlideProps> = ({ data, onPrint, onJumpToSlide }) => {
    const contacts = data.content.contacts || [];
    const { description } = data.content;

    return (
        <motion.div 
            className="flex flex-col justify-center items-center h-full text-center relative max-w-4xl mx-auto px-6 py-2" 
            initial="hidden" 
            animate="show" 
            variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-indigo-100 bg-white/60 text-indigo-700 text-[9px] font-black tracking-widest uppercase mb-4 shadow-sm">
                    FYO | PROGRAMA JP
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-2 leading-tight font-display">
                    {data.title}
                </h1>
                <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-200" />
                    <p className="text-[9px] md:text-[10px] text-indigo-600 font-black tracking-[0.3em] uppercase">
                        {data.subtitle}
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-200" />
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full max-w-xl mb-6">
                <GlassCard className="p-4 text-center border-indigo-100/50 bg-white/40 backdrop-blur-xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600" />
                    <p className="text-sm md:text-base font-bold text-slate-700 leading-relaxed tracking-tight mb-3 italic">
                        "{description}"
                    </p>
                    <div className="flex items-center justify-center gap-1.5">
                        <div className="h-1 w-1 rounded-full bg-indigo-400" />
                        <div className="h-1 w-1 rounded-full bg-indigo-400" />
                        <div className="h-1 w-1 rounded-full bg-indigo-400" />
                    </div>
                </GlassCard>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {contacts.map((contact: any, idx: number) => (
                    <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/40 border border-white/60 shadow-sm hover:bg-white/60 transition-all"
                    >
                        <div className="w-7 h-7 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                            <Mail size={14} />
                        </div>
                        <div className="text-left">
                            <span className="block text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{contact.role}</span>
                            <span className="block text-[11px] font-bold text-slate-700">{contact.email}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={itemVariants} className="flex gap-3">
                <button 
                    onClick={onPrint}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-black text-[9px] transition-all shadow-xl hover:bg-slate-800 active:scale-95 font-display tracking-widest uppercase"
                >
                    <Download size={14} />
                    <span>Descargar Reporte</span>
                </button>

                {onJumpToSlide && (
                    <button 
                        onClick={() => onJumpToSlide(0)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-black text-[9px] transition-all shadow-sm hover:bg-slate-50 active:scale-95 font-display tracking-widest uppercase"
                    >
                        <RotateCcw size={14} />
                        <span>Volver al Inicio</span>
                    </button>
                )}
            </motion.div>
        </motion.div>
    );
};
