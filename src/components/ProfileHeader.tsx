import { useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle, Download, X, Images, ChevronLeft, ChevronRight } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

interface ProfileHeaderProps {
  name: string;
  designation: string;
}

const galleryImages = [
  { url: "/JAHFAR.jpg.jpeg",             label: "Photo 1" },
  { url: "/JAHFAR%20%20%20%20.jpg.jpeg", label: "Photo 2" },
  { url: "/Jahfar%20Sir.png",            label: "Photo 3" },
];

const ProfileHeader = ({ name, designation }: ProfileHeaderProps) => {
  const [lightbox, setLightbox] = useState<null | "avatar" | "gallery">(null);
  const [idx, setIdx]           = useState(0);
  const [busy, setBusy]         = useState(false);

  const download = async (src: string, filename: string) => {
    setBusy(true);
    try {
      const encodedSrc = encodeURI(src);
      const res  = await fetch(encodedSrc);
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = Object.assign(document.createElement("a"), { href: url, download: filename });
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Download failed, opening in new window", e);
      window.open(encodeURI(src), "_blank");
    } finally {
      setBusy(false);
    }
  };

  const prev = () => setIdx((p) => (p - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setIdx((p) => (p + 1) % galleryImages.length);

  return (
    <>
      {/* ── Profile block ── */}
      <div className="flex flex-col items-center gap-2">
        {/* Avatar + gallery badge */}
        <div className="relative">
          <div
            onClick={() => setLightbox("avatar")}
            className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white/20 bg-neutral-900 shadow-xl cursor-pointer hover:border-white/50 hover:scale-[1.03] transition-all duration-200"
          >
            <img
              src={avatarImg}
              alt={name}
              className="w-full h-full object-cover object-[center_10%]"
            />
          </div>

          {/* Gallery trigger badge */}
          <button
            onClick={() => { setIdx(0); setLightbox("gallery"); }}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white border border-neutral-900 text-black flex items-center justify-center shadow-lg hover:bg-neutral-200 hover:scale-105 transition-all"
            title="View photos"
          >
            <Images className="w-4 h-4" />
          </button>
        </div>

        {/* Name + designation */}
        <div className="text-center mt-1">
          <div className="flex items-center justify-center gap-1.5">
            <h1 className="text-[17px] font-bold text-white tracking-tight">{name}</h1>
            <CheckCircle className="w-4 h-4 text-white fill-white shrink-0" />
          </div>
          <p className="text-[11px] font-medium text-neutral-400 mt-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md inline-block tracking-wide">
            {designation}
          </p>
        </div>
      </div>

      {/* ── Lightbox (Rendered via React Portal directly in document.body to prevent layout/z-index stacking issues) ── */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="w-full max-w-sm bg-neutral-950 border border-white/10 rounded-lg p-5 flex flex-col items-center gap-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Title */}
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                {lightbox === "avatar" ? "Profile Photo" : "Photo Gallery"}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {lightbox === "avatar" ? (
              /* Single profile photo view */
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-full aspect-[4/5] bg-black rounded overflow-hidden border border-white/10 flex items-center justify-center">
                  <img
                    src={avatarImg}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-semibold text-xs tracking-wide">{name}</span>
                <button
                  onClick={() => download(avatarImg, "jafar-sadiq.jpg")}
                  disabled={busy}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  {busy ? "Downloading…" : "Download Profile Photo"}
                </button>
              </div>
            ) : (
              /* Multi-photo slider view */
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Image frame */}
                <div className="relative w-full aspect-[4/5] bg-black rounded overflow-hidden flex items-center justify-center border border-white/10">
                  <img
                    key={idx}
                    src={galleryImages[idx].url}
                    alt={galleryImages[idx].label}
                    className="w-full h-full object-contain"
                  />
                  {/* Prev / Next navigation overlays */}
                  <button
                    onClick={prev}
                    className="absolute left-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition border border-white/10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition border border-white/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {/* Counter */}
                  <span className="absolute bottom-2.5 right-3 text-[10px] text-white/80 font-bold bg-black/60 px-2 py-0.5 rounded border border-white/5">
                    {idx + 1} / {galleryImages.length}
                  </span>
                </div>

                {/* Thumbnails list */}
                <div className="flex gap-2 justify-center">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`w-12 h-15 rounded overflow-hidden border transition-all ${
                        i === idx ? "border-white scale-105" : "border-white/10 opacity-40 hover:opacity-100"
                      }`}
                    >
                      <img src={img.url} className="w-full h-full object-cover" alt="" />
                    </button>
                  ))}
                </div>

                {/* Main Action Button - Download option */}
                <button
                  onClick={() => download(galleryImages[idx].url, `jafar-photo-${idx + 1}.jpg`)}
                  disabled={busy}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  {busy ? "Downloading…" : `Download Photo ${idx + 1}`}
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProfileHeader;
