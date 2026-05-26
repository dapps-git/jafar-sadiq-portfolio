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
          className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{phone.label}</span>
            <span className="text-sm font-bold text-slate-800 mt-0.5">{phone.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${phone.number.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all hover:scale-105 shadow-sm"
              aria-label={`WhatsApp ${phone.label}`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-sm"
              aria-label={`Call ${phone.label}`}
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumbers;
