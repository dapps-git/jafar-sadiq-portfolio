import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProfileDescriptionProps {
  description: ReactNode;
}

const ProfileDescription = ({ description }: ProfileDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full rounded-xl border border-slate-100 bg-white shadow-sm px-3 py-3.5 transition-all">
      <div className="relative overflow-hidden transition-all duration-300">
        <p
          className={`text-xs text-slate-600 leading-[1.6] font-normal text-left sm:text-justify transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"
            }`}
        >
          {description}
        </p>

        {/* Fade-out gradient for collapsed state */}
        {!isExpanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-5 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.95), transparent)",
            }}
          />
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 flex items-center justify-center gap-1 w-full text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors py-1.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </div>
  );
};

export default ProfileDescription;
