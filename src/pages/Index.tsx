import ProfileHeader from "@/components/ProfileHeader";
import PhoneNumbers from "@/components/PhoneNumbers";
import SocialMediaGroups from "@/components/SocialMediaGroups";
import ProfileDescription from "@/components/ProfileDescription";
import ProfileDetails from "@/components/ProfileDetails";
import AcademicProfile from "@/components/AcademicProfile";

const phones = [
  { label: "Personal Number", number: "+91 9633872234" },
  { label: "Office Number", number: "+91 9207000409" },
];

const descriptionText =
  "A Passionate Educationist and Career Guidance professional with extensive experience in counseling students, psychometric Assessment interpretation, leadership development, and educational consulting. Actively associated with academic, social, and humanitarian organizations across Kerala in multiple capacities."
const Index = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start bg-gradient-to-b from-[#fbf2f7] via-[#f3f9fe] to-[#e6f4fe] overflow-hidden">
      {/* Background radial soft glows (Elegant Pink-Purple-Blue transition) */}
      <div className="absolute top-[-10%] left-[-15%] w-[500px] h-[500px] bg-pink-200/35 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-15%] w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-200/45 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle modern dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.55]"
        style={{
          backgroundImage: `radial-gradient(#c084fc 1px, transparent 1px), radial-gradient(#60a5fa 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* Decorative top arc line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* === CONTENT CARD === */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-4 py-10">
        <div className="w-full max-w-sm flex flex-col items-center gap-3">

          {/* Profile Header (Avatar, Name, Designation) */}
          <ProfileHeader
            name="Mr. Jafar Sadiq Puliyakkode"
            designation="Career Counsellor | Parenting Coach | Educator"
          />

          {/* Interactive Collapsible Professional Credentials */}
          <ProfileDetails title="View Professional Profile" />

          {/* Interactive Collapsible Academic Credentials */}
          <AcademicProfile />

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
