import ProfileHeader from "@/components/ProfileHeader";
import PhoneNumbers from "@/components/PhoneNumbers";
import SocialMediaGroups from "@/components/SocialMediaGroups";

const phones = [
  { label: "Number", number: "+91 9633872224" },
  { label: "Business Number", number: "+91 9207000409" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start px-3 py-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-4">
        <ProfileHeader
          name="JAFAR SADIQ"
          designation="Chief Career Counsellor"
          businessName="SKIOLO Career Assessment Centre "
          email="teamskiolo@gmail.com"
        />

        <PhoneNumbers phones={phones} />

        {/* Social Media Groups Section */}
        <div className="w-full">
          <SocialMediaGroups />
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Powered by Crevionads LLP
        </p>
      </div>
    </div>
  );
};

export default Index;
