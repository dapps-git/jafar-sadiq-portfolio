import ProfileHeader from "@/components/ProfileHeader";
import PhoneNumbers from "@/components/PhoneNumbers";
import SocialMediaGroups from "@/components/SocialMediaGroups";
import ProfileDescription from "@/components/ProfileDescription";
import ProfileDetails from "@/components/ProfileDetails";

const phones = [
  { label: "Personal Number", number: "+91 9633872234" },
  { label: "Office Number", number: "+91 9207000409" },
];

const descriptionText =
  "A dedicated mentor and career guidance professional with extensive experience in student counselling,Psychometric assessment interpretation, leadership development, and educational consulting. Actively associated with academic, social, and humanitarian organizations across Kerala in various leadership and advisory roles.";

const bubbles = [
  { size: 40, left: "5%", delay: "0s", duration: "14s" },
  { size: 25, left: "15%", delay: "2s", duration: "18s" },
  { size: 60, left: "25%", delay: "4s", duration: "16s" },
  { size: 30, left: "40%", delay: "1s", duration: "20s" },
  { size: 50, left: "55%", delay: "6s", duration: "15s" },
  { size: 20, left: "70%", delay: "3s", duration: "22s" },
  { size: 45, left: "80%", delay: "8s", duration: "17s" },
  { size: 35, left: "92%", delay: "5s", duration: "19s" },
  { size: 55, left: "12%", delay: "7s", duration: "21s" },
  { size: 30, left: "62%", delay: "9s", duration: "13s" },
  { size: 40, left: "48%", delay: "11s", duration: "17s" },
  { size: 25, left: "85%", delay: "10s", duration: "15s" },
];

const Index = () => {
  return (
    <div className="animated-bg min-h-screen w-full relative flex flex-col items-center justify-start overflow-hidden">
      {/* Animated floating orbs */}
      <div className="orb-1 absolute top-[-5%] left-[-10%] w-[450px] h-[450px] bg-rose-300/45 rounded-full pointer-events-none" />
      <div className="orb-2 absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] bg-blue-400/30 rounded-full pointer-events-none" />
      <div className="orb-3 absolute top-[35%] right-[5%] w-[300px] h-[300px] bg-indigo-300/30 rounded-full pointer-events-none" />

      {/* Dynamic Rising Bubbles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {bubbles.map((b, idx) => (
          <div
            key={idx}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
            }}
          />
        ))}
      </div>

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(#93c5fd 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative top arc line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      {/* === CONTENT CARD === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-4 py-10">
        <div className="w-full max-w-sm flex flex-col items-center gap-5">

          {/* Profile Header (Avatar, Name, Designation) */}
          <div className="w-full animate-entrance delay-1">
            <ProfileHeader
              name="Mr. Jafar Sadiq Puliyakkode"
              designation="Career Counsellor | Life Coach | Educator"
            />
          </div>

          {/* Interactive Collapsible Professional Credentials */}
          <div className="w-full animate-entrance delay-2">
            <ProfileDetails title="View Professional Profile" />
          </div>

          {/* Collapsible 2-line Description with Read More */}
          <div className="w-full animate-entrance delay-3">
            <ProfileDescription description={descriptionText} />
          </div>

          {/* Actionable Phone & WhatsApp Contacts */}
          <div className="w-full animate-entrance delay-4">
            <PhoneNumbers phones={phones} />
          </div>

          {/* Reordered Social Media Lists */}
          <div className="w-full animate-entrance delay-5">
            <SocialMediaGroups />
          </div>

          {/* Premium Subtle Footer */}
          <div className="w-full text-center animate-entrance" style={{ animationDelay: "850ms" }}>
            <p className="text-[10px] font-semibold text-slate-400 tracking-widest mt-4 uppercase">
              Powered by Crevionads LLP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
