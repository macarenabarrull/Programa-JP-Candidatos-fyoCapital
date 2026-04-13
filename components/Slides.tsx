
import React from 'react';
import { SlideData } from '../constants';
import { 
  CheckCircle2, Users, Calendar, GraduationCap, FileText, Flag, Heart, 
  BrainCircuit, Zap, ClipboardCheck, PencilRuler, Search, FileSignature, 
  Rocket, BarChart3, Compass, Target, Layers, Sparkles, DollarSign, Briefcase,
  Download, Trophy, Shield, Mail, RotateCcw
} from 'lucide-react';
import { motion } from "framer-motion";

interface SlideProps {
  data: SlideData;
  onPrint?: () => void;
  onDownloadPPTX?: () => void;
  onJumpToSlide?: (index: number) => void;
}

const IconMap: Record<string, any> = {
  Compass, Target, BrainCircuit, Layers, Zap, ClipboardCheck, Heart, Sparkles,
  Users, DollarSign, Briefcase, Calendar, GraduationCap, FileText, Flag,
  PencilRuler, Search, FileSignature, Rocket, BarChart3
};

// Standardized Premium Styles for Features/Icons
const featureStyles = [
    { icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
    { icon: Users, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    { icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
    { icon: Shield, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
];

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

// --- Reusable Premium Components ---
const Highlight: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color = "text-indigo-600" }) => (
    <span className={`${color} font-black tracking-tight`}>{children}</span>
);

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

// 2. Objectives Slide - Direct & Professional
export const ObjectivesSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div className="h-full flex flex-col justify-center py-4 max-w-5xl mx-auto" initial="hidden" animate="show" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm border border-indigo-100">
              Objetivo Principal
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight font-display">
              {data.content.mainGoal.split("10 Jóvenes Profesionales")[0]}
              <span className="text-indigo-600 uppercase">10 JÓVENES PROFESIONALES</span>
              {data.content.mainGoal.split("10 Jóvenes Profesionales")[1]}
          </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.content.stats.map((stat: any, idx: number) => {
            const Icon = IconMap[stat.icon] || Users;
            const colors = [
                { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
                { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' }
            ];
            const style = colors[idx % colors.length];

            return (
                <motion.div variants={itemVariants} key={idx}>
                    <GlassCard className={`p-6 flex flex-col items-center text-center border-b-4 ${style.border.replace('border', 'border-b')}`}>
                        <div className="mb-4">
                            <GlowIcon icon={Icon} color={style.text} bg={style.bg} size={24} />
                        </div>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</h3>
                        <div className={`text-3xl font-black tracking-tight ${style.text}`}>
                            {stat.value.split(" ")[0]}
                            <span className="text-sm font-bold ml-1.5 text-slate-400">JP</span>
                        </div>
                    </GlassCard>
                </motion.div>
            )
        })}
      </div>

      <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-3">
          {data.content.pillars.map((pillar: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <CheckCircle2 size={16} className="text-indigo-500" />
                  <span className="text-slate-700 font-bold text-xs uppercase tracking-tight">{pillar}</span>
              </div>
          ))}
      </motion.div>
    </motion.div>
  );
};


// 3. Info Slide - Executive Layout
export const InfoSlide: React.FC<SlideProps> = ({ data }) => {
  const statStyles = [
    { color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  ];

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center py-2" initial="hidden" animate="show" variants={containerVariants}>
      <div className="lg:col-span-7 space-y-4">
        <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-800 font-bold leading-relaxed tracking-tight">
          <Highlight>fyo</Highlight> es una compañía líder en el ecosistema de agronegocios, y este programa busca <Highlight color="text-indigo-600">potenciar el talento joven</Highlight> para liderar el futuro de la industria.
        </motion.p>
        
        {data.content.bullets && (
            <motion.div variants={containerVariants} className="space-y-2">
                {data.content.bullets.map((item: string, idx: number) => (
                    <motion.div variants={itemVariants} key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                        <span className="text-slate-700 text-sm font-bold">{item}</span>
                    </motion.div>
                ))}
            </motion.div>
        )}
      </div>

      <motion.div variants={containerVariants} className="lg:col-span-5 flex flex-col gap-3">
        {data.content.stats && (
            <div className="grid gap-3">
                {data.content.stats.map((stat: any, idx: number) => {
                    const Icon = IconMap[stat.icon] || Users;
                    const style = statStyles[idx % statStyles.length];
                    return (
                        <motion.div variants={itemVariants} key={`stat-${idx}`}>
                            <div className="p-4 rounded-xl bg-white border border-slate-100 flex items-center justify-between shadow-sm">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
                                    <span className={`text-base font-black ${style.color} leading-tight`}>
                                        {stat.value}
                                    </span>
                                </div>
                                <GlowIcon icon={Icon} color={style.color} bg={style.bg} size={18} />
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        )}

        {data.content.valueProp && (
             <motion.div variants={containerVariants} className="flex flex-col gap-3">
                {data.content.valueProp.map((vp: any, idx: number) => {
                    const style = featureStyles[idx % featureStyles.length];
                    const Icon = style.icon;
                    return (
                        <motion.div variants={itemVariants} key={idx}>
                            <div className="p-4 rounded-xl border border-slate-100 bg-white flex items-center gap-4 shadow-sm">
                                <div className={`w-10 h-10 shrink-0 rounded-lg ${style.bg} flex items-center justify-center`}>
                                    <Icon size={18} className={style.color} />
                                </div>
                                <div>
                                     <span className={`block font-black text-sm ${style.color}`}>{vp.title}</span>
                                     <span className="text-slate-500 text-xs font-bold leading-snug block">{vp.text}</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
             </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};


// 5. Grid Slide - Professional Grid
export const GridSlide: React.FC<SlideProps> = ({ data }) => {
  const gridStyles = [
    { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' },
    { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2" initial="hidden" animate="show" variants={containerVariants}>
      {data.content.items.map((item: any, idx: number) => {
        const Icon = IconMap[item.icon] || Users;
        const style = gridStyles[idx % gridStyles.length];

        return (
            <motion.div variants={itemVariants} key={idx}>
                <div className={`p-6 rounded-2xl bg-white border ${style.border} shadow-sm h-full flex flex-col items-start`}>
                    <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center mb-4 ${style.color} shadow-sm`}>
                        <Icon size={20} />
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 text-xs font-bold leading-relaxed">{item.desc}</p>
                </div>
            </motion.div>
        );
      })}
    </motion.div>
  );
};

// 6. Table Slide (Granos) - Centered and Balanced
export const TableGranosSlide: React.FC<SlideProps> = () => {
  const months = ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'];
  const areas = ['Insumos', 'Análisis', 'Consultoría', 'Logística', 'Intel. y Des. Com.'];
  const matrix = [
    [1, 2, 3, 4, null],
    [null, 1, 2, 3, 4],
    [4, null, 1, 2, 3],
    [3, 4, null, 1, 2],
    [2, 3, 4, null, 1],
  ];

  return (
    <motion.div className="w-full flex flex-col items-center justify-center py-4" initial="hidden" animate="show" variants={containerVariants}>
      <motion.div variants={itemVariants} className="w-full max-w-5xl">
        <GlassCard className="overflow-hidden border-indigo-100/50 shadow-2xl">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-indigo-50/50">
                <th className="p-4 md:p-6 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] border-b border-indigo-100">Período</th>
                {areas.map((area, i) => (
                    <th key={i} className="p-4 md:p-6 text-indigo-700 font-black text-[10px] md:text-xs border-b border-indigo-100 border-l border-indigo-50/50 text-center tracking-tight uppercase">{area}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {months.map((month, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-white/30 transition-colors group">
                    <td className="p-4 md:p-6 font-mono text-slate-500 text-xs md:text-sm border-b border-indigo-50/50 bg-indigo-50/10 group-hover:text-indigo-600 font-black">{month}</td>
                    {matrix[rowIndex].map((group, colIndex) => (
                    <td key={colIndex} className="p-2 md:p-4 border-b border-indigo-50/50 border-l border-indigo-50/50 text-center relative">
                        {group ? (
                        <div className={`mx-auto w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs md:text-sm font-black shadow-lg transition-all hover:scale-110 hover:-translate-y-1 text-white border border-white/20
                            ${group === 1 ? 'bg-indigo-500 shadow-indigo-500/30' : ''}
                            ${group === 2 ? 'bg-emerald-500 shadow-emerald-500/30' : ''}
                            ${group === 3 ? 'bg-indigo-600 shadow-indigo-600/30' : ''}
                            ${group === 4 ? 'bg-rose-500 shadow-rose-500/30' : ''}
                        `}>
                            G{group}
                        </div>
                        ) : (
                        <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full mx-auto" />
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </GlassCard>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-6 justify-center">
          <LegendItem color="bg-indigo-500" label="Grupo 1 (JP 1-2)" />
          <LegendItem color="bg-emerald-500" label="Grupo 2 (JP 3-4)" />
          <LegendItem color="bg-indigo-600" label="Grupo 3 (JP 5-6)" />
          <LegendItem color="bg-rose-500" label="Grupo 4 (JP 7-8)" />
      </motion.div>
    </motion.div>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm backdrop-blur-sm">
        <span className={`w-3 h-3 rounded-full ${color} shadow-[0_0_8px_currentColor]`}></span>
        <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">{label}</span>
    </div>
)

// 7. Table Slide (Capital)
export const TableCapitalSlide: React.FC<SlideProps> = () => {
    const data = [
        { month: '1', jp1: 'Finanzas (FP)', jp2: 'BackOffice fyoCapital', jp3: 'Análisis de Mercado', jp4: 'Operadores' },
        { month: '2', jp1: 'BackOffice fyoCapital', jp2: 'Análisis de Mercado', jp3: 'Operadores', jp4: 'Finanzas (FP)' },
        { month: '3', jp1: 'Análisis de Mercado', jp2: 'Operadores', jp3: 'Finanzas (FP)', jp4: 'BackOffice fyoCapital' },
        { month: '4', jp1: 'Operadores', jp2: 'Finanzas (FP)', jp3: 'BackOffice fyoCapital', jp4: 'Análisis de Mercado' },
    ];

    return (
        <motion.div className="w-full flex flex-col items-center justify-center py-4" initial="hidden" animate="show" variants={containerVariants}>
            <motion.div variants={itemVariants} className="w-full max-w-5xl">
                <GlassCard className="overflow-hidden border-indigo-100/50 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 opacity-50" />
                    <div className="grid grid-cols-5 bg-indigo-50/30 backdrop-blur-md border-b border-indigo-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-display">
                        <div className="p-4 md:p-6">Mes</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 1</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 2</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 3</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 4</div>
                    </div>
                    {data.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-5 border-b border-indigo-50/50 hover:bg-white/40 transition-all duration-300 text-xs md:text-sm group">
                            <div className="p-4 md:p-6 font-mono text-slate-500 flex items-center bg-indigo-50/10 font-black group-hover:text-indigo-700">{row.month}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp1}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp2}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp3}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp4}</div>
                        </div>
                    ))}
                </GlassCard>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-8 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Rotación Full-Time mensual por área</motion.p>
        </motion.div>
    );
};

// 8. Mentoring Slide - Executive Layout
export const MentoringSplitSlide: React.FC<SlideProps> = ({ data }) => {
    return (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full pb-4" initial="hidden" animate="show" variants={containerVariants}>
            {/* Left Col: Lists of Mentors */}
            <motion.div variants={containerVariants} className="flex flex-col justify-center gap-2">
                 {/* Granos */}
                 <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                Mentores Granos
                            </h3>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.granosMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700">
                                    <div className="h-1 w-1 rounded-full bg-slate-200"></div>
                                    <span className="text-xs font-bold leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Capital */}
                 <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                Mentores fyoCapital
                            </h3>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.capitalMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700">
                                    <div className="h-1 w-1 rounded-full bg-slate-200"></div>
                                    <span className="text-xs font-bold leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Consultoria */}
                 <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                Mentores Consultoría
                            </h3>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.consultoriaMentors?.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700">
                                    <div className="h-1 w-1 rounded-full bg-slate-200"></div>
                                    <span className="text-xs font-bold leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>
            </motion.div>

            {/* Right Col: Considerations */}
            <motion.div variants={itemVariants} className="h-full py-2">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center h-full text-white shadow-xl">
                    <div className="mb-6 flex items-center gap-4">
                        <GlowIcon icon={Users} color="text-indigo-400" bg="bg-white/10" size={20} />
                        <h3 className="text-xl font-black tracking-tight font-display">Consideraciones del Rol</h3>
                    </div>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm font-bold tracking-tight">
                        El mentor es clave para facilitar la inmersión cultural y técnica, brindando guía estratégica.
                    </p>

                    <div className="flex flex-col gap-3">
                        {data.content.considerations.map((item: string, i: number) => (
                            <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                                <span className="font-bold text-xs tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// 9. Academy Slide - Executive Layout
export const AcademySplitSlide: React.FC<SlideProps> = ({ data }) => {
    const topics = data.content.topics || [];

    return (
        <motion.div className="flex flex-col h-full gap-4 justify-center max-w-5xl mx-auto py-2" initial="hidden" animate="show" variants={containerVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 flex items-center gap-3 border-slate-100">
                        <GlowIcon icon={Calendar} color="text-indigo-600" bg="bg-indigo-50" size={20} />
                        <div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Cuándo</span>
                            <span className="text-sm font-black text-slate-900 tracking-tight">Viernes 14-18hs</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 flex items-center gap-3 border-slate-100">
                        <GlowIcon icon={GraduationCap} color="text-indigo-600" bg="bg-indigo-50" size={20} />
                        <div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Frecuencia</span>
                            <span className="text-sm font-black text-slate-900 tracking-tight">2 Módulos / Sem</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard className="p-4 flex items-center gap-3 border-slate-100">
                        <GlowIcon icon={BarChart3} color="text-indigo-600" bg="bg-indigo-50" size={20} />
                        <div>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Evaluación</span>
                            <span className="text-sm font-black text-slate-900 tracking-tight">Examen Mensual</span>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            <motion.div variants={itemVariants}>
                <GlassCard className="p-6 border-slate-100 shadow-lg">
                    <div className="mb-6">
                        <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight font-display">Contenidos del Programa</h3>
                         <p className="text-sm text-slate-600 font-bold tracking-tight">
                            Formación técnica intensiva para nivelar conocimientos y profundizar en la operatoria.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {topics.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-50 bg-slate-50/50">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                <span className="text-slate-800 font-bold text-[10px] uppercase tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </motion.div>
    );
};

// 10. Tutor Content Slide - Executive Layout
export const TutorContentSlide: React.FC<SlideProps & { index?: number }> = ({ data }) => {
    const content = data.content;
    const isThreeSquares = ['rol-tutor', 'etapas-aprendizaje', 'transferencia', 'feedback', 'motivacion', 'cultura'].includes(data.id);
    const isPath = data.id === 'punto-partida';

    const getThreeItems = () => {
        if (data.id === 'rol-tutor') {
            return [
                { title: 'Negocio', desc: 'Comprensión del mercado', emoji: '📈', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Operativa', desc: 'Ejecución de tareas', emoji: '⚙️', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                { title: 'Cultura', desc: 'Forma de trabajo', emoji: '🤝', color: 'bg-slate-50 text-slate-600 border-slate-100' }
            ];
        }
        if (data.id === 'etapas-aprendizaje') {
            return content.table.rows.map((row: string[], i: number) => ({
                title: row[0],
                desc: `${row[1]} → ${row[2]}`,
                emoji: i === 0 ? '🌱' : i === 1 ? '🌿' : '🌳',
                color: i === 0 ? 'bg-amber-50 text-amber-600 border-amber-100' : i === 1 ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }));
        }
        if (data.id === 'transferencia') {
            return [
                { title: 'Explicar', desc: 'El "por qué" de cada acción.', emoji: '🗣️', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Preguntar', desc: 'Fomentar el razonamiento.', emoji: '❓', color: 'bg-slate-50 text-slate-600 border-slate-100' },
                { title: 'Escuchar', desc: 'Validar la comprensión.', emoji: '👂', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        if (data.id === 'feedback') {
            return [
                { title: 'Frecuente', desc: 'Concreto y orientado a mejora.', emoji: '⏱️', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Estructura', desc: 'Qué funciona y qué ajustar.', emoji: '🏗️', color: 'bg-slate-50 text-slate-600 border-slate-100' },
                { title: 'Futuro', desc: 'Próximos pasos claros.', emoji: '🚀', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        if (data.id === 'motivacion') {
            return [
                { title: 'Contexto', desc: 'Dar sentido a las tareas.', emoji: '🗺️', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Acompañar', desc: 'Estar presente en el proceso.', emoji: '🤝', color: 'bg-slate-50 text-slate-600 border-slate-100' },
                { title: 'Reconocer', desc: 'Valorar los avances logrados.', emoji: '🌟', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        if (data.id === 'cultura') {
            return [
                { title: 'Referente', desc: 'Transmitir valores con ejemplo.', emoji: '💎', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Comunicación', desc: 'Gestión abierta de errores.', emoji: '📢', color: 'bg-slate-50 text-slate-600 border-slate-100' },
                { title: 'Disponibilidad', desc: 'Estar cuando se necesite.', emoji: '🕒', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        return [];
    };

    return (
        <motion.div 
            className="flex flex-col h-full gap-4 justify-center max-w-5xl mx-auto py-2" 
            initial="hidden" animate="show" variants={containerVariants}
        >
            {isThreeSquares ? (
                <div className="space-y-6">
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight font-display">
                            {content.description}
                        </h3>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {getThreeItems().map((item: any, i: number) => (
                            <motion.div key={i} variants={itemVariants}>
                                <GlassCard className={`h-full p-6 flex flex-col items-center text-center border-b-4 ${item.color.split(' ')[2].replace('border', 'border-b')}`}>
                                    <div className="text-3xl mb-4">{item.emoji}</div>
                                    <h4 className={`text-base font-black mb-2 uppercase tracking-wider ${item.color.split(' ')[1]}`}>{item.title}</h4>
                                    <p className="text-slate-600 font-bold leading-relaxed text-xs">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : isPath ? (
                <div className="space-y-8 py-4">
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight font-display">
                            {content.description}
                        </h3>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 relative z-10">
                            {content.bullets[0].split(' → ').map((step: string, i: number) => (
                                <motion.div key={i} variants={itemVariants} className="flex flex-col items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white shadow-md text-xs
                                        ${i === 0 ? 'bg-slate-400' : i === 6 ? 'bg-emerald-500' : 'bg-indigo-500'}
                                    `}>
                                        {i + 1}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-700 uppercase tracking-tight text-center">{step}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div variants={itemVariants} className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-center">
                        <p className="text-indigo-900 font-black text-base">
                            {content.highlight}
                        </p>
                    </motion.div>
                </div>
            ) : (
                <div className="space-y-6">
                    {content.description && (
                        <motion.p variants={itemVariants} className="text-xl text-slate-800 font-black leading-tight text-center max-w-4xl mx-auto">
                            {content.description}
                        </motion.p>
                    )}

                    {content.bullets && (
                        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                            {content.bullets.map((bullet: string, idx: number) => (
                                <motion.div variants={itemVariants} key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                    <div className="mt-0.5 p-1.5 bg-indigo-50 rounded-lg text-indigo-600 text-sm">
                                        🎯
                                    </div>
                                    <span className="text-slate-700 text-sm font-bold leading-snug tracking-tight">{bullet}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {content.highlight && (
                        <motion.div 
                            variants={itemVariants}
                            className="p-4 rounded-xl border-l-4 shadow-md bg-white border-indigo-500 max-w-3xl mx-auto"
                        >
                            <p className="font-black text-base flex items-center gap-3 text-indigo-900">
                                <Zap size={20} className="text-indigo-500" />
                                {content.highlight}
                            </p>
                        </motion.div>
                    )}
                </div>
            )}
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
