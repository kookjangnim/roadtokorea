import { getTripHotelAffiliateUrl } from '@/data/tripAffiliateLinks';

interface HotelBookingCardProps {
  citySlug: string;
  cityName: string;
}

export default function HotelBookingCard({ citySlug, cityName }: HotelBookingCardProps) {
  const tripHotelUrl = getTripHotelAffiliateUrl(citySlug, 'city_page_stay_planning');
  if (!tripHotelUrl) return null;

  return (
    <div className="rounded-[2rem] bg-[linear-gradient(135deg,#eef2ff_0%,#f8fafc_46%,#eef7f3_100%)] p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-500">
        Stay planning
      </p>
      <h3 className="mt-3 font-serif text-3xl text-stone-950">Sleep in {cityName}</h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-stone-600">
        If this stop becomes an overnight, compare a couple of booking platforms before you lock
        it in. Route logic gets better when the right city earns a real stay.
      </p>

      <div className="mt-6 space-y-3">
        <a
          href={tripHotelUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="flex items-center justify-between rounded-[1.25rem] bg-white px-4 py-4 transition-shadow hover:shadow-md"
        >
          <div>
            <div className="font-medium text-stone-900">Trip.com</div>
            <div className="text-xs text-stone-500">Hotel search for this city</div>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Search
          </span>
        </a>
      </div>
    </div>
  );
}
