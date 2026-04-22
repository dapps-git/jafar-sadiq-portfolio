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
    <div className="w-full flex flex-col gap-2">
      {phones.map((phone) => (
        <div
          key={phone.label}
          className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">{phone.label}</span>
            <span className="text-sm font-semibold text-gray-800">{phone.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${phone.number.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              aria-label={`WhatsApp ${phone.label}`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
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


