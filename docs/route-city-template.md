# Route City Page Template

Goal: every city page should make the past and present coexist while still helping the traveler decide whether the stop belongs on the route.

## Required Story Spine

1. **Historical Weight**  
   What did this city used to mean? Use one clear historical axis: war, old roads, port trade, Confucian culture, rail, industry, temples, markets, defense, or regional administration.

2. **Modern Identity**  
   What does the city produce, protect, or express now? This can include food manufacturing, universities, industry, outdoor culture, hospitals, markets, festivals, logistics, design, or local lifestyle.

3. **Route Meaning**  
   Why does the past-and-present story matter on this route? Tie the city back to the next leg, overnight logic, recovery, food, transport, or emotional pacing.

## Image Minimum

- Hero image that shows the city identity, not generic atmosphere.
- Route or map visual that explains why the city sits here.
- One historical or cultural proof image.
- One present-day proof image.
- One stay, food, recovery, or street-level image.

## Junction City Add-On

Junction cities need one extra responsibility: they must explain the branch. The canonical page should stay at `/cities/[city]`, while route cards can still surface the city inside multiple route contexts. The copy must clearly answer:

- Which routes overlap here?
- What does the traveler choose after this city?
- Why is the city more than a road split?

Yeoju is the first sample: Route 1 can move Seoul -> Yeoju -> Chungju, while Route 2 can move Seoul -> Yeoju -> Wonju. The page must make that choice visible without making two duplicate Yeoju pages.

## Trend Layer

Modern trends can be part of a city page when they revive a durable local story. Treat film, drama, food, festival, or social-media attention as a current lens, not as the whole identity of the city.

Yeongwol is the sample: the film trend around `Wang-gwa Saneun Namja` matters because it reactivates Danjong's exile story, Cheongnyeongpo, Jangneung, and Danjong Culture Festival. The page should also mention crowding and preservation pressure when a trend sends large numbers of visitors into a heritage site.

## Branch Routes

Branches are short optional extensions from a flagship route, not new flagship routes. Name them by parent route and letter:

- `Branch 1A`: a short branch from Route 1
- `Branch 2A`: a short branch from Route 2

Use `/route-[n]/branch-[letter]` for branch URLs. Branch 2A is the sample: `/route-2/branch-a` covers `Wonju -> Jecheon -> Yeongwol`. It exists because Route 2 already uses Wonju as a hinge, and this branch lets travelers deepen inland without confusing the main Seoul-to-Gangneung promise.

## Image Production Slots

Every city brief should request five slots before publication:

- `hero`: the city identity in one image.
- `history`: royal tomb, temple, fortress, battlefield, old road, market, or heritage proof.
- `present`: factory, outlet, university, market, festival, industry, craft, or modern lifestyle proof.
- `route`: map, road, station, river, pass, coast, or junction cue.
- `street`: food, stay zone, recovery, riverside, or everyday local texture.

If a slot is missing, keep the page publishable only when the source-backed reference list names the missing image target. Do not hide missing imagery behind generic atmosphere.

The machine-readable registry lives in `data/cityImageSlots.json`. Each required city needs:

- all five slots: `hero`, `history`, `present`, `route`, `street`
- a real local asset or external URL
- a `sourceHref`
- a production brief long enough to guide the next image pass

Run `npm.cmd run check:city-images` before considering a city content pass complete.

## Chungju-Grade QA

- The city has a route role and a city soul.
- The history section is short, specific, and connected to the trip.
- The present-day section proves the city is still alive now.
- The page gives stay/skip judgment.
- The next leg changes because this city was included.
- The images make the city easier to believe.
- Junction cities show every overlapping route without duplicating the city story.
