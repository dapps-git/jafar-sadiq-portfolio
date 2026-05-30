import { useState } from "react";
import {
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ProfileDetailsProps {
  title: string;
}

const credentials = [
  "Directorate Board Member – LIFE Institute",
  "Academic Council Member – Izzath Knowledge Campus",
  "Academic Council Member – Qabas Life School",
  "Managing Committee Member – Al Fouz School",
  "Chief Career Counsellor – LIFE Institute",
  "Psychometric Test Interpreter – Skiolo Assessment Centre",
  "General Secretary – IMAGE Human Care Foundation",
  "Senior Resource Person – WEFI Kerala",
  "Educator – CIGI Calicut",
  "State Directorate Member – Zahra",
];

const ProfileDetails = ({ title }: ProfileDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl shadow-md hover:shadow-lg hover:from-sky-500 hover:to-blue-600 transition-all text-white font-medium text-sm group"
      >
        <span className="flex items-center gap-2">
          <Award className="w-4 h-4 animate-pulse" />
          {title}
        </span>
        <span className="flex items-center gap-1.5">
          {isOpen ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          )}
        </span>
      </button>

      {/* Accordion Content with smooth height transition */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1 py-1 scrollbar-thin">
          {credentials.map((role, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-sky-400 ring-2 ring-sky-100" />
              <span className="text-xs font-semibold text-slate-700 break-words leading-tight group-hover:text-slate-900 transition-colors">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
