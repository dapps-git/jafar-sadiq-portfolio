import { useState } from "react";
import { ChevronDown, ChevronUp, User } from "lucide-react";

const DetailedBiography = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl shadow-md hover:shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-all text-white font-medium text-sm group"
      >
        <span className="flex items-center gap-2">
          <User className="w-4 h-4 animate-pulse" />
          View Detailed Profile
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
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1 py-3.5 px-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all text-xs text-slate-600 leading-relaxed font-normal text-justify hyphens-auto break-words scrollbar-thin">
          <div className="text-center pb-2.5 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-800">Jafar Sadiq K</h3>
            <p className="text-[10px] text-slate-500 italic mt-0.5 font-medium">Also known as Jafar Sadiq Puliyakode</p>
          </div>

          <p>
            <strong className="text-slate-800 font-semibold">Jafar Sadiq K</strong> is a distinguished career guidance professional, certified psychometric assessor, and published writer based in Kerala, India. With over seven years of specialised experience in career counselling, he is committed to empowering students, graduates, and working professionals to make informed, purposeful career decisions through the application of scientifically validated psychometric assessment tools.
          </p>

          <p>
            Recognised for his practical expertise and research-informed approach, Jafar has successfully guided hundreds of individuals toward fulfilling academic and professional trajectories. To date, he has facilitated more than 300 career guidance sessions across Kerala, equipping participants with the clarity and confidence needed to navigate an increasingly competitive landscape.
          </p>

          <p>
            Beyond his counselling practice, Jafar is an established writer whose work appears regularly in prominent publications including Siraj Daily CIGI Blog , and  WEFI Bulletins . Through these platforms, he addresses critical topics such as career planning, professional readiness, and personal development, reaching a broad audience seeking direction and clarity in their careers.
          </p>

          <p>
            Jafar has been invited as a keynote speaker at several of Kerala's foremost educational forums, including Madhyamam Educafe and WEFI Educine . His presentations are widely appreciated for delivering actionable insights, motivating audiences, and fostering a forward-looking mindset among students and professionals alike.
          </p>

          <p>
            Guided by a deep commitment to social impact, Jafar champions a holistic approach to career development — one that integrates self-awareness, competency building, and mental well-being into every aspect of the decision-making process. His overarching mission is to help individuals unlock their full potential and build careers that are both meaningful and sustainable.
          </p>

          <div className="mt-2 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <h4 className="font-bold text-slate-800 text-[10px] uppercase tracking-wider">Contact Information</h4>
            <div className="flex flex-col gap-2 text-[11px] font-medium text-slate-700">
              <a
                href="mailto:jafarswadiq@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>📧</span> jafarswadiq@gmail.com
              </a>
              <a
                href="tel:+919633872234"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>📞</span> +91 96338 72234
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBiography;
