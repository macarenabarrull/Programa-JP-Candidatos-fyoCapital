import React from 'react';
import { SlideData } from '../constants';
import { 
  Briefcase, Mail, TrendingUp, UserCheck, GraduationCap, Star
} from 'lucide-react';
import { CandidateAvatar } from './Slides';

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  const candidateSlides = slides.filter(s => s.type === 'candidate');
  const closing = slides.find(s => s.id === 'closing');

  if (!closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const Header = ({ sectionTitle = "PERFIL DE CANDIDATO" }) => (
    <header className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end shrink-0">
        <div>
            <div className="flex items-center gap-2 mb-1.5">
                <div className="h-1 w-10 bg-indigo-600 rounded-full" />
                <h3 className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.3em]">
                    PROGRAMA JP 25-26 | fyo
                </h3>
            </div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-3xl font-black text-slate-900 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Talento & Cultura</div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-6 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 shrink-0">
        <div className="flex items-center gap-6">
            <span className="font-black uppercase tracking-[0.15em] text-slate-900">Dossier Ejecutivo de Selección</span>
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-bold">Confidencial - Uso Interno</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="font-black text-slate-900 bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100">
                PÁGINA {page} DE {total}
            </div>
        </div>
    </footer>
  );

  // Group candidates: strictly 2 per page to ensure readability and space for annotations
  const candidateGroups: SlideData[][] = [];
  const candidates = [...candidateSlides];
  
  while (candidates.length > 0) {
    candidateGroups.push(candidates.splice(0, 2));
  }

  const totalPages = 1 + 1 + candidateGroups.length + 1;
  let currentPage = 1;

  return (
    <div className="w-full bg-slate-100 text-slate-900 font-sans text-[13px] leading-snug print:p-0 print:bg-white">
        
      {/* PAGE 1: PORTADA (INK SAVING) */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          {/* Minimalist decorative elements to save ink */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-bl-full -mr-16 -mt-16 border border-slate-100" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50/20 rounded-tr-full -ml-8 -mb-8" />
          
          <div className="relative z-10 mt-32">
              <div className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">fyo<span className="text-indigo-600">.</span></div>
              <div className="h-1 w-16 bg-indigo-600 mb-12"></div>
              
              <h1 className="text-5xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-4 uppercase">
                  PROGRAMA JP<br /><span className="text-indigo-600">25-26</span>
              </h1>
              
              <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-slate-200" />
                  <h3 className="text-xl font-black text-slate-400 uppercase tracking-[0.25em]">CANDIDATOS</h3>
              </div>
          </div>

          <div className="mt-auto relative z-10 flex justify-between items-end border-t border-slate-100 pt-8">
              <div className="flex gap-12">
                  <div>
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Documento</span>
                      <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Reporte Ejecutivo</span>
                  </div>
                  <div>
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Fecha</span>
                      <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Abril 2026</span>
                  </div>
              </div>
              <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-1.5">
                      <div className="h-0.5 w-3 bg-indigo-600 rounded-full" />
                      <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.2em]">Propiedad de</span>
                  </div>
                  <span className="text-lg font-black text-slate-900">Talento & Cultura fyo</span>
              </div>
          </div>
      </div>

      {/* PAGE 2: ÍNDICE Y OBJETIVOS */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
          <Header sectionTitle="ÍNDICE DE CANDIDATOS" />
          <div className="flex-1 py-6">
              <div className="grid grid-cols-2 gap-16">
                  <div className="space-y-8">
                      <h4 className="text-[13px] font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-3">Nómina de Perfiles</h4>
                      <div className="space-y-4">
                          {candidateSlides.map((s, i) => {
                              // Calculate page number based on groups of 2
                              const pageNum = 3 + Math.floor(i / 2);
                              return (
                                  <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-2">
                                      <div className="flex items-center gap-3">
                                          <span className="font-bold text-slate-700 text-[13px]">{s.content.name}</span>
                                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">({s.content.age} años)</span>
                                      </div>
                                      <span className="font-black text-slate-300 text-[12px]">Pág. {pageNum}</span>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
                  <div className="space-y-10">
                      <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                          <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-4">Objetivo del Dossier</h4>
                          <p className="text-[14px] font-medium text-slate-600 leading-relaxed">
                              Este dossier ejecutivo ha sido estructurado para el Programa de Formación Comercial en Granos 25-26. 
                              Proporciona una visión objetiva de cada perfil, permitiendo a los líderes comerciales evaluar el potencial 
                              de cada candidato para integrarse a la mesa de negocios de fyo.
                          </p>
                      </div>
                      <div className="p-10 border-2 border-dashed border-indigo-100 rounded-[2.5rem]">
                          <h4 className="text-[13px] font-black text-indigo-600 uppercase tracking-widest mb-4">Criterios de Evaluación</h4>
                          <ul className="space-y-4">
                              {[
                                'Perfil Comercial y Negociación', 
                                'Capacidad Analítica y de Procesos', 
                                'Ajuste Cultural fyo', 
                                'Potencial de Aprendizaje y Desarrollo'
                              ].map((c, i) => (
                                  <li key={i} className="flex items-center gap-4 text-[14px] font-bold text-slate-700">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                      {c}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <Footer page={++currentPage} total={totalPages} />
      </div>

      {/* CANDIDATE PAGES */}
      {candidateGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="w-[210mm] h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
              <Header sectionTitle={`EVALUACIÓN DE PERFILES: GRUPO ${groupIdx + 1}`} />
              
              <div className="flex-1 grid grid-cols-2 gap-10 py-2">
                  {group.map((slide, idx) => {
                      const candidate = slide.content;
                      return (
                          <div key={idx} className={`flex flex-col ${idx === 0 && group.length > 1 ? 'border-r border-slate-100 pr-5' : 'pl-5'} h-full`}>
                              {/* Candidate Header */}
                              <div className="flex gap-5 mb-6">
                                  <div className="w-28 h-36 rounded-xl overflow-hidden border border-slate-200 shrink-0 shadow-md relative">
                                      {candidate.image ? (
                                          <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                      ) : (
                                          <CandidateAvatar name={candidate.name} />
                                      )}
                                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                                  </div>
                                  <div className="flex flex-col justify-center min-w-0">
                                      <h2 className="text-2xl font-black text-slate-900 leading-tight mb-1 tracking-tighter uppercase">{candidate.name}</h2>
                                      <div className="flex items-center gap-2 mb-2">
                                          <div className="px-2 py-0.5 bg-indigo-600 text-white text-[11px] font-black rounded uppercase tracking-widest">
                                              {candidate.age} AÑOS
                                          </div>
                                      </div>
                                      <p className="text-[12px] font-bold text-slate-500 leading-snug line-clamp-2">{candidate.study}</p>
                                  </div>
                              </div>

                              {/* Experience & Skills */}
                              <div className="space-y-6 mb-6">
                                  <section>
                                      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-1.5">
                                          <h3 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                                              <Briefcase size={13} /> Trayectoria
                                          </h3>
                                      </div>
                                      <div className="space-y-2">
                                          {candidate.experience.map((exp: string, i: number) => (
                                              <div key={i} className="text-[12px] font-medium text-slate-600 leading-tight flex gap-2.5">
                                                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                                                  <span>{exp}</span>
                                              </div>
                                          ))}
                                      </div>
                                  </section>

                                  {candidate.courses && candidate.courses.length > 0 && (
                                      <section>
                                          <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-1.5">
                                              <h3 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                                                  <GraduationCap size={13} /> Formación
                                              </h3>
                                          </div>
                                          <div className="flex flex-wrap gap-2">
                                              {candidate.courses.map((course: string, i: number) => (
                                                  <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold rounded border border-slate-100">
                                                      {course}
                                                  </span>
                                              ))}
                                          </div>
                                      </section>
                                  )}
                                  
                                  <div className="grid grid-cols-1 gap-4">
                                      <div className="p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100/30">
                                          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-1.5 flex items-center gap-2">
                                              <UserCheck size={12} /> Fortalezas
                                          </span>
                                          <p className="text-[12px] font-bold text-indigo-900 leading-relaxed">{candidate.notable}</p>
                                      </div>
                                      <div className="p-4 bg-rose-50/30 rounded-2xl border border-rose-100/30">
                                          <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block mb-1.5 flex items-center gap-2">
                                              <TrendingUp size={12} /> Desarrollo
                                          </span>
                                          <p className="text-[12px] font-bold text-rose-900 leading-relaxed">{candidate.toConsider}</p>
                                      </div>
                                  </div>
                              </div>

                              {/* EVALUATOR PANEL */}
                              <div className="mt-auto pt-4 border-t border-slate-100">
                                  <div className="flex items-center justify-between mb-3">
                                      <div className="flex items-center gap-2">
                                          <TrendingUp size={12} className="text-indigo-600" />
                                          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Observaciones</span>
                                      </div>
                                      <div className="flex gap-1">
                                          {[1,2,3,4,5].map(i => (
                                              <Star key={i} size={12} className="text-slate-200" />
                                          ))}
                                      </div>
                                  </div>
                                  
                                  <div className="h-32 w-full bg-slate-50/30 rounded-xl border border-slate-100 p-3 relative overflow-hidden">
                                      <div className="space-y-4">
                                          {[1,2,3,4].map(i => (
                                              <div key={i} className="border-b border-slate-200/30 h-px w-full" />
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>

              <Footer page={++currentPage} total={totalPages} />
          </div>
      ))}

      {/* FINAL PAGE: CIERRE + NOTAS + VOTACIÓN */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none overflow-hidden">
          <Header sectionTitle="CONCLUSIÓN Y DECISIÓN FINAL" />
          
          <div className="flex-1 space-y-10">
              {/* Cierre Block */}
              <div className="flex items-center gap-10 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                  <div className="w-24 h-24 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg shrink-0">🚀</div>
                  <div>
                      <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-3">{closing.title}</h2>
                      <p className="text-lg text-indigo-600 font-black uppercase tracking-widest mb-5">{closing.subtitle}</p>
                      <p className="text-xl font-bold text-slate-600 italic leading-tight">"{closing.content.description}"</p>
                  </div>
              </div>

              {/* Notas Block */}
              <section className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                      <TrendingUp size={24} className="text-slate-900" />
                      <h4 className="text-base font-black text-slate-900 uppercase tracking-widest">Observaciones Consolidadas y Ranking de Selección</h4>
                  </div>
                  <div className="h-[450px] w-full bg-slate-50/30 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 relative overflow-hidden">
                      <div className="space-y-10">
                          {[1,2,3,4,5,6,7,8,9,10].map(i => (
                              <div key={i} className="border-b border-slate-200/60 h-px w-full" />
                          ))}
                      </div>
                      <div className="absolute bottom-8 right-12 text-[11px] font-black text-slate-300 uppercase tracking-[0.3em]">Espacio para síntesis final de la mesa directiva</div>
                  </div>
              </section>

              {/* Contacto Block */}
              <div className="pt-8 border-t border-slate-100 flex justify-center gap-16">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-5">
                          <div className="bg-indigo-600 p-4 rounded-xl text-white">
                              <Mail size={22} />
                          </div>
                          <div className="text-left">
                              <span className="text-[11px] font-black text-indigo-600 uppercase block mb-1">{c.role}</span>
                              <span className="text-[15px] font-black text-slate-900">{c.email}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <Footer page={totalPages} total={totalPages} />
      </div>
    </div>
  );
};
