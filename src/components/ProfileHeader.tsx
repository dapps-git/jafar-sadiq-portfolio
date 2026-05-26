import { useState } from "react";
import { CheckCircle, Download, X } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

interface ProfileHeaderProps {
  name: string;
  designation: string;
  businessName?: string;
  email?: string;
}

const ProfileHeader = ({ name, designation, businessName, email }: ProfileHeaderProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDownloading(true);
    try {
      const response = await fetch(avatarImg);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "jafar-sadiq-puliyakkode.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image", error);
      // Fallback
      window.open(avatarImg, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        {/* Clickable Avatar Photo */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-white cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-slate-100"
          title="Click to view full photo"
        >
          <img
            src={avatarImg}
            alt={name}
            className="w-full h-full object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover overlay indicator */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white tracking-wider bg-black/40 px-2 py-1 rounded-full uppercase">
              View Photo
            </span>
          </div>
        </div>

        {/* Profile info */}
        <div className="text-center flex flex-col items-center">
          {/* Name with verification badge */}
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">
              {name}
            </h1>
            <CheckCircle className="w-5 h-5 text-blue-600 fill-blue-600 shrink-0" />
          </div>

          {/* Designation */}
          <p className="text-xs font-semibold text-gray-600 mt-2.5 bg-slate-100 px-3 py-1.5 rounded-full tracking-wide inline-block leading-tight text-center max-w-[280px]">
            {designation}
          </p>

          {/* Optional Business Name & Contact Info */}
          {businessName && (
            <p className="text-xs text-gray-500 font-medium mt-2 max-w-[280px] leading-relaxed">
              {businessName}
            </p>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-xs text-blue-600 hover:text-blue-700 hover:underline mt-1 font-semibold transition-colors flex items-center gap-1.5"
            >
              {email}
            </a>
          )}
        </div>
      </div>

      {/* Modern Full Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-[75vh] flex flex-col items-center gap-4 animate-in zoom-in-95 duration-200"
          >
            <img
              src={avatarImg}
              alt={name}
              className="max-w-full max-h-[65vh] md:max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            />

            {/* Title / Name details inside modal */}
            <div className="text-center text-white px-4">
              <h2 className="text-base font-bold tracking-wide">{name}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{designation}</p>
            </div>

            {/* Glowing Download Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-bold text-sm shadow-xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50"
            >
              <Download className={`w-4 h-4 ${isDownloading ? "animate-bounce" : ""}`} />
              {isDownloading ? "Downloading..." : "Download Photo"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileHeader;
