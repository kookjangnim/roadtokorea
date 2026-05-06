'use client';

import { TransportMode } from '@/data/routeStopovers';

interface TransportModeTabsProps {
  selectedMode: TransportMode;
  onModeChange: (mode: TransportMode) => void;
}

const TRANSPORT_MODES: {
  mode: TransportMode;
  label: string;
  kicker: string;
}[] = [
  { mode: 'KTX', label: 'KTX', kicker: 'Fastest' },
  { mode: 'car', label: 'Car', kicker: 'Flexible' },
  { mode: 'bus', label: 'Bus', kicker: 'Practical' },
  { mode: 'bicycle', label: 'Bicycle', kicker: 'Slowest' },
];

export default function TransportModeTabs({
  selectedMode,
  onModeChange,
}: TransportModeTabsProps) {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-3 shadow-sm">
      <div className="grid gap-3 md:grid-cols-4">
        {TRANSPORT_MODES.map(({ mode, label, kicker }) => (
          <button
            key={mode}
            type="button"
            onClick={() => onModeChange(mode)}
            className={`rounded-[1.4rem] border px-4 py-4 text-left transition-colors ${
              selectedMode === mode
                ? 'border-stone-900 bg-stone-950 text-white'
                : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-white'
            }`}
          >
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                selectedMode === mode ? 'text-stone-300' : 'text-stone-500'
              }`}
            >
              {kicker}
            </p>
            <p className="mt-2 font-serif text-2xl">{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
