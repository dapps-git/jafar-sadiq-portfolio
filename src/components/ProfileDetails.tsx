import { useState } from "react";
import {
  Compass,
  Users,
  GraduationCap,
  Building,
  Award,
  LineChart,
  Heart,
  Shield,
  ChevronDown,
  ChevronUp,
  Briefcase
} from "lucide-react";

interface ProfileDetailsProps {
  title: string;
}

interface CredentialItem {
  role: string;
  category: "counselor" | "board" | "academic" | "management" | "expert" | "foundation" | "state" | "default";
}

const credentials: CredentialItem[] = [
  { role: "Career Counsellor & Life Coach", category: "counselor" },
  { role: "Directorate Board Member – LIFE Institute", category: "board" },
  { role: "Academic Council Member – Izzath Knowledge Campus", category: "academic" },
  { role: "Academic Council Member – Qabas Life School", category: "academic" },
  { role: "Managing Committee Member – Al Fouz School", category: "management" },
  { role: "Chief Career Counsellor – LIFE Institute", category: "board" },
  { role: "Psychometric Test Interpreter – Skiolo Assessment Centre", category: "expert" },
  { role: "General Secretary – IMAGE Human Care Foundation", category: "foundation" },
  { role: "Senior Resource Person – WEFI Kerala", category: "expert" },
  { role: "Educator – CIGI Calicut", category: "academic" },
  { role: "State Directorate Member – Zuhra", category: "state" }
];

const getIcon = (category: string) => {
  switch (category) {
    case "counselor":
      return <Compass className="w-4 h-4 text-emerald-600" />;
    case "board":
      return <Users className="w-4 h-4 text-indigo-600" />;
    case "academic":
      return <GraduationCap className="w-4 h-4 text-blue-600" />;
    case "management":
      return <Building className="w-4 h-4 text-amber-600" />;
    case "expert":
      return <LineChart className="w-4 h-4 text-violet-600" />;
    case "foundation":
      return <Heart className="w-4 h-4 text-rose-600" />;
    case "state":
      return <Shield className="w-4 h-4 text-sky-600" />;
    default:
      return <Briefcase className="w-4 h-4 text-slate-600" />;
  }
};

const getBgColor = (category: string) => {
  switch (category) {
    case "counselor":
      return "bg-emerald-50 border-emerald-100";
    case "board":
      return "bg-indigo-50 border-indigo-100";
    case "academic":
      return "bg-blue-50 border-blue-100";
    case "management":
      return "bg-amber-50 border-amber-100";
    case "expert":
      return "bg-violet-50 border-violet-100";
    case "foundation":
      return "bg-rose-50 border-rose-100";
    case "state":
      return "bg-sky-50 border-sky-100";
    default:
      return "bg-slate-50 border-slate-100";
  }
};

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
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1 py-1 scrollbar-thin">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <div
                className={`flex items-center justify-center p-2 rounded-lg border shrink-0 ${getBgColor(
                  cred.category
                )}`}
              >
                {getIcon(cred.category)}
              </div>
              <div className="flex flex-col justify-center min-w-0 py-0.5">
                <span className="text-xs font-semibold text-slate-700 break-words leading-tight group-hover:text-slate-900 transition-colors">
                  {cred.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
