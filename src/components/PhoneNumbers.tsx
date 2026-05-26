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
            {/* WhatsApp - keeps vibrant green brand color for excellent UX */}
            <a
              href={`https://wa.me/${phone.number.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all hover:scale-105 shadow-sm"
              aria-label={`WhatsApp ${phone.label}`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            {/* Call button - classy business-style silver/white design */}
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-9 h-9 rounded bg-white/5 border border-white/25 text-white hover:bg-white hover:text-black transition-all hover:scale-105 shadow-sm"
              aria-label={`Call ${phone.label}`}
            >
              <Phone className="w-4 h-4 fill-white hover:fill-black" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumbers;
