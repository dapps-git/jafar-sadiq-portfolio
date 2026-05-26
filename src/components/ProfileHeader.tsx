import { useState } from "react";
import { Download, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { createPortal } from "react-dom";
import avatarImg from "@/assets/avatar.jpg";

interface ProfileHeaderProps {
  name: string;
  designation: string;
  businessName?: string;
  email?: string;
}

// Gallery photos from the public folder
const galleryPhotos = [
  {
    src: "/JAHFAR.jpg",
    label: "Photo 1",
    filename: "jafar-sadiq-1.jpg",
  },
  {
    src: "/JAHFAR.jpg.jpeg",
    label: "Photo 2",
    filename: "jafar-sadiq-2.jpeg",
  },
  {
    src: "/JahfarSir.png",
    label: "Photo 3",
    filename: "jafar-sadiq-sir.png",
  },
];

const ProfileHeader = ({ name, designation, businessName, email }: ProfileHeaderProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgLoaded(false);
    setActiveIdx((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgLoaded(false);
    setActiveIdx((prev) => (prev + 1) % galleryPhotos.length);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDownloading(true);
    const photo = galleryPhotos[activeIdx];
    try {
      const response = await fetch(encodeURI(photo.src));
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = photo.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(encodeURI(photo.src), "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleViewFull = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(encodeURI(galleryPhotos[activeIdx].src), "_blank");
  };

  const openGallery = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx(0);
    setImgLoaded(false);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        {/* Avatar + Gallery badge */}
        <div className="relative">
          <div
            className="relative w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-white cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-slate-100"
            title="Profile photo"
          >
            <img
              src={avatarImg}
              alt={name}
              className="w-full h-full object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Gallery Icon Badge */}
          <button
            onClick={openGallery}
            title="View Photo Gallery"
            className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white shadow-lg border-2 border-white hover:bg-sky-600 hover:scale-110 transition-all duration-200"
            aria-label="Open photo gallery"
          >
            <Images className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Profile info */}
        <div className="text-center flex flex-col items-center">
          {/* Name */}
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">
              {name}
            </h1>
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

      {/* Gallery Lightbox Modal (rendered via portal to escape stacking context) */}
      {isGalleryOpen &&
        createPortal(
          <div
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4"
            style={{ animation: "fadeIn 0.2s ease" }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gallery Card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              style={{ animation: "zoomIn 0.2s ease" }}
            >
              {/* Photo area */}
              <div className="relative w-full aspect-[4/5] bg-black flex items-center justify-center overflow-hidden">
                {/* Loading spinner */}
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <img
                  key={galleryPhotos[activeIdx].src}
                  src={galleryPhotos[activeIdx].src}
                  alt={galleryPhotos[activeIdx].label}
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                />

                {/* Prev / Next arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all hover:scale-105"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all hover:scale-105"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-1.5 py-3 bg-black/20">
                {galleryPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgLoaded(false); setActiveIdx(i); }}
                    className={`rounded-full transition-all duration-200 ${i === activeIdx ? "w-4 h-2 bg-sky-400" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>

              {/* Photo label & actions */}
              <div className="flex flex-col gap-3 px-4 pb-4 pt-1 bg-black/30">
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">{galleryPhotos[activeIdx].label} of {galleryPhotos.length}</p>
                </div>

                {/* Buttons row */}
                <div className="flex gap-2">
                  <button
                    onClick={handleViewFull}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-all hover:scale-105"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    View Full
                  </button>
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    <Download className={`w-3.5 h-3.5 ${isDownloading ? "animate-bounce" : ""}`} />
                    {isDownloading ? "Saving..." : "Download"}
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4">
              {galleryPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgLoaded(false); setActiveIdx(i); }}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${i === activeIdx ? "border-sky-400 shadow-lg shadow-sky-400/40" : "border-white/20 opacity-60 hover:opacity-90"}`}
                  aria-label={photo.label}
                >
                  <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes zoomIn { from { transform: scale(0.92); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </>
  );
};

export default ProfileHeader;
