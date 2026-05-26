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
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-transparent text-[#25D366] hover:bg-[#25D366]/10 transition-all hover:scale-105"
              aria-label={`WhatsApp ${phone.label}`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 0C5.39 0 .002 5.39.002 12.029c0 2.125.553 4.197 1.605 6.005L0 24l6.135-1.61a11.954 11.954 0 005.891 1.545c6.638 0 12.026-5.389 12.026-12.029C24.052 5.39 18.665 0 12.031 0zm0 22.006c-1.8 0-3.568-.483-5.117-1.397l-.367-.218-3.799.997 1.015-3.703-.239-.38a9.972 9.972 0 01-1.528-5.276c0-5.512 4.484-9.995 9.998-9.995 2.671 0 5.181 1.041 7.07 2.931a9.923 9.923 0 012.928 7.07c-.004 5.515-4.488 9.998-10.002 9.998zm5.293-7.241c-.29-.144-1.716-.847-1.981-.944-.265-.096-.459-.144-.652.144-.194.288-.749.944-.919 1.137-.169.193-.338.216-.628.072-.29-.144-1.226-.451-2.335-1.439-.863-.77-1.446-1.72-1.616-2.01-.17-.289-.018-.446.127-.59.13-.13.29-.338.435-.507.145-.168.193-.288.29-.482.097-.193.048-.362-.024-.506-.073-.145-.654-1.576-.895-2.155-.236-.57-.496-.493-.68-.501-.179-.009-.383-.01-.588-.01-.205 0-.541.077-.82.386-.28.31-1.072 1.05-1.072 2.56 0 1.512 1.1 2.97 1.246 3.164.145.193 2.164 3.3 5.244 4.634.732.316 1.302.505 1.748.647.727.23 1.39.197 1.913.12.584-.087 1.716-.699 1.96-1.373.242-.676.242-1.256.17-1.376-.073-.12-.266-.193-.556-.338z"/>
              </svg>
            </a>
            <a
              href={`tel:${phone.number.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-transparent text-blue-600 hover:bg-blue-600/10 transition-all hover:scale-105"
              aria-label={`Call ${phone.label}`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.7 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c-.01-.56-.46-1-1.01-1z" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumbers;
