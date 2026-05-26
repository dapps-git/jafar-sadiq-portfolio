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
  const iconClass = "w-4 h-4 text-neutral-200";
  switch (category) {
    case "counselor":
      return <Compass className={iconClass} />;
    case "board":
      return <Users className={iconClass} />;
    case "academic":
      return <GraduationCap className={iconClass} />;
    case "management":
      return <Building className={iconClass} />;
    case "expert":
      return <LineChart className={iconClass} />;
    case "foundation":
      return <Heart className={iconClass} />;
    case "state":
      return <Shield className={iconClass} />;
    default:
      return <Briefcase className={iconClass} />;
  }
};

const ProfileDetails = ({ title }: ProfileDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Accordion Trigger (Solid White, Bold High-Contrast Classy Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white text-black border border-white hover:bg-neutral-100 transition-all font-bold text-xs tracking-wider uppercase group rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      >
        <span className="flex items-center gap-2">
          <Award className="w-4 h-4" />
          {title}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[10px] bg-black/10 border border-black/5 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-black/85">
            {credentials.length} Items
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300 text-black" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 text-black" />
          )}
        </span>
      </button>

      {/* Accordion Content with smooth height transition */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1 py-1 scrollbar-thin scrollbar-thumb-white/10">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 bg-neutral-900/60 border border-white/5 rounded-lg shadow-sm hover:border-white/10 hover:bg-neutral-900/80 transition-all group"
            >
              <div className="flex items-center justify-center p-2 rounded bg-white/5 border border-white/10 shrink-0">
                {getIcon(cred.category)}
              </div>
              <div className="flex flex-col justify-center min-w-0 py-0.5">
                <span className="text-xs font-semibold text-neutral-300 break-words leading-tight group-hover:text-white transition-colors">
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
