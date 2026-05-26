import { useEffect } from "react";
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

// Tiny slow-drifting gold/silver dust specks — premium, classy, standard
const dustParticles = [
  { size: 3, left: "5%",  delay: "0s",  duration: "28s" },
  { size: 2, left: "14%", delay: "5s",  duration: "34s" },
  { size: 4, left: "23%", delay: "9s",  duration: "30s" },
  { size: 2, left: "35%", delay: "2s",  duration: "38s" },
  { size: 3, left: "47%", delay: "14s", duration: "26s" },
  { size: 2, left: "58%", delay: "7s",  duration: "32s" },
  { size: 4, left: "68%", delay: "11s", duration: "28s" },
  { size: 2, left: "77%", delay: "3s",  duration: "36s" },
  { size: 3, left: "88%", delay: "17s", duration: "29s" },
  { size: 2, left: "96%", delay: "6s",  duration: "33s" },
  { size: 3, left: "42%", delay: "20s", duration: "31s" },
  { size: 2, left: "72%", delay: "13s", duration: "27s" },
  { size: 4, left: "8%",  delay: "24s", duration: "35s" },
  { size: 2, left: "54%", delay: "18s", duration: "30s" },
  { size: 3, left: "82%", delay: "8s",  duration: "37s" },
];

const Index = () => {
  useEffect(() => {
    // Preload large gallery images silently in background right after render
    const imagesToPreload = [
      "/JAHFAR.jpg.jpeg",
      "/JAHFAR%20%20%20%20.jpg.jpeg",
      "/Jahfar%20Sir.png"
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="animated-bg min-h-screen w-full relative flex flex-col items-center justify-start overflow-hidden">
      {/* Animated floating orbs (Luxurious champagne/silver/gold soft shimmers) */}
      <div className="orb-1 absolute top-[-5%] left-[-10%] w-[400px] h-[400px] bg-amber-100/5 rounded-full pointer-events-none" />
      <div className="orb-2 absolute bottom-[-10%] right-[-10%] w-[380px] h-[380px] bg-white/5 rounded-full pointer-events-none" />
      <div className="orb-3 absolute top-[35%] right-[5%] w-[260px] h-[260px] bg-amber-600/5 rounded-full pointer-events-none" />

      {/* Slow-Drifting Gold/Silver Dust Particle Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {dustParticles.map((p, idx) => (
          <div
            key={idx}
            className="dust-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Subtle silver dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative top arc line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* === CONTENT CARD === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-4 py-10">
        <div className="w-full max-w-sm flex flex-col items-center gap-2">

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
            <p className="text-[9px] font-bold text-neutral-500 tracking-widest mt-6 uppercase">
              Powered by Crevionads LLP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
