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
  "A dedicated mentor and career guidance professional with extensive experience in student counselling, psychometric assessment interpretation, leadership development, and educational consulting. Actively associated with academic, social, and humanitarian organizations across Kerala in various leadership and advisory roles.";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start bg-slate-50/50">
      {/* Decorative top arc line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* === CONTENT CARD === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-4 py-10">
        <div className="w-full max-w-sm flex flex-col items-center gap-5">

          {/* Profile Header (Avatar, Name, Designation) */}
          <ProfileHeader
            name="Mr. Jafar Sadiq Puliyakkode"
            designation="Career Counsellor | Life Coach | Educator"
          />

          {/* Interactive Collapsible Professional Credentials */}
          <ProfileDetails title="View Professional Profile" />

          {/* Collapsible 2-line Description with Read More */}
          <ProfileDescription description={descriptionText} />

          {/* Actionable Phone & WhatsApp Contacts */}
          <PhoneNumbers phones={phones} />

          {/* Reordered Social Media Lists */}
          <div className="w-full">
            <SocialMediaGroups />
          </div>

          {/* Premium Subtle Footer */}
          <p className="text-[10px] font-semibold text-slate-400 tracking-widest mt-4 uppercase">
            Powered by Crevionads LLP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
