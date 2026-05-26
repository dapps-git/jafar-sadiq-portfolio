import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProfileDescriptionProps {
  description: string;
}

const ProfileDescription = ({ description }: ProfileDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-neutral-900/70 border border-white/10 rounded-lg px-4 py-3.5 shadow-lg backdrop-blur-sm">
      <p className={`text-[12px] text-neutral-300 leading-relaxed font-medium transition-all duration-300 ${expanded ? "" : "line-clamp-2"}`}>
        {description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 flex items-center gap-0.5 text-[10px] font-bold text-white hover:text-neutral-200 uppercase tracking-widest transition-colors"
      >
        {expanded ? <>Show Less <ChevronUp className="w-3.5 h-3.5" /></> : <>Read More <ChevronDown className="w-3.5 h-3.5" /></>}
      </button>
    </div>
  );
};

export default ProfileDescription;
