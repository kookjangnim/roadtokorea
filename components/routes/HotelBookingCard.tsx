interface HotelBookingCardProps {
  cityName: string;
}

export default function HotelBookingCard({ cityName }: HotelBookingCardProps) {
  const agodaSearchUrl = `https://www.agoda.com/en-US/search?city=${encodeURIComponent(
    cityName
  )},%20South%20Korea`;

  const bookingComUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
    `${cityName}, South Korea`
  )}`;

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
          href={agodaSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-[1.25rem] bg-white px-4 py-4 transition-shadow hover:shadow-md"
        >
          <div>
            <div className="font-medium text-stone-900">Agoda</div>
            <div className="text-xs text-stone-500">Strong for Asia inventory</div>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Search
          </span>
        </a>

        <a
          href={bookingComUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-[1.25rem] bg-white px-4 py-4 transition-shadow hover:shadow-md"
        >
          <div>
            <div className="font-medium text-stone-900">Booking.com</div>
            <div className="text-xs text-stone-500">Wide hotel selection</div>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Search
          </span>
        </a>
      </div>
    </div>
  );
}
