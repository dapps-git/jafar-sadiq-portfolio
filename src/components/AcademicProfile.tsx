import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const formalQualifications = [
  "M.A. Islamic Studies — Jamia Hamdard, New Delhi",
  "M.A. Urdu — Sree Shankaracharya University of Sanskrit, Kaladi",
  "M.A. Sociology — IGNOU, New Delhi",
  "D.El.Ed (Diploma in Elementary Education) — Government Teacher Training Institute, Kozhikode",
  "DCGC (Diploma in Career Guidance & Counselling) — CIGI, Calicut",
];

const islamicQualifications = [
  "Master Degree in Islamic Theology — Jamia Markaz Karanthoor, Kozhikode",
  "Bachelor Degree in Islamic Theology — Ma'din Academy, Malappuram",
  "Adeeb Fazil (Urdu) Final — University of Calicut",
];

const AcademicProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl shadow-md hover:shadow-lg hover:from-emerald-500 hover:to-teal-600 transition-all text-white font-medium text-sm group"
      >
        <span className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 animate-pulse" />
          View Academic Profile
        </span>
        <span className="flex items-center gap-1.5">
          {isOpen ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          )}
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1 py-1 scrollbar-thin">

          {/* Formal / University Qualifications */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 pt-1">
            Formal Qualifications
          </p>
          {formalQualifications.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-100" />
              <span className="text-xs font-semibold text-slate-700 break-words leading-tight group-hover:text-slate-900 transition-colors">
                {item}
              </span>
            </div>
          ))}

          {/* Islamic / Traditional Qualifications */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 pt-2">
            Islamic & Traditional Studies
          </p>
          {islamicQualifications.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-teal-400 ring-2 ring-teal-100" />
              <span className="text-xs font-semibold text-slate-700 break-words leading-tight group-hover:text-slate-900 transition-colors">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AcademicProfile;
