'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

interface AdSenseUnitProps {
  client?: string;
  slot?: string;
  label?: string;
}

export default function AdSenseUnit({ client, slot, label = 'Advertisement' }: AdSenseUnitProps) {
  useEffect(() => {
    if (!client || !slot) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and preview environments may prevent AdSense initialization.
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <aside className="ad-unit" aria-label={label}>
      <span className="ad-unit__label">{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
