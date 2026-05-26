import { Phone, MessageCircle } from "lucide-react";

interface PhoneEntry {
  label: string;
  number: string;
}

interface PhoneNumbersProps {
  phones: PhoneEntry[];
} 

const PhoneNumbers = ({ phones }: PhoneNumbersProps) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
      {phones.map((phone) => (
        <div
          key={phone.label}
          className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-white/10 bg-neutral-900/70 shadow-lg backdrop-blur-sm transition-all hover:border-white/20"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">{phone.label}</span>
            <span className="text-sm font-bold text-white mt-0.5">{phone.number}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* WhatsApp - styled cleanly matching the social media icon style */}
            <a
              href={`https://wa.me/${phone.number.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all hover:scale-110"
              aria-label={`WhatsApp ${phone.label}`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            {/* Call - styled cleanly matching the social media icon style */}
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-7 h-7 rounded text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all hover:scale-110"
              aria-label={`Call ${phone.label}`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumbers;
