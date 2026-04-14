import React from 'react';
import { SlideData } from '../constants';
import { 
  Briefcase, Mail, TrendingUp, UserCheck, GraduationCap
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
    <header className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end">
        <div>
            <div className="flex items-center gap-2 mb-1.5">
                <div className="h-1 w-10 bg-indigo-600 rounded-full" />
                <h3 className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.4em]">
                    PROGRAMA JP 25-26 | fyo
                </h3>
            </div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-3xl font-black text-slate-900 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
            <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Talento & Cultura</div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-8 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100">
        <div className="flex items-center gap-6">
            <span className="font-black uppercase tracking-[0.2em] text-slate-900">Dossier Ejecutivo de Selección</span>
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-bold">Confidencial - Uso Interno</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="font-black text-slate-900 bg-slate-100 px-5 py-2 rounded-lg">
                PÁGINA {page} DE {total}
            </div>
        </div>
    </footer>
  );

  // Group candidates: 2 per page, but last page can take 3 if needed to save space
  const candidateGroups: SlideData[][] = [];
  const candidates = [...candidateSlides];
  
  while (candidates.length > 0) {
    // If we have 3 left, put them all on one page to save a page
    if (candidates.length === 3) {
      candidateGroups.push(candidates.splice(0, 3));
    } else {
      candidateGroups.push(candidates.splice(0, 2));
    }
  }

  const totalPages = 1 + 1 + candidateGroups.length + 1;
  let currentPage = 1;

  return (
    <div className="w-full bg-slate-100 text-slate-900 font-sans text-[11px] leading-tight print:p-0 print:bg-white">
        
      {/* PAGE 1: PORTADA */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          <div className="absolute top-0 right-0 w-[160%] h-[60%] bg-slate-900 -rotate-12 -translate-y-1/2 translate-x-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-transparent" />
          </div>
          
          <div className="relative z-10 mt-48">
              <div className="text-9xl font-black text-white tracking-tighter mb-10 leading-none">fyo<span className="text-indigo-400">.</span></div>
              <div className="h-2 w-48 bg-indigo-600 mb-24"></div>
              
              <h1 className="text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-6 uppercase">
                  PROGRAMA JP<br /><span className="text-indigo-600">25-26</span>
              </h1>
              
              <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-slate-300" />
                  <h3 className="text-4xl font-black text-slate-400 uppercase tracking-[0.4em]">CANDIDATOS</h3>
              </div>
          </div>

          <div className="mt-auto relative z-10 flex justify-between items-end border-t border-slate-100 pt-12">
              <div className="flex gap-20">
                  <div>
                      <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">Documento</span>
                      <span className="text-2xl font-black text-slate-900 uppercase tracking-tight">Reporte Ejecutivo</span>
                  </div>
                  <div>
                      <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">Fecha</span>
                      <span className="text-2xl font-black text-slate-900 uppercase tracking-tight">Abril 2026</span>
                  </div>
              </div>
              <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-3">
                      <div className="h-1 w-6 bg-indigo-600 rounded-full" />
                      <span className="text-[12px] font-black text-indigo-600 uppercase tracking-[0.4em]">Propiedad de</span>
                  </div>
                  <span className="text-xl font-black text-slate-900">Talento & Cultura fyo</span>
              </div>
          </div>
      </div>

      {/* PAGE 2: ÍNDICE Y OBJETIVOS */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
          <Header sectionTitle="ÍNDICE DE CANDIDATOS" />
          <div className="flex-1 py-10">
              <div className="grid grid-cols-2 gap-16">
                  <div className="space-y-8">
                      <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-3">Nómina de Perfiles</h4>
                      <div className="space-y-4">
                          {candidateSlides.map((s, i) => {
                              // Calculate page number based on groups [2, 2, 2, 2, 2, 3]
                              let pageNum = 3;
                              let count = 0;
                              for (let g = 0; g < candidateGroups.length; g++) {
                                  count += candidateGroups[g].length;
                                  if (i < count) {
                                      pageNum = 3 + g;
                                      break;
                                  }
                              }
                              return (
                                  <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-2">
                                      <div className="flex items-center gap-3">
                                          <span className="font-bold text-slate-700 text-[12px]">{s.content.name}</span>
                                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">({s.content.age} años)</span>
                                      </div>
                                      <span className="font-black text-slate-300 text-[11px]">Pág. {pageNum}</span>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
                  <div className="space-y-10">
                      <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-5">Objetivo del Dossier</h4>
                          <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                              Este dossier ejecutivo ha sido estructurado para el Programa de Formación Comercial en Granos 25-26. 
                              Proporciona una visión objetiva de cada perfil, permitiendo a los líderes comerciales evaluar el potencial 
                              de cada candidato para integrarse a la mesa de negocios de fyo.
                          </p>
                      </div>
                      <div className="p-10 border-2 border-dashed border-indigo-100 rounded-[2.5rem]">
                          <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-5">Criterios de Evaluación</h4>
                          <ul className="space-y-4">
                              {[
                                'Perfil Comercial y Negociación', 
                                'Capacidad Analítica y de Procesos', 
                                'Ajuste Cultural fyo', 
                                'Potencial de Aprendizaje y Desarrollo'
                              ].map((c, i) => (
                                  <li key={i} className="flex items-center gap-4 text-[13px] font-bold text-slate-700">
                                      <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
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
          <div key={groupIdx} className="w-[210mm] h-[297mm] mx-auto p-[1.2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
              <Header sectionTitle={`EVALUACIÓN DE PERFILES: GRUPO ${groupIdx + 1}`} />
              
              <div className={`flex-1 grid ${group.length === 3 ? 'grid-cols-3 gap-4' : 'grid-cols-2 gap-10'} py-2`}>
                  {group.map((slide, idx) => {
                      const candidate = slide.content;
                      const isThreeCol = group.length === 3;
                      return (
                          <div key={idx} className={`flex flex-col ${idx < group.length - 1 ? 'border-r border-slate-100' : ''} ${isThreeCol ? 'pr-3 pl-3 first:pl-0 last:pr-0' : 'pr-5 last:pr-0 last:pl-5'}`}>
                              {/* Candidate Header */}
                              <div className={`flex ${isThreeCol ? 'flex-col items-center text-center' : 'gap-5'} mb-6`}>
                                  <div className={`${isThreeCol ? 'w-24 h-32 mb-3' : 'w-28 h-36'} rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-lg relative`}>
                                      {candidate.image ? (
                                          <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                      ) : (
                                          <CandidateAvatar name={candidate.name} />
                                      )}
                                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                  </div>
                                  <div className="flex flex-col justify-center min-w-0">
                                      <h2 className={`${isThreeCol ? 'text-lg' : 'text-2xl'} font-black text-slate-900 leading-tight mb-1 tracking-tighter uppercase`}>{candidate.name}</h2>
                                      <div className={`flex items-center gap-2 mb-1 ${isThreeCol ? 'justify-center' : ''}`}>
                                          <div className="px-2 py-0.5 bg-indigo-600 text-white text-[9px] font-black rounded-lg uppercase tracking-widest shadow-md shadow-indigo-100">
                                              {candidate.age} AÑOS
                                          </div>
                                      </div>
                                      <p className="text-[10px] font-bold text-slate-500 leading-tight line-clamp-2">{candidate.study}</p>
                                  </div>
                              </div>

                              {/* Experience & Skills */}
                              <div className="space-y-4 mb-4">
                                  <section>
                                      <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-1">
                                          <h3 className="text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
                                              <Briefcase size={10} /> Trayectoria
                                          </h3>
                                      </div>
                                      <div className="space-y-1.5">
                                          {candidate.experience.map((exp: string, i: number) => (
                                              <div key={i} className="text-[9px] font-medium text-slate-600 leading-tight flex gap-1.5">
                                                  <div className="mt-1 h-1 w-1 rounded-full bg-indigo-400 shrink-0" />
                                                  <span>{exp}</span>
                                              </div>
                                          ))}
                                      </div>
                                  </section>

                                  {candidate.courses && candidate.courses.length > 0 && (
                                      <section>
                                          <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-1">
                                              <h3 className="text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
                                                  <GraduationCap size={10} /> Formación
                                              </h3>
                                          </div>
                                          <div className="flex flex-wrap gap-1.5">
                                              {candidate.courses.map((course: string, i: number) => (
                                                  <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[8px] font-bold rounded border border-slate-100">
                                                      {course}
                                                  </span>
                                              ))}
                                          </div>
                                      </section>
                                  )}
                                  
                                  <div className="grid grid-cols-1 gap-2">
                                      <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                                          <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest block mb-1 flex items-center gap-1.5">
                                              <UserCheck size={9} /> Fortalezas
                                          </span>
                                          <p className="text-[9px] font-bold text-indigo-900 leading-relaxed">{candidate.notable}</p>
                                      </div>
                                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100/50">
                                          <span className="text-[8px] font-black text-rose-600 uppercase tracking-widest block mb-1 flex items-center gap-1.5">
                                              <TrendingUp size={9} /> Desarrollo
                                          </span>
                                          <p className="text-[9px] font-bold text-rose-900 leading-relaxed">{candidate.toConsider}</p>
                                      </div>
                                  </div>
                              </div>

                              {/* EVALUATOR PANEL */}
                              <div className="mt-auto pt-4 border-t border-slate-100">
                                  <div className="flex items-center gap-2 mb-3">
                                      <TrendingUp size={10} className="text-indigo-600" />
                                      <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">Observaciones del Líder</span>
                                  </div>
                                  
                                  <div className="h-28 w-full bg-slate-50/50 rounded-xl border border-slate-100 p-2.5 relative overflow-hidden">
                                      <div className="space-y-3.5">
                                          {[1,2,3,4].map(i => (
                                              <div key={i} className="border-b border-slate-200/40 h-px w-full" />
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
      <div className="w-[210mm] h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white shadow-2xl print:shadow-none">
          <Header sectionTitle="CONCLUSIÓN Y DECISIÓN FINAL" />
          
          <div className="flex-1 space-y-8">
              {/* Cierre Block */}
              <div className="flex items-center gap-10 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                  <div className="w-24 h-24 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg shrink-0">🚀</div>
                  <div>
                      <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-3">{closing.title}</h2>
                      <p className="text-lg text-indigo-600 font-black uppercase tracking-widest mb-5">{closing.subtitle}</p>
                      <p className="text-xl font-bold text-slate-600 italic leading-tight">"{closing.content.description}"</p>
                  </div>
              </div>

              {/* Notas Block */}
              <section className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                      <TrendingUp size={20} className="text-slate-900" />
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Observaciones Consolidadas y Ranking de Selección</h4>
                  </div>
                  <div className="h-[500px] w-full bg-slate-50/30 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 relative overflow-hidden">
                      <div className="space-y-10">
                          {[1,2,3,4,5,6,7,8,9,10,11].map(i => (
                              <div key={i} className="border-b border-slate-200/60 h-px w-full" />
                          ))}
                      </div>
                      <div className="absolute bottom-8 right-12 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Espacio para síntesis final de la mesa directiva</div>
                  </div>
              </section>

              {/* Contacto Block */}
              <div className="pt-6 border-t border-slate-100 flex justify-center gap-16">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-4">
                          <div className="bg-indigo-600 p-3 rounded-xl text-white">
                              <Mail size={18} />
                          </div>
                          <div className="text-left">
                              <span className="text-[9px] font-black text-indigo-600 uppercase block mb-0.5">{c.role}</span>
                              <span className="text-[13px] font-black text-slate-900">{c.email}</span>
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
