const buyers = [
  'Velin Bikov', 'Anislav Yakov', 'Valentin Stoyanov', 'Dragomir Hristov', 'Rosen Petrov',
  'Ivan Sevov', 'Георги Михайлов', 'Стела Георгиева', 'Bozhidar Valkov', 'Vasil Nikolov',
  'Dzhemal Ahmedov', 'Тома Томов', 'Elena Ivanova', 'Stanimir Lazarov', 'Aleksandar Evstatiev',
  'Stefan Georgiev', 'Pavel Eftimovski', 'Евелина Попова', 'Mariya Dunev', 'Daniel Delchunkov',
  'Yana Yankova', 'Андрей Петков', 'Lilian Foteva', 'Daniel Yordanov', 'Todor Mangarov',
  'Dr. Hristov', 'Veronika Mihaylova', 'Bozhidar Krastev', 'Silvia Nikolova', 'Yordan Kanov',
  'Borislav Borisov', 'Янка Стамболова', 'Elena Tsvetkova', 'Julia Sindrakova', 'Daniela Dimova',
  'Iskra Avdzhieva', 'Maria Yordanova', 'Hrisimir Ivanov', 'Jivomir Iliev', 'Dimitar Varadinov',
  'Vesela Mancheva', 'Мауро Бономи', 'Simeon Georgiev', 'Liliya Nedeva', 'Sonya Peychev',
  'Stefani Nikolova', 'Yordan Yordanov', 'Krasimir Tsonev', 'Kiril Milanov', 'Aleksandar Simov',
  'Мария Славова', 'Irina Ovsyannikova', 'Petya Terziyska', 'Александър Димитров', 'Ivan Mollov',
  'Gergana Sarov', 'Anton Kotov', 'Hristo Iliev', 'Darina Hristova', 'Ivaylo Petkov',
  'Vilyamir Stefanov', 'Галина Рупчанска', 'Ivan Ralev', 'Polina Yoncheva', 'Krasimir Andonov',
  'Мартин Василев', 'Mariela Slavenova', 'Dean Kurdov', 'Nikol Chepanova', 'Йордан Алексиев',
  'Aleksander Alyolov', 'Rostislav Totev', 'Десислав Димитров', 'Христиана Георгиева', 'Suat Mehrem',
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}

const palette = [
  'from-blue-600 to-blue-800', 'from-emerald-600 to-emerald-800',
  'from-rose-600 to-rose-800', 'from-amber-500 to-amber-700',
  'from-cyan-600 to-cyan-800', 'from-violet-600 to-violet-800',
  'from-teal-600 to-teal-800', 'from-orange-600 to-orange-800',
];

const items = [...buyers, ...buyers];

export default function BuyersTicker() {
  return (
    <div className="relative py-3 bg-black/50 border-y border-white/8 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />

      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center gap-2">
        {[0, 1, 2].map(i => (
          <span key={i} className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] whitespace-nowrap ml-1">
          Вече се включиха
        </span>
      </div>

      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {items.map((name, i) => (
          <div key={i} className="flex items-center gap-2.5 mx-5 flex-shrink-0">
            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${palette[i % palette.length]} flex items-center justify-center shadow-md flex-shrink-0`}>
              <span className="text-white text-[9px] font-bold">{getInitials(name)}</span>
            </div>
            <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{name}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-slate-700 flex-shrink-0 ml-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
