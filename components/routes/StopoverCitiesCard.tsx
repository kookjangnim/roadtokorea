import Image from 'next/image';
import Link from 'next/link';
import { RouteStopover } from '@/data/routeStopovers';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';

interface StopoverCitiesCardProps {
  stopover: RouteStopover;
  isLast: boolean;
}

function getStopoverImage(stopover: RouteStopover) {
  const tier2Hero = tier2Cities[stopover.citySlug]?.heroImage;
  const tier4Hero = tier4Cities[stopover.citySlug]?.heroImage;
  return tier2Hero || tier4Hero || '/images/placeholder.png';
}

function getCityGuideHref(stopover: RouteStopover) {
  // Tier 3 route nodes often reuse the quieter city-guide layer in tier-4.
  if (stopover.tier === 3) {
    return `/tier-4/${stopover.citySlug}`;
  }

  return `/tier-${stopover.tier}/${stopover.citySlug}`;
}

function getFallbackDecision(stopover: RouteStopover) {
  return stopover.whyItEarnsTime;
}

function getFallbackRecovery(stopover: RouteStopover) {
  return `Recovery value depends on route pace, but ${stopover.city} is most useful when you want the stop to improve the next leg rather than simply break distance.`;
}

function getFallbackSleepFood(stopover: RouteStopover) {
  return stopover.stayAdvice;
}

function getFallbackNextLeg(stopover: RouteStopover) {
  return `After ${stopover.city}, the route starts leaning more clearly into the next chapter rather than the previous one.`;
}

export default function StopoverCitiesCard({
  stopover,
  isLast,
}: StopoverCitiesCardProps) {
  const stopoverImage = getStopoverImage(stopover);

  return (
    <article className="border-b border-stone-100 p-6 last:border-0">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative h-44 w-full overflow-hidden rounded-[1.5rem] bg-stone-100 md:h-32 md:w-40">
          <Image
            src={stopoverImage}
            alt={stopover.city}
            fill
            sizes="(max-width: 768px) 100vw, 160px"
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Stopover city
              </p>
              <h3 className="mt-2 font-serif text-3xl text-stone-950">{stopover.city}</h3>
              <p className="mt-2 text-sm text-stone-500">
                Tier {stopover.tier} · {stopover.cumulativeTime} from Seoul
              </p>
            </div>

            {!isLast && (
              <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-4 py-3 text-left md:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Next leg
                </p>
                <p className="mt-2 font-serif text-2xl text-stone-950">
                  {stopover.travelTimeFromPrevious}
                </p>
                <p className="text-xs text-stone-500">from the previous stop</p>
              </div>
            )}
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-700 md:text-base">
            {stopover.pitch}
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-[1.25rem] bg-stone-50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Route role
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{stopover.routeRole}</p>
            </div>
            <div className="rounded-[1.25rem] bg-stone-50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Why keep it
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                {stopover.decisionReason ?? getFallbackDecision(stopover)}
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-stone-50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{stopover.whyItEarnsTime}</p>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Recovery value
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                {stopover.recoveryValue ?? getFallbackRecovery(stopover)}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Sleep and food
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                {stopover.sleepValue ?? getFallbackSleepFood(stopover)}
                {stopover.foodValue ? ` ${stopover.foodValue}` : ''}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Next chapter
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                {stopover.terrainTransition ?? ''}
                {stopover.terrainTransition && stopover.nextLegLogic ? ' ' : ''}
                {stopover.nextLegLogic ?? getFallbackNextLeg(stopover)}
              </p>
            </div>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {stopover.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link
              href={getCityGuideHref(stopover)}
              className="inline-flex rounded-full border border-stone-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-800 transition-colors hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              Open {stopover.city}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
