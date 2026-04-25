import { CheckCircle } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

interface ProfileHeaderProps {
  name: string;
  designation: string;
  businessName: string;
  email:string;
}
 
const ProfileHeader = ({ name, designation, businessName , email }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Avatar */}
   <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl">
  <img
    src={avatarImg}
    alt={name}
    className="w-full h-full object-cover object-[center_10%]"
  />
</div>

      {/* Profile info */}
      <div className="text-center">
        {/* Name with verification */}
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-lg font-bold text-gray-800">
            {name}
          </h1>
          <CheckCircle className="w-5 h-5 text-blue-600 fill-blue-600" />
        </div>

        {/* Designation */}
        <p className="text-sm font-medium text-gray-600">
          {designation}
        </p>

        {/* Business Name */}
        <p className="text-xs text-gray-500 mt-1">
          {businessName}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {email}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
